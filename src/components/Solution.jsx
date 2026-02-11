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
    <section id="solution" className="py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>L&apos;essentiel, rien que l&apos;essentiel</h2>
          <p>Nous avons supprimé le superflu pour garder ce qui vous aide vraiment.</p>
        </div>

        {/* Slider */}
        <div className="bg-white rounded-custom shadow-custom p-12 md:p-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Slide Content */}
            <div>
              <span className="badge">
                {slides[currentSlide].badge}
              </span>
              <h3 className="text-3xl font-bold text-text-dark mb-6">{slides[currentSlide].title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {slides[currentSlide].description}
              </p>

              {/* Slider Controls */}
              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentSlide(0)}
                  className={`slider-btn ${currentSlide === 0 ? 'active' : ''}`}
                >
                  Côté Organisateur
                </button>
                <button
                  onClick={() => setCurrentSlide(1)}
                  className={`slider-btn ${currentSlide === 1 ? 'active' : ''}`}
                >
                  Côté Bénévole
                </button>
              </div>
            </div>

            {/* Slide Image */}
            <div className="flex justify-center">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="h-[500px] object-contain rounded-custom shadow-custom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
