import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

type ParticleColor = "violet" | "green" | "yellow" | "amber" | "indigo" | "fuchsia";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  color: ParticleColor;
}

const colorOptions: ParticleColor[] = ["violet", "green", "yellow", "amber", "indigo", "fuchsia"];

const generateParticles = (count: number, colors?: ParticleColor[]): Particle[] => {
  const availableColors = colors && colors.length > 0 ? colors : ["violet", "green"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
    color: availableColors[Math.floor(Math.random() * availableColors.length)],
  }));
};

interface FloatingParticlesProps {
  count?: number;
  className?: string;
  colors?: ParticleColor[];
}

const colorClasses: Record<ParticleColor, string> = {
  violet: "bg-primary/10",
  green: "bg-secondary/10", 
  yellow: "bg-yellow-500/10",
  amber: "bg-amber-500/10",
  indigo: "bg-indigo-500/10",
  fuchsia: "bg-fuchsia-500/10",
};

export function FloatingParticles({ count = 6, className = "", colors }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [key, setKey] = useState(0);

  const regenerateParticles = useCallback(() => {
    setParticles(generateParticles(count, colors));
    setKey(prev => prev + 1);
  }, [count, colors]);

  useEffect(() => {
    regenerateParticles();

    const handleResize = () => {
      regenerateParticles();
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('fullscreenchange', handleResize);
    };
  }, [regenerateParticles]);

  return (
    <div key={key} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full blur-3xl ${colorClasses[particle.color]}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

interface AnimatedLinesProps {
  className?: string;
  variant?: "violet" | "yellow" | "amber";
}

const lineColorSchemes = {
  violet: {
    left: "from-transparent via-violet-500/20 to-transparent",
    right: "from-transparent via-fuchsia-500/20 to-transparent",
    leftOrb: "bg-violet-500/50",
    rightOrb: "bg-fuchsia-500/50",
  },
  yellow: {
    left: "from-transparent via-yellow-500/20 to-transparent",
    right: "from-transparent via-amber-500/20 to-transparent",
    leftOrb: "bg-yellow-500/50",
    rightOrb: "bg-amber-500/50",
  },
  amber: {
    left: "from-transparent via-amber-500/20 to-transparent",
    right: "from-transparent via-yellow-500/20 to-transparent",
    leftOrb: "bg-amber-500/50",
    rightOrb: "bg-yellow-500/50",
  },
};

export function AnimatedLines({ className = "", variant = "violet" }: AnimatedLinesProps) {
  const [key, setKey] = useState(0);
  const colors = lineColorSchemes[variant];

  useEffect(() => {
    const handleResize = () => {
      setKey(prev => prev + 1);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('fullscreenchange', handleResize);
    };
  }, []);

  return (
    <div key={key} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Vertical lines */}
      <motion.div
        className={`absolute left-[10%] top-0 w-px h-full bg-gradient-to-b ${colors.left}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className={`absolute left-[90%] top-0 w-px h-full bg-gradient-to-b ${colors.right}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />
      
      {/* Floating orbs on lines */}
      <motion.div
        className={`absolute left-[10%] w-2 h-2 rounded-full ${colors.leftOrb}`}
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`absolute left-[90%] w-2 h-2 rounded-full ${colors.rightOrb}`}
        animate={{ y: ["100vh", "0vh"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function GridBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 grid-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}
