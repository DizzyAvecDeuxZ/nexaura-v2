import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NexauraLogo3DChrome } from "@/components/NexauraLogo3DChrome";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  variant: "holding" | "digital" | "consulting";
  onCtaClick?: () => void;
  ctaLabel?: string;
}

const navItems: Record<string, NavItem[]> = {
  digital: [
    { label: "Applications", href: "/digital/apps" },
    { label: "Maintenance", href: "/digital/maintenance" },
    { label: "Contact", href: "/digital/contact" }
  ],
  consulting: [
    { label: "Audit IA", href: "/consulting/audit" },
    { label: "POC", href: "/consulting/poc" },
    { label: "Cas d'usage", href: "/consulting/cases" },
    { label: "RDV Stratégique", href: "/consulting/contact" }
  ],
  holding: [
    { label: "Digital", href: "/digital" },
    { label: "Consulting", href: "/consulting" },
    { label: "À propos", href: "/holding/a-propos" }
  ]
};

const brandColors = {
  holding: "from-violet-500 to-indigo-500",
  digital: "from-violet-500 to-purple-500",
  consulting: "from-indigo-500 to-amber-500"
};

export function Header({ variant, onCtaClick, ctaLabel }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = navItems[variant];
  const showBackButton = variant !== "holding";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Left: Back button + Logo */}
          <div className="flex items-center gap-4">
            {showBackButton && (
              <a 
                href="/"
                className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Retour</span>
              </a>
            )}
            
            <a href={`/${variant === "holding" ? "" : variant}`} className="flex items-center gap-3">
              {variant === "holding" ? (
                <NexauraLogo3DChrome size={isScrolled ? 45 : 55} />
              ) : (
                <img 
                  src="/logo-icon-white.png" 
                  alt="Nexaura" 
                  className={isScrolled ? "w-10 h-auto" : "w-12 h-auto"}
                />
              )}
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg">Nexaura</span>
                {variant !== "holding" && (
                  <span className={`font-bold text-lg ml-1 ${variant === "digital" ? "text-violet-400" : "bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"}`}>
                    {variant === "digital" ? "Digital" : "Consulting"}
                  </span>
                )}
              </div>
            </a>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            {ctaLabel && onCtaClick && (
              <Button 
                variant="cta" 
                size="sm"
                className={`hidden sm:flex bg-gradient-to-r ${brandColors[variant]}`}
                onClick={onCtaClick}
              >
                {ctaLabel}
              </Button>
            )}

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-4 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {showBackButton && (
                <a 
                  href="/"
                  className="flex items-center gap-2 text-gray-400 py-3 border-b border-white/10"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Retour à l'accueil</span>
                </a>
              )}
              
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-gray-300 hover:text-white py-3 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {ctaLabel && onCtaClick && (
                <Button 
                  variant="cta" 
                  className={`mt-4 w-full bg-gradient-to-r ${brandColors[variant]}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onCtaClick();
                  }}
                >
                  {ctaLabel}
                </Button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
