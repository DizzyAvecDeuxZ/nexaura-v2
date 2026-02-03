import { useState, useEffect, useCallback, useMemo } from "react";

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

interface FloatingParticlesProps {
  count?: number;
  className?: string;
  colors?: ParticleColor[];
  layers?: number; // Nombre de couches (1 = 100vh, 4 = 400vh)
}

const colorClasses: Record<ParticleColor, string> = {
  violet: "bg-primary/20",
  green: "bg-secondary/20", 
  yellow: "bg-yellow-400/30",
  amber: "bg-amber-400/30",
  indigo: "bg-indigo-500/20",
  fuchsia: "bg-fuchsia-500/20",
};

// Generate random particles - optimisé avec useMemo
const generateParticles = (count: number, colors?: ParticleColor[]): Particle[] => {
  const availableColors = colors && colors.length > 0 ? colors : ["violet", "green"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40, // Réduit légèrement la taille
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 12, // Légèrement réduit
    delay: Math.random() * 3,
    color: availableColors[Math.floor(Math.random() * availableColors.length)],
  }));
};

// Composant pour une seule particule avec animation CSS
function ParticleDot({ particle }: { particle: Particle }) {
  const style: React.CSSProperties = {
    width: particle.size,
    height: particle.size,
    left: `${particle.x}%`,
    top: `${particle.y}%`,
    animationDuration: `${particle.duration}s`,
    animationDelay: `${particle.delay}s`,
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl ${colorClasses[particle.color]} animate-float-particle`}
      style={style}
    />
  );
}

// Composant pour une seule couche de particules
function ParticleLayer({ 
  count, 
  colors, 
  offset 
}: { 
  count: number; 
  colors?: ParticleColor[]; 
  offset: number;
}) {
  const particles = useMemo(() => generateParticles(count, colors), [count, colors]);

  return (
    <div 
      className="fixed left-0 right-0 h-screen overflow-visible pointer-events-none"
      style={{ top: `${offset * 100}vh` }}
    >
      {particles.map((particle) => (
        <ParticleDot key={particle.id} particle={particle} />
      ))}
    </div>
  );
}

export function FloatingParticles({ count = 4, className = "", colors, layers = 1 }: FloatingParticlesProps) {
  // Réduit le nombre de particules par défaut pour de meilleures performances
  const optimizedCount = Math.min(count, 6);
  
  return (
    <div className={className}>
      {Array.from({ length: layers }, (_, i) => (
        <ParticleLayer 
          key={i} 
          count={optimizedCount} 
          colors={colors} 
          offset={i}
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
    <div key={key} className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Vertical lines avec animation CSS */}
      <div
        className={`absolute left-[10%] top-0 w-px h-full bg-gradient-to-b ${colors.left} animate-line-grow`}
        style={{ animationDelay: '0s' }}
      />
      <div
        className={`absolute left-[90%] top-0 w-px h-full bg-gradient-to-b ${colors.right} animate-line-grow`}
        style={{ animationDelay: '0.3s' }}
      />
      
      {/* Floating orbs on lines avec animation CSS */}
      <div
        className={`absolute left-[10%] w-2 h-2 rounded-full ${colors.leftOrb} animate-orb-float-down`}
      />
      <div
        className={`absolute left-[90%] w-2 h-2 rounded-full ${colors.rightOrb} animate-orb-float-up`}
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
