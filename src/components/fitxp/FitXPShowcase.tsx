import { motion } from "framer-motion";
import { useState } from "react";

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "home",
    title: "Dashboard Accueil",
    description: "Visualisez vos stats du jour : calories, streak, hydratation",
    videoSrc: "/videos/fitxp/fitxp_1.mp4",
  },
  {
    id: "workouts",
    title: "Programmes d'entraînement",
    description: "Des programmes adaptés à tous les niveaux",
    videoSrc: "/videos/fitxp/fitxp_2.mp4",
  },
  {
    id: "nutrition",
    title: "Suivi Nutrition",
    description: "Trackez vos macros et calories facilement",
    videoSrc: "/videos/fitxp/fitxp_3.mp4",
  },
  {
    id: "stats",
    title: "Statistiques",
    description: "Suivez votre progression avec des graphiques clairs",
    videoSrc: "/videos/fitxp/fitxp_4.mp4",
  },
];

function PhoneMockup({ videoSrc }: { videoSrc: string }) {
  return (
    <div className="relative w-[240px] h-[500px] bg-[#1a1a1a] rounded-[45px] p-2.5 shadow-2xl border border-gray-800">
      {/* Dynamic island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

      {/* Screen */}
      <div className="w-full h-full bg-[#121212] rounded-[38px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top"
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full" />
    </div>
  );
}

export function FitXPShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="showcase" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#FF6B6B]/10 rounded-full blur-[120px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container-wide relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Découvrez <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">l'expérience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une interface intuitive conçue pour vous accompagner au quotidien
          </p>
        </motion.div>

        {/* Showcase grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockups carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Active phone */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <PhoneMockup videoSrc={showcaseItems[activeIndex].videoSrc} />
              </motion.div>

              {/* Glow effect */}
              <div className="absolute -inset-10 bg-gradient-to-r from-violet-500/20 to-[#FF6B6B]/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {showcaseItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-violet-500/20 to-pink-500/20 border border-violet-500/50"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Progress bar for active item */}
                {activeIndex === index && (
                  <motion.div
                    className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-500 to-pink-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                      onAnimationComplete={() => {
                        setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
                      }}
                    />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
