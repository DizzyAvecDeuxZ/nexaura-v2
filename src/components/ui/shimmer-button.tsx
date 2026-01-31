import { ReactNode, useRef, MouseEvent, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
}

export function ShimmerButton({ children, className }: ShimmerButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
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

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}% ${y}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 30%, transparent 70%)`
  );

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative rounded-xl overflow-hidden", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Gradient de fond */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(236, 72, 153, 0.9) 100%)",
        }}
      />

      {/* Effet de brillance qui suit la souris */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      />

      {/* Shimmer animé en continu */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "200% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.25) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      {/* Bordure lumineuse */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)",
        }}
      />

      {/* Contenu */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
