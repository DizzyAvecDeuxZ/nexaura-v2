import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShinyText } from "@/components/ui/shiny-text";

const faqs = [
  {
    question: "Combien de temps pour créer un site ?",
    answer:
      "Selon la complexité : 5-7 jours pour un one-page, 7-12 jours pour un site vitrine multi-pages, et 15+ jours pour un projet sur-mesure. Nous vous donnons toujours une estimation précise après notre call de découverte.",
  },
  {
    question: "Allez-vous utiliser un no-code ou du code custom ?",
    answer:
      "Nous utilisons les technologies les plus adaptées à votre projet. Pour les sites simples, nous privilégions des solutions modernes et performantes. Pour les projets complexes, nous développons du code sur-mesure pour une flexibilité maximale.",
  },
  {
    question: "Est-ce que je peux modifier le site après ?",
    answer:
      "Absolument ! Nous vous livrons un site avec une interface d'administration simple. Vous pourrez modifier textes, images et contenu en toute autonomie. Pour les modifications plus techniques, nous proposons des forfaits de maintenance.",
  },
  {
    question: "Et les mises à jour, c'est inclus ?",
    answer:
      "Le premier mois de support est inclus. Ensuite, nous proposons des forfaits de maintenance mensuels ou annuels selon vos besoins. Les mises à jour de sécurité critiques sont toujours prioritaires.",
  },
  {
    question: "Vous travaillez avec quel hébergement ?",
    answer:
      "Nous recommandons des hébergeurs fiables et performants adaptés à votre budget. Nous nous occupons de toute la configuration technique pour vous.",
  },
  {
    question: "Vous faites aussi du SEO ?",
    answer:
      "Oui ! Tous nos sites sont optimisés pour le référencement naturel (SEO on-page). Pour une stratégie SEO plus avancée, nous proposons des accompagnements dédiés.",
  },
  {
    question: "Quel est votre délai de réponse ?",
    answer:
      "Nous garantissons une réponse sous 24h ouvrées. Pendant la phase de développement, nous sommes disponibles par chat et email pour un suivi réactif de votre projet.",
  },
];

export function FAQSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated gradient orb - CSS animation */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-orb-drift" />

      <div className="container-wide max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <ShinyText className="text-lg text-gray-400">
            Tout ce que vous devez savoir avant de nous contacter
          </ShinyText>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-xl rounded-xl px-6 border border-white/10 hover:border-violet-500/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:text-violet-400 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
