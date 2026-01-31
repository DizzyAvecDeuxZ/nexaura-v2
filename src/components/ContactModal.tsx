import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// URL de l'API - utiliser l'URL de production ou localhost en dev
const API_URL = import.meta.env.PROD 
  ? "https://api.nexauraholding.com" 
  : "http://localhost:3002";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    wantCall: false,
  });

  const projectTypeMap: Record<string, string> = {
    "website": "Site Web",
    "app": "Application Mobile",
    "other": "Autre"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Préparer les données avec le bon format
      const payload = {
        ...formData,
        projectType: projectTypeMap[formData.projectType] || formData.projectType,
        message: formData.message || "Pas de message spécifié"
      };

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      // Succès
      setIsSubmitted(true);
      toast.success("Merci ! On vous recontacte sous 24h");
      
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
          wantCall: false,
        });
      }, 2500);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Une erreur est survenue";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setError(null);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={handleClose}
          onKeyDown={(e) => e.key === 'Escape' && handleClose()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl shadow-hover max-w-lg w-full max-h-[90vh] overflow-y-auto border border-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 id="contact-modal-title" className="text-2xl font-bold text-foreground">
                Contactez-nous
              </h3>
              <button
                onClick={handleClose}
                onKeyDown={(e) => e.key === 'Enter' && handleClose()}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Fermer le formulaire de contact"
                disabled={isLoading}
              >
                <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
              </button>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-12 text-center"
              >
                <div className="w-16 h-16 bg-primary-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Message envoyé !
                </h4>
                <p className="text-muted-foreground">
                  On vous recontacte sous 24h
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-500">{error}</p>
                  </motion.div>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <Input
                    required
                    minLength={2}
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Votre nom"
                    className="border-border focus:border-primary"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="votre@email.com"
                    className="border-border focus:border-primary"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Téléphone (optionnel)
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+33 6 00 00 00 00"
                    className="border-border focus:border-secondary"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Type de projet *
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, projectType: value })
                    }
                    required
                    disabled={isLoading}
                  >
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Sélectionnez..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Site Web</SelectItem>
                      <SelectItem value="app">Application Mobile</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    minLength={10}
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Décrivez votre projet..."
                    rows={4}
                    className="border-border focus:border-primary"
                    disabled={isLoading}
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="wantCall"
                    checked={formData.wantCall}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, wantCall: checked as boolean })
                    }
                    className="border-secondary data-[state=checked]:bg-secondary"
                    disabled={isLoading}
                  />
                  <label
                    htmlFor="wantCall"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Je veux un appel gratuit de 20 minutes
                  </label>
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer ma demande
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
