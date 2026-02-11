import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-custom">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#hero-section" className="flex items-center gap-2">
              <img src="/assets/image.png" alt="Logo Benevo" className="w-12 h-auto" />
              <p className="font-bold text-lg text-primary-green">Benevo</p>
            </a>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a href="#solution" className="text-text-dark hover:text-primary-green font-medium transition">
                Notre Solution Digitale
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-text-dark hover:text-primary-green font-medium transition">
                Tarif
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn btn-border hidden md:flex"
          >
            Essayer l&apos;application
          </a>
        </div>
      </div>
    </nav>
  );
}
