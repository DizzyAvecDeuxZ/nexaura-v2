// PARTICULES VISIBLES - Version debug
import { motion } from "framer-motion";

interface PageParticlesProps {
  color: "yellow" | "violet" | "mixed";
}

export function PageParticles({ color }: PageParticlesProps) {
  const baseColor = color === "yellow" ? "#facc15" : color === "violet" ? "#a855f7" : "#facc15";
  const altColor = color === "yellow" ? "#f59e0b" : color === "violet" ? "#d946ef" : "#a855f7";
  
  // Positions fixes visibles
  const spots = [
    { x: 10, y: 20 },
    { x: 85, y: 15 },
    { x: 75, y: 45 },
    { x: 15, y: 60 },
    { x: 80, y: 75 },
    { x: 40, y: 85 },
    { x: 60, y: 30 },
    { x: 25, y: 40 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      {spots.map((pos, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: i % 2 === 0 ? baseColor : altColor,
            opacity: 0.5,
            filter: "blur(20px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 4,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
