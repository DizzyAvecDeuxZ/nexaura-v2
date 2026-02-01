// Système de particules simple et visible
import { motion } from "framer-motion";

interface PageParticlesProps {
  color: "yellow" | "violet" | "mixed";
}

const positions = [
  { x: 10, y: 20, size: 150 },
  { x: 85, y: 15, size: 200 },
  { x: 70, y: 40, size: 180 },
  { x: 20, y: 55, size: 160 },
  { x: 90, y: 60, size: 140 },
  { x: 5, y: 80, size: 190 },
  { x: 75, y: 85, size: 170 },
  { x: 40, y: 70, size: 130 },
  { x: 60, y: 30, size: 155 },
  { x: 30, y: 90, size: 175 },
];

export function PageParticles({ color }: PageParticlesProps) {
  const getColor = (index: number) => {
    if (color === "yellow") return "rgba(250, 204, 21, 0.4)";
    if (color === "violet") return "rgba(168, 85, 247, 0.4)";
    // mixed
    return index % 2 === 0 ? "rgba(250, 204, 21, 0.35)" : "rgba(168, 85, 247, 0.35)";
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: pos.size,
            height: pos.size,
            background: `radial-gradient(circle, ${getColor(i)} 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8 + (i % 4),
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
