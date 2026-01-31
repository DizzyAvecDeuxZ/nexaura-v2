import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TransparentVideoProps {
  src: string;
  className?: string;
}

export function TransparentVideo({ src, className = "" }: TransparentVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const processFrame = () => {
      if (video.paused || video.ended) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Rendre transparent les pixels gris du quadrillage
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Détecter les nuances de gris (quadrillage)
        const isGray = Math.abs(r - g) < 20 && Math.abs(g - b) < 20 && Math.abs(r - b) < 20;
        const isLight = r > 100 && g > 100 && b > 100;

        if (isGray && isLight) {
          data[i + 3] = 0; // Rendre transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(processFrame);
    };

    video.addEventListener('play', processFrame);

    return () => {
      video.removeEventListener('play', processFrame);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="hidden"
      />
      <motion.canvas
        ref={canvasRef}
        className={className}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        style={{
          filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))',
        }}
      />
    </>
  );
}
