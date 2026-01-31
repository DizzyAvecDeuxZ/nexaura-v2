import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className, animate = true }: GradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-white via-violet-400 via-pink-400 via-violet-400 to-white bg-clip-text text-transparent",
        animate && "animate-gradient bg-[length:300%_auto]",
        className
      )}
    >
      {children}
    </span>
  );
}
