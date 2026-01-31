import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
}

// ⚠️ REMPLACER PAR DE VRAIS TÉMOIGNAGES CLIENTS
const testimonials: Testimonial[] = [
  {
    quote: "Nexaura a livré notre site e-commerce en 3 semaines pile poil. Le processus était fluide, la communication excellente. Résultat : +40% de conversions dès le premier mois.",
    author: "Sophie Martin",
    role: "Fondatrice",
    company: "Boutique Éco-Responsable",
    rating: 5,
  },
  {
    quote: "L'audit IA nous a ouvert les yeux sur des opportunités qu'on ne voyait pas. Le POC développé par Nexaura a convaincu notre board d'investir dans la transformation digitale.",
    author: "Karim Bennani",
    role: "Directeur Digital",
    company: "Groupe Industriel Alger",
    rating: 5,
  },
  {
    quote: "Professionnalisme irréprochable. Devis respecté, délais tenus, qualité au rendez-vous. Enfin une agence tech qui tient ses promesses !",
    author: "Thomas Dubois",
    role: "CEO",
    company: "Startup Fintech",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-violet-950/5 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm mb-6 border border-violet-500/20">
            Témoignages clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ils nous ont fait <GradientText>confiance</GradientText>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des entrepreneurs, des dirigeants, des équipes qui ont transformé leur présence digitale avec Nexaura.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>+50 entreprises accompagnées</span>
          </div>
          <span className="hidden md:block text-gray-700">•</span>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 font-bold">4.9/5</span>
            <span>note moyenne</span>
          </div>
          <span className="hidden md:block text-gray-700">•</span>
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold">98%</span>
            <span>de recommandation</span>
          </div>
        </motion.div>

        {/* Note pour l'admin */}
        <div className="mt-12 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
          <p className="text-yellow-400 text-sm text-center">
            <strong>⚠️ Admin :</strong> Modifiez les témoignages dans <code>src/components/TestimonialsSection.tsx</code>
          </p>
        </div>
      </div>
    </section>
  );
}
