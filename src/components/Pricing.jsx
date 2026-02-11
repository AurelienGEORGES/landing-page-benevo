import React, { useState } from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    annualPrice: 290,
    description: 'Parfait pour les petites associations',
    features: [
      'Jusqu\'à 50 bénévoles',
      '10 événements par mois',
      'Assignation basique',
      'Support par email',
      'Lien magique bénévoles',
    ],
    cta: 'Commencer',
    highlighted: false,
  },
  {
    name: 'Professionnel',
    monthlyPrice: 79,
    annualPrice: 790,
    description: 'Pour les associations en croissance',
    features: [
      'Jusqu\'à 500 bénévoles',
      'Événements illimités',
      'Assignation intelligente',
      'Support prioritaire',
      'Templates d\'événements',
      'Gestion des désistements',
      'Lien magique bénévoles',
      'Analytics détaillées',
    ],
    cta: 'Essayer gratuitement',
    highlighted: true,
  },
  {
    name: 'Entreprise',
    monthlyPrice: 'Sur mesure',
    annualPrice: 'Sur mesure',
    description: 'Pour les besoins complexes',
    features: [
      'Bénévoles illimités',
      'Intégration API',
      'Gestion de projets',
      'Support dédié 24/7',
      'Tous les templates',
      'White-label disponible',
      'SLA garanti',
      'Formation incluse',
    ],
    cta: 'Contacter les ventes',
    highlighted: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Tarifs simples et transparents</h2>
          <p>Choisissez le plan adapté à votre association</p>
        </div>

        {/* Toggle Monthly/Annual */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-lg font-semibold ${!isAnnual ? 'text-text-dark' : 'text-gray-500'}`}>
            Mensuel
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              isAnnual ? 'bg-primary-green' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-lg font-semibold ${isAnnual ? 'text-text-dark' : 'text-gray-500'}`}>
            Annuel
            {isAnnual && <span className="ml-2 text-sm badge">-17%</span>}
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-custom overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'ring-2 ring-primary-green shadow-custom scale-105 bg-white'
                  : 'border-2 border-gray-200 shadow-custom'
              }`}
            >
              {/* Card Header */}
              <div
                className={`p-8 text-center ${
                  plan.highlighted ? 'bg-primary-green text-white' : 'bg-gray-50'
                }`}
              >
                {plan.highlighted && (
                  <span className="inline-block mb-4 px-4 py-1 bg-secondary-green text-text-dark rounded-full text-sm font-bold">
                    PLUS POPULAIRE
                  </span>
                )}
                <h3 className={`text-2xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-text-dark'}`}>
                  {plan.name}
                </h3>
                <p className={plan.highlighted ? 'text-white text-opacity-90' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="p-8 text-center border-b border-gray-200">
                <div className="text-4xl font-bold text-text-dark mb-2">
                  {typeof plan.monthlyPrice === 'number'
                    ? `€${isAnnual ? plan.annualPrice : plan.monthlyPrice}`
                    : plan.monthlyPrice}
                </div>
                <p className="text-gray-600 text-sm">
                  {isAnnual ? 'par an' : 'par mois'}
                </p>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary-green text-xl mt-1">✓</span>
                      <span className="text-text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={
                    plan.highlighted ? 'btn btn-primary w-full' : 'btn btn-border w-full'
                  }
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Des questions sur nos tarifs ?</p>
          <a href="#faq" className="text-primary-green font-semibold hover:text-secondary-green transition">
            Consultez notre FAQ →
          </a>
        </div>
      </div>
    </section>
  );
}
