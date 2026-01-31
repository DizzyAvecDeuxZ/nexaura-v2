import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollFloatProps {
  children: ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
}

export function ScrollFloat({
  children,
  className,
  offset = 50,
  duration = 1
}: ScrollFloatProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const elementTop = element.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrolled + windowHeight > elementTop) {
        const distance = scrolled + windowHeight - elementTop;
        const floatValue = Math.min(distance / 10, offset);
        element.style.transform = `translateY(-${floatValue}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div
      ref={ref}
      className={cn("transition-transform", className)}
      style={{
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      {children}
    </div>
  );
}
