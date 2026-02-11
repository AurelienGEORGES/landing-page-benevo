import React, { useState } from 'react';

const faqItems = [
  {
    id: 1,
    question: 'Qu\'est-ce que BNEVO ?',
    answer:
      'BNEVO est une plateforme digitale conçue pour simplifier la gestion des bénévoles dans les associations. Nous transformons les heures de gestion administrative en quelques clics sereins.',
  },
  {
    id: 2,
    question: 'Quel est le coût de BNEVO ?',
    answer:
      'BNEVO propose plusieurs plans adaptés à tous les types d\'associations. Nous avons des plans à partir de 29€/mois pour les petites associations, avec des options plus complètes pour les plus grandes structures.',
  },
  {
    id: 3,
    question: 'Est-ce que mes données sont sécurisées ?',
    answer:
      'Oui, nous utilisons le chiffrement SSL/TLS et respectons les normes RGPD. Vos données sont stockées sur des serveurs sécurisés en France et sauvegardées régulièrement.',
  },
  {
    id: 4,
    question: 'Comment une inviter les bénévoles sur la plateforme ?',
    answer:
      'Très simple ! Vous générez un lien magique sans inscription. Les bénévoles cliquent sur le lien, remplissent leurs disponibilités et c\'est tout. Pas besoin de créer des comptes ou des mots de passe.',
  },
  {
    id: 5,
    question: 'Proposez-vous une période d\'essai gratuit ?',
    answer:
      'Oui ! Nous proposons 14 jours d\'accès gratuit à toutes les fonctionnalités du plan Professionnel. Aucune carte bancaire n\'est requise. Vous pouvez commencer dès maintenant.',
  },
  {
    id: 6,
    question: 'Puis-je exporter mes données ?',
    answer:
      'Bien sûr ! Vous pouvez exporter vos données en CSV ou JSON à tout moment. Vous restez propriétaire de vos données et pouvez les récupérer quand vous le souhaitez.',
  },
  {
    id: 7,
    question: 'Quel support client proposez-vous ?',
    answer:
      'Nous offrons un support par email 24/7 pour tous nos clients. Les plans Professionnel et Entreprise bénéficient d\'un support prioritaire et d\'un chatbot IA assistant.',
  },
  {
    id: 8,
    question: 'Comment commencer ?',
    answer:
      'C\'est facile ! Cliquez sur "Essayer gratuitement" ou "Demander une démo", créez votre compte gratuitement et commencez à ajouter vos bénévoles. Vous serez opérationnel en moins de 5 minutes.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Questions fréquemment posées</h2>
          <p>Trouvez les réponses aux questions les plus courantes</p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border-2 border-gray-200 rounded-custom overflow-hidden transition-all duration-300 hover:border-primary-green"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-text-dark text-left">
                  {item.question}
                </h3>
                <span
                  className={`text-primary-green text-2xl transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openId === item.id ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              {openId === item.id && (
                <div className="px-6 py-4 bg-white border-t-2 border-gray-200 animate-in fade-in slide-in-from-top-2">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-green to-secondary-green rounded-custom p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-white text-opacity-90 mb-6">
            Notre équipe est disponible pour discuter de vos besoins spécifiques
          </p>
          <button className="btn bg-white text-primary-green border-white hover:bg-gray-100">
            Contacter notre équipe
          </button>
        </div>
      </div>
    </section>
  );
}
