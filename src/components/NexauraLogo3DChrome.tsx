import { cn } from "@/lib/utils";
import logoChrome from "@/assets/logo-nexaura-3d-chrome.webp";

interface NexauraLogo3DChromeProps {
  size?: number;
  className?: string;
}

export function NexauraLogo3DChrome({ size = 400, className }: NexauraLogo3DChromeProps) {
  return (
    <img
      src={logoChrome}
      alt="Nexaura Logo 3D Chrome"
      className={cn("object-contain", className)}
      style={{ width: size, height: size }}
    />
  );
}
