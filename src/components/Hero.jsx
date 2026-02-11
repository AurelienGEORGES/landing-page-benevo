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
    <section className="relative bg-white text-text-dark py-20 min-h-screen flex flex-col justify-center">
      <div className="container">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 font-nunito">
            Retrouvez le plaisir
            <br />
            <span className="text-primary-green min-h-[1.2em] inline-block">
              {words[currentWord]}
            </span>
          </h1>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="btn btn-primary"
            >
              Démonstration vidéo
            </a>
          </div>
        </div>

        {/* iPhone Mockup */}
        <div className="relative h-[600px] flex justify-center items-center">
          <img
            src="/assets/LEAN-iPhone_Mockup_Hero_modifie.png"
            alt="iPhone BNEVO"
            className="h-full object-contain z-10"
          />
          {/* Overlay Images */}
          <img
            src="/assets/image_1_scroll.png"
            alt="Étape 1"
            className="absolute left-0 top-1/4 w-64 h-auto opacity-80 hover:opacity-100 transition"
            id="img-1"
          />
          <img
            src="/assets/image_2_scroll.png"
            alt="Étape 2"
            className="absolute right-0 top-1/3 w-64 h-auto opacity-80 hover:opacity-100 transition"
            id="img-2"
          />
          <img
            src="/assets/image_3_scroll.png"
            alt="Étape 3"
            className="absolute left-12 bottom-1/4 w-64 h-auto opacity-80 hover:opacity-100 transition"
            id="img-3"
          />
          <img
            src="/assets/image_4_scroll.png"
            alt="Étape 4"
            className="absolute right-12 bottom-1/3 w-64 h-auto opacity-80 hover:opacity-100 transition"
            id="img-4"
          />
        </div>
      </div>
    </section>
  );
}
