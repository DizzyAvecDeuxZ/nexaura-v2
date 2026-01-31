import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "relative px-6 py-2.5 rounded-full overflow-hidden group",
        "bg-gradient-to-r from-violet-600 to-pink-600",
        "text-white text-sm font-medium",
        "transition-all duration-300",
        className
      )}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.4 }}
    >
      {/* Fond animé */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(168, 85, 247, 1) 0%, rgba(236, 72, 153, 1) 100%)",
            "linear-gradient(135deg, rgba(236, 72, 153, 1) 0%, rgba(168, 85, 247, 1) 100%)",
            "linear-gradient(135deg, rgba(168, 85, 247, 1) 0%, rgba(236, 72, 153, 1) 100%)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 50%", "200% 50%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Bordure lumineuse */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isHovered
            ? [
                "0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)",
                "0 0 30px rgba(236, 72, 153, 0.6), 0 0 50px rgba(168, 85, 247, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)",
                "0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)",
              ]
            : "0 0 0px rgba(168, 85, 247, 0)",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Contenu */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
