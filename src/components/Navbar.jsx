import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'white',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px',
          padding: '0 20px'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <a href="#hero-section" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none'
            }}>
              <img src="/assets/image.png" alt="Logo BNEVO" style={{
                width: '50px',
                height: 'auto'
              }} />
              <p style={{
                fontWeight: '700',
                fontSize: '1.3rem',
                color: '#079669',
                margin: 0
              }}>
                BNEVO
              </p>
            </a>
          </div>

          {/* Nav Links */}
          <ul style={{
            display: 'none',
            alignItems: 'center',
            gap: '30px',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }} className="nav-links-desktop">
            <li>
              <a href="#solution" style={{
                color: '#181818',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#079669'} onMouseLeave={(e) => e.target.style.color = '#181818'}>
                Notre Solution Digitale
              </a>
            </li>
            <li>
              <a href="#pricing" style={{
                color: '#181818',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#079669'} onMouseLeave={(e) => e.target.style.color = '#181818'}>
                Tarif
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn btn-border"
            style={{
              display: 'none',
              textDecoration: 'none',
              width: 'auto'
            }}
          >
            Essayer l'application
          </a>

          <style>{`
            @media (min-width: 768px) {
              .nav-links-desktop {
                display: flex !important;
              }
              a.btn {
                display: inline-flex !important;
              }
            }
          `}</style>
        </div>
      </div>
    </nav>
  );
}
