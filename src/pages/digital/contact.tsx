import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Vortex } from "@/components/ui/vortex";
import { GradientText } from "@/components/ui/gradient-text";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";

const projectTypes = [
  "Site Web Vitrine",
  "Site E-commerce",
  "Application Mobile",
  "Maintenance",
  "Refonte",
  "Autre"
];

export default function DigitalContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Message envoyé ! Nous vous répondrons sous 24h.");
  };

  if (isSuccess) {
    return (
      <div className="relative min-h-screen bg-black overflow-x-hidden">
        <Vortex backgroundColor="black" className="fixed inset-0" particleCount={isMobile ? 50 : 150} baseHue={270} />
        <Header variant="digital" />
        
        <main className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full text-center"
          >
            <div className="w-20 h-20 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-violet-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Message envoyé !</h1>
            <p className="text-gray-400 mb-8">
              Merci pour votre demande. Je vous réponds sous 24h ouvrées.
            </p>
            <Button variant="cta" onClick={() => navigate("/digital")}>
              Retourner à l'accueil
            </Button>
          </motion.div>
        </main>

        <Footer variant="digital" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Vortex backgroundColor="black" className="fixed inset-0" particleCount={isMobile ? 50 : 150} baseHue={270} />
      
      <Header variant="digital" />

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Parlons de votre <GradientText>projet</GradientText>
              </h1>
              <p className="text-gray-400 text-lg mb-12">
                Remplissez ce formulaire pour recevoir un devis personnalisé sous 24h.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-white">contact@nexauraholding.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Téléphone</p>
                    <p className="text-white">+33 6 12 34 56 78</p>
                    <p className="text-xs text-yellow-500 mt-1">⚠️ Remplacer par votre vrai numéro</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Bureaux</p>
                    <p className="text-white">Paris, France & Alger, Algérie</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nom *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="jean@entreprise.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="+33 6 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Entreprise</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="Mon Entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Type de projet *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-4 py-2 rounded-lg text-sm transition-all ${
                          formData.projectType === type
                            ? "bg-violet-500 text-white"
                            : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Budget estimé</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    <option value="< 2k">Moins de 2 000 €</option>
                    <option value="2k-5k">2 000 € - 5 000 €</option>
                    <option value="5k-10k">5 000 € - 10 000 €</option>
                    <option value="10k-20k">10 000 € - 20 000 €</option>
                    <option value="> 20k">Plus de 20 000 €</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description du projet *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/5 border-white/10 text-white min-h-[120px]"
                    placeholder="Décrivez votre projet, vos objectifs, vos délais..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="xl" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-gray-500 text-xs text-center">
                  * Champs obligatoires. Vos données sont confidentielles.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer variant="digital" />
    </div>
  );
}
