import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";
import logoNexaura from "@/assets/logo-nexaura-footer.webp";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Offres", href: "#offres" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-white/5">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-violet-500" />

      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logoNexaura} alt="Nexaura" className="h-32 w-auto mb-0 -ml-8" />
            <p className="text-gray-400 max-w-sm mb-6">
              Agence web next-gen. Design futuriste, technologie de pointe. Nous créons des expériences web qui impressionnent.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-violet-500 hover:border-violet-500 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:services@nexauraholding.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  services@nexauraholding.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nexaura. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-pink-400 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
