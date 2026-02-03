import { Outlet } from "react-router-dom";
import { Header } from "@/components/navigation/Header";
import { Link } from "react-router-dom";
import { NexauraLogo3DChrome } from "@/components/NexauraLogo3DChrome";

/**
 * Layout pour les pages Digital
 * Thème VIOLET - bg-black avec accents violet
 */
export function DigitalLayout() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header 
        variant="digital" 
        ctaLabel="Demander un devis"
        onCtaClick={() => {
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      
      {/* Footer Digital - Thème Violet */}
      <footer className="bg-black border-t border-violet-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <NexauraLogo3DChrome size={40} />
                <span className="text-white font-bold text-lg">
                  Nexaura <span className="text-violet-400">Digital</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm max-w-md">
                Expertise en applications métiers B2B et digitalisation opérationnelle. 
                Nous créons des solutions sur-mesure pour accompagner votre transformation numérique.
              </p>
            </div>

            {/* Navigation Digital */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/digital/apps" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
                    Applications
                  </Link>
                </li>
                <li>
                  <Link to="/digital/maintenance" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link to="/digital/contact" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-500 text-sm">
                  contact@nexaura.fr
                </li>
                <li className="text-gray-500 text-sm">
                  +33 (0)1 XX XX XX XX
                </li>
                <li>
                  <Link to="/consulting" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
                    Nexaura Consulting →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-violet-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2026 Nexaura Digital. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="/" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
