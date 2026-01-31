import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { NexauraLogo3DChrome } from "@/components/NexauraLogo3DChrome";
import { TiltedCard } from "@/components/ui/tilted-card";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Offres", href: "#offres" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "Contact", href: "#contact" },
];

interface HeaderProps {
  onOpenContact: () => void;
}

export function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-4 md:px-8">
        <TiltedCard className="flex items-center gap-2 group" maxTilt={3}>
          <a
            href="#accueil"
            className="flex items-center gap-2 rounded-lg focus-visible-ring"
            aria-label="Nexaura - Retour à l'accueil"
          >
            {/* Mobile logo - smaller */}
            <NexauraLogo3DChrome
              size={isScrolled ? 60 : 80}
              className="transition-all duration-300 md:hidden"
            />
            {/* Tablet logo */}
            <NexauraLogo3DChrome
              size={isScrolled ? 100 : 140}
              className="transition-all duration-300 hidden md:block lg:hidden"
            />
            {/* Desktop logo */}
            <NexauraLogo3DChrome
              size={isScrolled ? 140 : 180}
              className="transition-all duration-300 hidden lg:block"
            />
          </a>
        </TiltedCard>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-violet-400 transition-colors relative group rounded-md px-2 py-1 focus-visible-ring"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 group-hover:w-full transition-all duration-300" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton onClick={onOpenContact}>
            <Phone size={18} />
            Réserver un appel
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white rounded-lg focus-visible-ring"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            role="navigation"
            aria-label="Menu principal mobile"
          >
            <nav className="container-wide py-6 px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-violet-400 transition-colors py-2 rounded-md focus-visible-ring"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="cta" className="mt-4 animate-none" onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}>
                Réserver un appel
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
