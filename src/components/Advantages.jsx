import React from 'react';

const advantages = [
  {
    icon: '📊',
    title: 'Cauchemar des plannings',
    description: 'Gérer les disponibilités sur des tableaux Excel interminables qui ne sont jamais à jour.',
  },
  {
    icon: '✈️',
    title: 'Les chaînes d\'emails',
    description: 'Envoyer 50 mails pour une confirmation, et perdre l\'info importante dans le fil.',
  },
  {
    icon: '⚙️',
    title: 'Trop complexe',
    description: 'Les logiciels existants sont des "usines à gaz" trop chères pour votre structure.',
  },
];

export default function Advantages() {
  return (
    <section id="avantages" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Vous vous reconnaissez ?</h2>
          <p>Nous savons que gérer une asso, c&apos;est souvent gérer l&apos;imprévu.</p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="advantage-card"
            >
              <div className="text-5xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-text-dark mb-4">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
