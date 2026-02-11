import React, { useState } from 'react';

const slides = [
  {
    badge: 'Pour l\'Association',
    title: 'Créez un planning en 3 clics',
    description: 'Oubliez les configurations techniques. Créez l\'événement, définissez les besoins et envoyez le lien. Visualisez en temps réel qui fait quoi grâce à un code couleur simple.',
    image: '/assets/Capture d\'écran 2025-12-11 134518.png',
  },
  {
    badge: 'Pour le Bénévole',
    title: 'Zéro inscription compliquée',
    description: 'Vos bénévoles reçoivent un lien, choisissent leur créneau sur leur mobile et valident. Pas de mot de passe à retenir. Ils voient même avec qui ils vont travailler !',
    image: '/assets/Capture d\'écran 2025-12-11 134633.png',
  },
];

export default function Solution() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="solution" style={{
      background: '#f5f5f5',
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
            L'essentiel, rien que l'essentiel
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '40px'
          }}>
            Nous avons supprimé le superflu pour garder ce qui vous aide vraiment.
          </p>
        </div>

        {/* Slider Container */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '60px 40px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          {/* Slide Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '50px',
            alignItems: 'center',
            minHeight: '500px'
          }}>
            {/* Text Section */}
            <div>
              <span style={{
                display: 'inline-block',
                background: '#079669',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '15px'
              }}>
                {slides[currentSlide].badge}
              </span>
              
              <h3 style={{
                fontSize: '2rem',
                fontFamily: '"Nunito", sans-serif',
                fontWeight: '600',
                color: '#181818',
                marginBottom: '20px'
              }}>
                {slides[currentSlide].title}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: '1.8',
                marginBottom: '30px'
              }}>
                {slides[currentSlide].description}
              </p>

              {/* Slider Controls */}
              <div style={{
                display: 'flex',
                gap: '15px'
              }}>
                <button
                  onClick={() => setCurrentSlide(0)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: currentSlide === 0 ? '#079669' : '#e5e7eb',
                    color: currentSlide === 0 ? 'white' : '#181818'
                  }}
                >
                  Côté Organisateur
                </button>
                <button
                  onClick={() => setCurrentSlide(1)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: currentSlide === 1 ? '#079669' : '#e5e7eb',
                    color: currentSlide === 1 ? 'white' : '#181818'
                  }}
                >
                  Côté Bénévole
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img
                key={currentSlide}
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                style={{
                  height: '500px',
                  width: 'auto',
                  objectFit: 'contain',
                  animation: 'fadeIn 0.5s ease'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          [style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
