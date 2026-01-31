import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(helmet());
app.use(cors({
  origin: [
    "https://nexauraholding.com",
    "http://localhost:8080",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json({ limit: "10kb" }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 requests per window
  message: { error: "Trop de requêtes, réessayez dans 15 minutes" }
});

// Schema de validation Zod
const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court").max(100, "Nom trop long"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  projectType: z.enum(["Site Web", "Application Mobile", "Autre"]),
  message: z.string().min(10, "Message trop court").max(2000, "Message trop long"),
  wantCall: z.boolean().default(false)
});

// Chemin du fichier de stockage des leads
const LEADS_FILE = path.join(__dirname, "data", "leads.json");

// Fonction pour lire les leads
async function readLeads() {
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Fonction pour sauvegarder les leads
async function saveLeads(leads) {
  await fs.mkdir(path.join(__dirname, "data"), { recursive: true });
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// Configuration email (à personnaliser avec vos identifiants SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || ""
  }
});

// Envoyer email de notification
async function sendNotificationEmail(lead) {
  if (!process.env.SMTP_USER) {
    console.log("[INFO] Email non configuré, notification ignorée");
    return;
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.NOTIFICATION_EMAIL || "services@nexauraholding.com",
    subject: `🚀 Nouveau lead Nexaura: ${lead.name}`,
    html: `
      <h2>Nouveau contact reçu!</h2>
      <p><strong>Nom:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Téléphone:</strong> ${lead.phone || "Non fourni"}</p>
      <p><strong>Type de projet:</strong> ${lead.projectType}</p>
      <p><strong>Message:</strong></p>
      <blockquote>${lead.message}</blockquote>
      <p><strong>Souhaite un appel:</strong> ${lead.wantCall ? "Oui" : "Non"}</p>
      <hr>
      <small>Reçu le ${new Date(lead.createdAt).toLocaleString("fr-FR")}</small>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("[OK] Email de notification envoyé");
  } catch (error) {
    console.error("[ERROR] Échec envoi email:", error.message);
  }
}

// Envoyer email de confirmation au client
async function sendConfirmationEmail(lead) {
  if (!process.env.SMTP_USER) return;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: lead.email,
    subject: "Merci pour votre demande - Nexaura",
    html: `
      <h2>Bonjour ${lead.name},</h2>
      <p>Merci d'avoir contacté Nexaura!</p>
      <p>Nous avons bien reçu votre demande concernant: <strong>${lead.projectType}</strong></p>
      <p>Notre équipe vous recontactera sous 24h.</p>
      ${lead.wantCall ? "<p>📞 Nous vous contacterons également par téléphone comme demandé.</p>" : ""}
      <br>
      <p>À très bientôt,</p>
      <p><strong>L'équipe Nexaura</strong></p>
      <hr>
      <small>Nexaura - Agence Web Moderne | <a href="https://nexauraholding.com">nexauraholding.com</a></small>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("[OK] Email de confirmation envoyé à", lead.email);
  } catch (error) {
    console.error("[ERROR] Échec envoi confirmation:", error.message);
  }
}

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// POST /api/contact - Créer un nouveau lead
app.post("/api/contact", limiter, async (req, res) => {
  try {
    // Validation avec Zod
    const validatedData = contactSchema.parse(req.body);
    
    // Créer le lead
    const lead = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      ...validatedData,
      createdAt: new Date().toISOString(),
      status: "new",
      ip: req.ip,
      userAgent: req.get("User-Agent")
    };

    // Sauvegarder
    const leads = await readLeads();
    leads.push(lead);
    await saveLeads(leads);

    console.log(`[NEW LEAD] ${lead.name} - ${lead.email} - ${lead.projectType}`);

    // Envoyer les emails (non-bloquant)
    sendNotificationEmail(lead).catch(console.error);
    sendConfirmationEmail(lead).catch(console.error);

    res.status(201).json({
      success: true,
      message: "Votre demande a été envoyée avec succès!",
      leadId: lead.id
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: "Données invalides",
        details: error.errors.map(e => ({ field: e.path[0], message: e.message }))
      });
    }
    
    console.error("[ERROR] Erreur création lead:", error);
    res.status(500).json({
      success: false,
      error: "Une erreur est survenue, veuillez réessayer"
    });
  }
});

// GET /api/leads - Liste des leads (protégé)
app.get("/api/leads", async (req, res) => {
  const apiKey = req.get("X-API-Key");
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ error: "Non autorisé" });
  }

  const leads = await readLeads();
  res.json({ total: leads.length, leads });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════════╗
  ║   🚀 Nexaura API Server                   ║
  ║   Port: ${PORT}                             ║
  ║   Endpoint: POST /api/contact             ║
  ╚═══════════════════════════════════════════╝
  `);
});
