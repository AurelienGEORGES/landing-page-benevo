import React from 'react';

const features = [
  {
    icon: '🔗',
    title: 'Accès Bénévoles',
    subtitle: 'Lien magique sans inscription',
    classic: 'Mots de passe & Comptes',
    bnevo: '✓ Instantané',
  },
  {
    icon: '🔔',
    title: 'Gestion des désistements',
    subtitle: 'Relances auto sur listes de secours',
    classic: 'Appels paniqués',
    bnevo: '✓ Automatisé',
  },
  {
    icon: '📐',
    title: 'Templates d\'événements',
    subtitle: 'Modèles AG, Festivals, Buvettes',
    classic: 'Copier/Coller manuel',
    bnevo: '✓ 1 Clic',
  },
  {
    icon: '👥',
    title: 'Matching Disponibilités',
    subtitle: 'Assignation selon les envies',
    classic: 'Puzzle mental',
    bnevo: '✓ Intelligent',
  },
  {
    icon: '📊',
    title: 'Gestion de projet & Stocks',
    subtitle: 'Pilotage complet de l\'asso',
    classic: 'Outils multiples',
    bnevo: '✓ Intégré (Bientôt)',
  },
  {
    icon: '🔗',
    title: 'Connexion Réseaux Sociaux',
    subtitle: 'Recrutement multi-canal',
    classic: 'Partage manuel',
    bnevo: '✓ Natif (Bientôt)',
  },
];

export default function FeaturesTable() {
  return (
    <section id="features-table" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Pourquoi choisir BNEVO ?</h2>
          <p>
            Comparez l&apos;efficacité de notre solution digitale face aux méthodes
            traditionnelles
          </p>
        </div>

        {/* Table - Desktop */}
        <div className="hidden md:block overflow-x-auto rounded-custom border-2 border-gray-200 shadow-custom">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-text-dark text-base">
                  Fonctionnalités & Avantages
                </th>
                <th className="px-6 py-4 font-semibold text-text-dark text-base">
                  Méthode Classique (Excel/Mail)
                </th>
                <th className="px-6 py-4 font-semibold text-text-dark text-base bg-secondary-green bg-opacity-50">
                  Solution BNEVO
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                      <div>
                        <div className="font-semibold text-text-dark text-base">
                          {feature.title}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{feature.subtitle}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-gray-700">{feature.classic}</td>
                  <td className="px-6 py-6 text-primary-green font-semibold bg-secondary-green bg-opacity-50">
                    {feature.bnevo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table - Mobile */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-custom p-4 shadow-custom"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold text-text-dark">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Classique: </span>
                  <span className="text-gray-600">{feature.classic}</span>
                </div>
                <div className="bg-secondary-green bg-opacity-50 p-3 rounded-lg">
                  <span className="font-semibold text-primary-green">BNEVO: </span>
                  <span className="text-primary-green font-semibold">{feature.bnevo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Prêt à transformer votre gestion de bénévoles ?
          </p>
          <button className="btn btn-primary">
            Demander une démo
          </button>
        </div>
      </div>
    </section>
  );
}
