import { useState, useRef, MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlareCardProps {
  children: ReactNode;
  className?: string;
}

export function GlareCard({ children, className }: GlareCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}% ${y}%,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(168, 85, 247, 0.4) 20%,
      rgba(236, 72, 153, 0.3) 40%,
      transparent 70%)`
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn("relative rounded-xl overflow-hidden", className)}
    >
      {/* Effet de glare principal qui suit la souris avec forme arrondie */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 rounded-xl overflow-hidden"
        style={{
          background,
          borderRadius: "inherit",
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.1 },
        }}
      />

      {children}
    </div>
  );
}
