import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Vortex } from "@/components/ui/vortex";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";

const companySizes = [
  "1-10 employés",
  "11-50 employés",
  "51-200 employés",
  "201-500 employés",
  "500+ employés"
];

const interests = [
  "Audit IA",
  "POC sur-mesure",
  "Accompagnement mensuel",
  "Transformation IA",
  "Formation équipes",
  "Autre"
];

export default function ConsultingContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    role: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Demande envoyée ! Nous vous contactons sous 24h.");
  };

  if (isSuccess) {
    return (
      <div className="relative min-h-screen bg-black overflow-x-hidden">
        <Vortex backgroundColor="black" className="fixed inset-0" particleCount={isMobile ? 50 : 150} baseHue={240} />
        <Header variant="consulting" />
        
        <main className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full text-center"
          >
            <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-indigo-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Demande envoyée !</h1>
            <p className="text-gray-400 mb-8">
              Notre équipe vous contactera sous 24h pour planifier un échange.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" className="bg-indigo-500 hover:bg-indigo-600" onClick={() => setShowCalendly(true)}>
                <Calendar className="w-4 h-4 mr-2" />
                Prendre RDV directement
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "/consulting"}>
                Retour
              </Button>
            </div>
          </motion.div>
        </main>

        <Footer variant="consulting" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Vortex backgroundColor="black" className="fixed inset-0" particleCount={isMobile ? 50 : 150} baseHue={240} />
      
      <Header variant="consulting" />

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prenons <span className="text-indigo-400">contact</span>
              </h1>
              <p className="text-gray-400 text-lg mb-12">
                Remplissez ce formulaire ou réservez directement un créneau de 30 minutes 
                pour discuter de vos enjeux IA.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-white">contact@nexauraholding.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Téléphone</p>
                    <p className="text-white">+33 1 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Bureaux</p>
                    <p className="text-white">Paris, France & Alger, Algérie</p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-500/10 rounded-2xl p-6 border border-indigo-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">Préférez-vous un appel ?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Réservez directement un créneau de 30 minutes dans notre agenda.
                </p>
                <Button 
                  className="bg-indigo-500 hover:bg-indigo-600"
                  onClick={() => setShowCalendly(true)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Voir les disponibilités
                </Button>
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">Prénom *</label>
                    <Input
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nom *</label>
                    <Input
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email professionnel *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="nom@entreprise.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Entreprise *</label>
                  <Input
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Taille de l'entreprise</label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="">Sélectionnez</option>
                      {companySizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Votre fonction</label>
                    <Input
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="CEO, CTO, RH..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Vous êtes intéressé par *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => setFormData({ ...formData, interest })}
                        className={`px-4 py-2 rounded-lg text-sm transition-all ${
                          formData.interest === interest
                            ? "bg-indigo-500 text-white"
                            : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Décrivez votre besoin</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/5 border-white/10 text-white min-h-[120px]"
                    placeholder="Quels sont vos enjeux ? Vos objectifs ? Vos délais ?"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="xl" 
                  className="w-full bg-indigo-500 hover:bg-indigo-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>

                <p className="text-gray-500 text-xs text-center">
                  * Champs obligatoires. Vos données sont confidentielles et ne seront jamais partagées.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer variant="consulting" />

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl w-full max-w-4xl h-[80vh] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 text-2xl"
            >
              ×
            </button>
            <div className="h-full flex items-center justify-center text-gray-400">
              <p>Widget Calendly à intégrer ici</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
