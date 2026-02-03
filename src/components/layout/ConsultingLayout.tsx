import { Outlet } from "react-router-dom";
import { Header } from "@/components/navigation/Header";
import { Link } from "react-router-dom";
import { NexauraLogo3DChrome } from "@/components/NexauraLogo3DChrome";

/**
 * Layout pour les pages Consulting
 * Thème JAUNE/AMBER - bg-black avec accents yellow/amber
 */
export function ConsultingLayout() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header 
        variant="consulting" 
        ctaLabel="RDV Stratégique"
        onCtaClick={() => {
          window.location.href = '/consulting/contact';
        }}
      />
      
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      
      {/* Footer Consulting - Thème Jaune/Amber */}
      <footer className="bg-black border-t border-yellow-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <NexauraLogo3DChrome size={40} />
                <span className="text-white font-bold text-lg">
                  Nexaura <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Consulting</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm max-w-md">
                Conseil en IA et transformation digitale. Nous accompagnons les entreprises 
                dans leur stratégie d'intelligence artificielle et d'automatisation.
              </p>
            </div>

            {/* Navigation Consulting */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services IA</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/consulting/audit" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                    Audit IA
                  </Link>
                </li>
                <li>
                  <Link to="/consulting/poc" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                    POC sur-mesure
                  </Link>
                </li>
                <li>
                  <Link to="/consulting/cases" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                    Cas d'usage
                  </Link>
                </li>
                <li>
                  <Link to="/consulting/contact" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                    RDV Stratégique
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-500 text-sm">
                  consulting@nexaura.fr
                </li>
                <li className="text-gray-500 text-sm">
                  +33 (0)1 XX XX XX XX
                </li>
                <li>
                  <Link to="/digital" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                    Nexaura Digital →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-yellow-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2026 Nexaura Consulting. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="/" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
