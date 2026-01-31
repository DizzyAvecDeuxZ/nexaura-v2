import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface StarBorderProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  as?: any;
}

export function StarBorder({
  children,
  className,
  speed = 1,
  as: Component = "div",
}: StarBorderProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Component
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn("relative rounded-xl overflow-hidden", className)}
    >
      {/* Bordure qui suit exactement la forme du bouton */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          opacity: hovered ? 1 : 0.5,
          boxShadow: hovered
            ? "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)"
            : "0 0 0px rgba(168, 85, 247, 0)",
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        style={{
          background: "linear-gradient(135deg, rgba(168, 85, 247, 0.6) 0%, rgba(236, 72, 153, 0.6) 100%)",
          padding: "2px",
          borderRadius: "inherit",
        }}
      />

      {/* Étoiles scintillantes au hover */}
      <AnimatePresence>
        {hovered && (
          <>
            {[...Array(8)].map((_, i) => {
              const randomX = 10 + Math.random() * 80;
              const randomY = 10 + Math.random() * 80;
              const randomDelay = Math.random() * 0.2;
              const randomSize = 1.5 + Math.random() * 1.5;

              return (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: `${randomSize}px`,
                    height: `${randomSize}px`,
                    top: `${randomY}%`,
                    left: `${randomX}%`,
                    boxShadow: "0 0 6px rgba(255, 255, 255, 0.9)",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0.7, 0],
                    scale: [0, 1.2, 0.8, 0],
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: randomDelay,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </>
        )}
      </AnimatePresence>

      {/* Contenu du bouton avec coins arrondis */}
      <div className="relative z-10 rounded-xl overflow-hidden">{children}</div>
    </Component>
  );
}
