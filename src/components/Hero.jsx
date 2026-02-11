import React, { useEffect, useState } from 'react';

const words = ['d\'organiser', 'de planifier', 'de déléguer'];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-section" style={{
      background: '#FFFFFF',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
      marginTop: '80px'
    }}>
      <div className="container">
        {/* Hero Content */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 8vw, 3.5rem)',
            lineHeight: '1.2',
            marginBottom: '30px',
            fontFamily: '"Nunito", sans-serif',
            fontWeight: '600',
            color: '#181818'
          }}>
            Retrouvez le plaisir
            <br />
            <span style={{
              color: '#079669',
              minHeight: '1.2em',
              display: 'inline-block',
              transition: 'opacity 0.5s ease'
            }}>
              {words[currentWord]}
            </span>
          </h1>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <a
              href="#demo"
              className="btn btn-primary"
            >
              Démonstration vidéo
            </a>
          </div>
        </div>

        {/* iPhone Mockup with Overlay Images */}
        <div style={{
          position: 'relative',
          height: 'clamp(400px, 80vh, 700px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          {/* iPhone Base */}
          <img
            src="/assets/LEAN-iPhone_Mockup_Hero_modifie.png"
            alt="iPhone BNEVO"
            style={{
              height: '100%',
              objectFit: 'contain',
              zIndex: 10,
              maxWidth: '100%'
            }}
          />
          
          {/* Overlay Images - Left positions */}
          <img
            src="/assets/image_1_scroll.png"
            alt="Étape 1"
            style={{
              position: 'absolute',
              left: '-200px',
              top: '25%',
              width: '250px',
              height: 'auto',
              opacity: 0.8,
              transition: 'opacity 0.3s ease'
            }}
            className="overlay-img"
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.8'}
          />
          <img
            src="/assets/image_3_scroll.png"
            alt="Étape 3"
            style={{
              position: 'absolute',
              left: '-180px',
              bottom: '20%',
              width: '250px',
              height: 'auto',
              opacity: 0.8,
              transition: 'opacity 0.3s ease'
            }}
            className="overlay-img"
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.8'}
          />
          
          {/* Right positions */}
          <img
            src="/assets/image_2_scroll.png"
            alt="Étape 2"
            style={{
              position: 'absolute',
              right: '-200px',
              top: '30%',
              width: '250px',
              height: 'auto',
              opacity: 0.8,
              transition: 'opacity 0.3s ease'
            }}
            className="overlay-img"
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.8'}
          />
          <img
            src="/assets/image_4_scroll.png"
            alt="Étape 4"
            style={{
              position: 'absolute',
              right: '-180px',
              bottom: '25%',
              width: '250px',
              height: 'auto',
              opacity: 0.8,
              transition: 'opacity 0.3s ease'
            }}
            className="overlay-img"
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.8'}
          />
        </div>
      </div>
    </section>
  );
}
