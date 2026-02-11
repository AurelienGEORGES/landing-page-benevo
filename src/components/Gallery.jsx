import React, { useState, useRef } from 'react';

const galleryImages = [
  {
    id: 1,
    title: 'Vue Statistiques',
    url: '/assets/Capture d\'écran 2025-12-11 131550.png',
    width: '450px'
  },
  {
    id: 2,
    title: 'Gestion événements',
    url: '/assets/Capture d\'écran 2025-12-11 131642.png',
    width: '450px'
  },
  {
    id: 3,
    title: 'Planification',
    url: '/assets/Capture d\'écran 2025-12-11 131852.png',
    width: '530px'
  },
  {
    id: 4,
    title: 'Dashboard complet',
    url: '/assets/Capture d\'écran 2025-12-11 131958.png',
    width: '750px'
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="galerie" style={{
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
            L'application en images
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '60px'
          }}>
            Découvrez l'interface intuitive de BNEVO
          </p>
        </div>

        {/* Gallery Container */}
        <div style={{
          position: 'relative'
        }}>
          {/* Gallery Track */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#079669',
                color: 'white',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              className="gallery-prev"
              onMouseEnter={(e) => {
                e.target.style.background = '#9EFEB3';
                e.target.style.color = '#181818';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#079669';
                e.target.style.color = 'white';
              }}
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Image Display */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '600px',
              width: '100%',
              maxWidth: '900px'
            }}>
              <img
                key={currentIndex}
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].title}
                style={{
                  width: galleryImages[currentIndex].width || 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  animation: 'fadeIn 0.5s ease'
                }}
              />
            </div>

            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#079669',
                color: 'white',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              className="gallery-next"
              onMouseEnter={(e) => {
                e.target.style.background = '#9EFEB3';
                e.target.style.color = '#181818';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#079669';
                e.target.style.color = 'white';
              }}
              aria-label="Next"
            >
              ›
            </button>
          </div>

          {/* Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '40px'
          }}>
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                style={{
                  width: index === currentIndex ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: index === currentIndex ? '#079669' : '#ccc',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Title/Description */}
          <div style={{
            textAlign: 'center',
            marginTop: '30px'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#181818',
              fontWeight: '500'
            }}>
              {galleryImages[currentIndex].title}
            </p>
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
      `}</style>
    </section>
  );
}
