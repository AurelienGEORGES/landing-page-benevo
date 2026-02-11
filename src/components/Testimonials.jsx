import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Dupont',
    role: 'Responsable bénévoles - France Bénévolat',
    content:
      'BNEVO a complètement révolutionné notre façon de gérer nos bénévoles. Nous avons gagné 10 heures par semaine sur la logistique. Incroyable !',
    image: 'https://via.placeholder.com/100?text=MD',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jean Martin',
    role: 'Directeur - Solidarité +',
    content:
      'L\'outil est si intuitif que même nos 70 ans de responsable a pu le prendre en main. Les bénévoles adorent le lien magique, zéro friction.',
    image: 'https://via.placeholder.com/100?text=JM',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophie Bernard',
    role: 'Présidente - Jeunes en Action',
    content:
      'Le matching automatique des disponibilités c\'est du génie. Les conflits ont diminué de 80%. Plus de disputes sur les plannings !',
    image: 'https://via.placeholder.com/100?text=SB',
    rating: 5,
  },
  {
    id: 4,
    name: 'Thomas Leclerc',
    role: 'Coordinateur - Les Restos du Cœur',
    content:
      'Enfin une solution pensée pour les assos. Pas de prise de tête, juste de la simplicité. Et le support client répond en quelques minutes.',
    image: 'https://via.placeholder.com/100?text=TL',
    rating: 5,
  },
  {
    id: 5,
    name: 'Nathalie Rousseau',
    role: 'Trésorière - Croix-Rouge',
    content:
      'BNEVO nous a permis de former et fidéliser nos bénévoles plus facilement. Le ROI est immédiat, les bénévoles sont plus motivés.',
    image: 'https://via.placeholder.com/100?text=NR',
    rating: 5,
  },
  {
    id: 6,
    name: 'Pierre Durand',
    role: 'Responsable RH bénévole - Médecins du Monde',
    content:
      'Les analytics nous donnent enfin de la visibilité sur nos effectifs. Nous pouvons prédire les manques et anticiper. C\'est puissant !',
    image: 'https://via.placeholder.com/100?text=PD',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleTestimonials = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const itemsToShow = isMobile ? 1 : 3;
    const items = [];

    for (let i = 0; i < itemsToShow; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }

    return items;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Ce que nos clients disent</h2>
          <p>Les témoignages de ceux qui ont transformé leur gestion de bénévoles</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-custom p-8 shadow-custom border-2 border-gray-200 hover:border-primary-green transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary-green text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center hover:bg-secondary-green hover:text-text-dark transition-all duration-300 shadow-custom text-2xl"
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-6 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center hover:bg-secondary-green hover:text-text-dark transition-all duration-300 shadow-custom text-2xl"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ||
                (index > currentIndex && index < currentIndex + 3)
                  ? 'bg-primary-green'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t-2 border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-green mb-2">500+</div>
            <p className="text-gray-600">Associations partenaires</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-green mb-2">50k+</div>
            <p className="text-gray-600">Bénévoles gérés</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-green mb-2">4.9/5</div>
            <p className="text-gray-600">Note moyenne</p>
          </div>
        </div>
      </div>
    </section>
  );
}
