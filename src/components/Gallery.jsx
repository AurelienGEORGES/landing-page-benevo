import React, { useState, useRef } from 'react';

const galleryImages = [
  {
    id: 1,
    title: 'Tableau de bord',
    url: 'https://via.placeholder.com/400x300?text=Dashboard',
  },
  {
    id: 2,
    title: 'Gestion événements',
    url: 'https://via.placeholder.com/400x300?text=Events',
  },
  {
    id: 3,
    title: 'Assignation bénévoles',
    url: 'https://via.placeholder.com/400x300?text=Volunteers',
  },
  {
    id: 4,
    title: 'Rapports & analytics',
    url: 'https://via.placeholder.com/400x300?text=Analytics',
  },
  {
    id: 5,
    title: 'Gestion des stocks',
    url: 'https://via.placeholder.com/400x300?text=Inventory',
  },
  {
    id: 6,
    title: 'Notifications',
    url: 'https://via.placeholder.com/400x300?text=Notifications',
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    scrollToItem(currentIndex - 1 < 0 ? galleryImages.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    scrollToItem(currentIndex + 1 >= galleryImages.length ? 0 : currentIndex + 1);
  };

  const scrollToItem = (index) => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
      scrollContainerRef.current.scrollLeft = itemWidth * index;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Explorez chaque fonctionnalité</h2>
          <p>Un aperçu complet de la plateforme BNEVO en images</p>
        </div>

        {/* Gallery Container */}
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center"
              >
                <div className="bg-gray-100 rounded-custom overflow-hidden shadow-custom hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-semibold text-text-dark">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-6 md:-translate-x-16 z-10 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center hover:bg-secondary-green hover:text-text-dark transition-all duration-300 shadow-custom"
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-6 md:translate-x-16 z-10 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center hover:bg-secondary-green hover:text-text-dark transition-all duration-300 shadow-custom"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToItem(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-green w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
