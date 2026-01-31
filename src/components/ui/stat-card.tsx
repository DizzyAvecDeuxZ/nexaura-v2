import { useRef, MouseEvent, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
}

export function StatCard({ value, label, delay }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(50);
    mouseY.set(50);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const spotlightGradient = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(350px circle at ${x}% ${y}%, rgba(255, 255, 255, 0.08) 0%, transparent 65%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative text-center group rounded-2xl p-6 overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {/* Fond avec backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl" />

      {/* Bordure dégradée subtile */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent"
           style={{ padding: "1px" }}>
        <div className="absolute inset-[1px] rounded-2xl bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Effet spotlight qui suit la souris */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: spotlightGradient,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.3 },
        }}
      />

      {/* Lueur au hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: isHovered
            ? "0 8px 32px rgba(168, 85, 247, 0.15), 0 0 0 1px rgba(168, 85, 247, 0.1)"
            : "0 0 0 1px rgba(255, 255, 255, 0.05)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Particules décoratives au hover */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full"
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}

      {/* Contenu */}
      <motion.div
        className="relative z-10"
        animate={{
          y: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="text-4xl md:text-5xl font-bold mb-2"
          animate={{
            backgroundImage: isHovered
              ? "linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)"
              : "linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)",
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {value}
        </motion.div>
        <motion.div
          className="text-sm font-medium"
          animate={{
            color: isHovered ? "rgb(209, 213, 219)" : "rgb(156, 163, 175)",
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.div>
      </motion.div>

      {/* Ligne décorative en bas */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5), transparent)",
        }}
        animate={{
          width: isHovered ? "80%" : "0%",
          x: "-50%",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}
