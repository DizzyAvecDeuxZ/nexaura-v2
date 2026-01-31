import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Équipe réactive, site livré en 8 jours, résultats au rendez-vous !",
    name: "Marie Dupont",
    role: "Fondatrice, Boutique Mode",
    rating: 5,
  },
  {
    quote: "Excellent travail sur notre application. Très professionnel et à l'écoute.",
    name: "Ahmed Benali",
    role: "CEO, StartupTech",
    rating: 5,
  },
  {
    quote: "Je recommande à 100%. Mon site génère maintenant 3x plus de leads.",
    name: "Jean-Pierre Martin",
    role: "Coach Business",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ce que nos clients disent de nous
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-violet-500/20 group-hover:text-violet-500/30 transition-colors" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-pink-500 text-pink-500" />
                ))}
              </div>

              <p className="text-white text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
