import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  color: "violet" | "green";
}

const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
    color: Math.random() > 0.5 ? "violet" : "green",
  }));
};

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export function FloatingParticles({ count = 6, className = "" }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [key, setKey] = useState(0);

  const regenerateParticles = useCallback(() => {
    setParticles(generateParticles(count));
    setKey(prev => prev + 1);
  }, [count]);

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
          className={`absolute rounded-full blur-3xl ${
            particle.color === "violet" ? "bg-primary/10" : "bg-secondary/10"
          }`}
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

export function AnimatedLines({ className = "" }: { className?: string }) {
  const [key, setKey] = useState(0);

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
        className="absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute left-[90%] top-0 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />
      
      {/* Floating orbs on lines */}
      <motion.div
        className="absolute left-[10%] w-2 h-2 rounded-full bg-primary/50"
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[90%] w-2 h-2 rounded-full bg-secondary/50"
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
