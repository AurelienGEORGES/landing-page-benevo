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
    <section id="avantages" style={{
      background: '#FFFFFF',
      padding: '80px 20px'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: '"Nunito", sans-serif',
            fontWeight: '600',
            color: '#181818',
            marginBottom: '20px'
          }}>
            Vous vous reconnaissez ?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '60px'
          }}>
            Nous savons que gérer une asso, c'est souvent gérer l'imprévu.
          </p>
        </div>

        {/* Advantages Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {advantages.map((advantage, index) => (
            <div
              key={index}
              style={{
                padding: '30px',
                border: '2px solid #9EFEB3',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)';
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px'
              }}>
                {advantage.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontFamily: '"Nunito", sans-serif',
                fontWeight: '600',
                color: '#181818',
                marginBottom: '15px'
              }}>
                {advantage.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6'
              }}>
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
