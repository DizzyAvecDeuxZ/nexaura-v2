import { Link } from "react-router-dom";
import { NexauraLogo3DChrome } from "@/components/NexauraLogo3DChrome";

interface FooterProps {
  variant?: "holding" | "digital" | "consulting";
}

export function Footer({ variant = "holding" }: FooterProps) {
  const brandColor = variant === "digital" ? "text-violet-400" : 
                     variant === "consulting" ? "text-indigo-400" : "text-white";

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <NexauraLogo3DChrome size={40} />
              <span className="text-white font-bold text-lg">
                Nexaura <span className={brandColor}>{variant === "holding" ? "Holding" : variant === "digital" ? "Digital" : "Consulting"}</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              Nexaura Holding regroupe deux expertises complémentaires pour accompagner 
              votre transformation digitale : le développement opérationnel et le conseil stratégique en IA.
            </p>
          </div>

          {/* Digital Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Digital</h4>
            <ul className="space-y-2">
              <li><Link to="/digital/sites" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">Sites Web</Link></li>
              <li><Link to="/digital/apps" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">Applications</Link></li>
              <li><Link to="/digital/maintenance" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">Maintenance</Link></li>
              <li><Link to="/digital/contact" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Consulting Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Consulting</h4>
            <ul className="space-y-2">
              <li><Link to="/consulting/audit" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">Audit IA</Link></li>
              <li><Link to="/consulting/poc" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">POC sur-mesure</Link></li>
              <li><Link to="/consulting/cases" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">Cas d'usage</Link></li>
              <li><Link to="/consulting/contact" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">RDV Stratégique</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Nexaura Holding. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link to="/holding/a-propos" className="text-gray-500 hover:text-white text-sm transition-colors">À propos</Link>
            <Link to="/" className="text-gray-500 hover:text-white text-sm transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
