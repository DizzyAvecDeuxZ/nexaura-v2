import { cn } from "@/lib/utils";
import { CSSProperties, FC, ReactNode } from "react";

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
}

export const ShinyText: FC<ShinyTextProps> = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        "inline-block bg-[linear-gradient(110deg,#64748b,45%,#e2e8f0,55%,#64748b)] bg-clip-text text-transparent animate-shimmer",
        "[background-size:250%_100%]",
        className
      )}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      } as CSSProperties}
    >
      {children}
    </span>
  );
};
