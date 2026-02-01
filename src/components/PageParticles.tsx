import { motion } from "framer-motion";

interface PageParticlesProps {
  color: "yellow" | "violet" | "mixed";
}

const positions = [
  { x: 5, y: 10, size: 180 },
  { x: 85, y: 5, size: 220 },
  { x: 90, y: 35, size: 200 },
  { x: 8, y: 45, size: 160 },
  { x: 75, y: 55, size: 190 },
  { x: 15, y: 75, size: 210 },
  { x: 88, y: 80, size: 170 },
  { x: 45, y: 88, size: 200 },
  { x: 65, y: 25, size: 150 },
  { x: 25, y: 60, size: 180 },
];

export function PageParticles({ color }: PageParticlesProps) {
  const getGradient = (index: number) => {
    if (color === "yellow") {
      return "radial-gradient(circle, rgba(250,204,21,0.8) 0%, rgba(245,158,11,0.4) 50%, transparent 70%)";
    }
    if (color === "violet") {
      return "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(217,70,239,0.4) 50%, transparent 70%)";
    }
    // mixed
    return index % 2 === 0 
      ? "radial-gradient(circle, rgba(250,204,21,0.7) 0%, rgba(245,158,11,0.3) 50%, transparent 70%)"
      : "radial-gradient(circle, rgba(168,85,247,0.7) 0%, rgba(217,70,239,0.3) 50%, transparent 70%)";
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: pos.size,
            height: pos.size,
            background: getGradient(i),
            filter: "blur(30px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 5 + (i % 4),
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
