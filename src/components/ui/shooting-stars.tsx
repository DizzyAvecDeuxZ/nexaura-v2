'use client';

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#a855f7",
  trailColor = "#ec4899",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update dimensions based on container size
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, []);

  // Listen for resize events
  useEffect(() => {
    updateDimensions();
    
    const handleResize = () => {
      updateDimensions();
      // Reset star on resize to avoid positioning issues
      setStar(null);
    };

    window.addEventListener('resize', handleResize);
    // Also handle fullscreen changes
    document.addEventListener('fullscreenchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('fullscreenchange', handleResize);
    };
  }, [updateDimensions]);

  const getRandomStartPoint = useCallback(() => {
    const { width, height } = dimensions;
    if (width === 0 || height === 0) return { x: 0, y: 0, angle: 45 };
    
    const side = Math.floor(Math.random() * 4);
    const offsetX = Math.random() * width;
    const offsetY = Math.random() * height;

    switch (side) {
      case 0:
        return { x: offsetX, y: 0, angle: 45 };
      case 1:
        return { x: width, y: offsetY, angle: 135 };
      case 2:
        return { x: offsetX, y: height, angle: 225 };
      case 3:
        return { x: 0, y: offsetY, angle: 315 };
      default:
        return { x: 0, y: 0, angle: 45 };
    }
  }, [dimensions]);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {};
  }, [minSpeed, maxSpeed, minDelay, maxDelay, getRandomStartPoint, dimensions]);

  useEffect(() => {
    const { width, height } = dimensions;
    
    const moveStar = () => {
      if (star && width > 0 && height > 0) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100;
          if (
            newX < -20 ||
            newX > width + 20 ||
            newY < -20 ||
            newY > height + 20
          ) {
            return null;
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          };
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star, dimensions]);

  return (
    <div ref={containerRef} className={cn("w-full h-full absolute inset-0", className)}>
      <svg
        ref={svgRef}
        className="w-full h-full absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      >
        {star && (
          <rect
            key={star.id}
            x={star.x}
            y={star.y}
            width={starWidth * star.scale}
            height={starHeight}
            fill="url(#gradient)"
            transform={`rotate(${star.angle}, ${
              star.x + (starWidth * star.scale) / 2
            }, ${star.y + starHeight / 2})`}
          />
        )}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
            <stop
              offset="100%"
              style={{ stopColor: starColor, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
