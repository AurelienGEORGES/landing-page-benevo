import { useState } from 'react'
import { asset } from '../asset'

const slides = [
  {
    badge: "Pour l'Association",
    title: 'Créez un planning en 3 clics',
    text: "Oubliez les configurations techniques. Créez l'événement, définissez les besoins et envoyez le lien. Visualisez en temps réel qui fait quoi grâce à un code couleur simple.",
    img: "screens/Capture d'écran 2026-04-15 052538.png",
  },
  {
    badge: 'Pour le Bénévole',
    title: 'Zéro inscription compliquée',
    text: 'Vos bénévoles reçoivent un lien, choisissent leur créneau sur leur mobile et valident. Pas de mot de passe à retenir. Ils voient même avec qui ils vont travailler !',
    img: "screens/Capture d'écran 2026-04-15 052911.png",
  },
]

export default function Solution() {
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <section id="solution" className="section-solution">
      <div className="container">
        <div className="section-header">
          <h2>L'essentiel, rien que l'essentiel</h2>
          <p>Nous avons supprimé le superflu pour garder ce qui vous aide vraiment.</p>
        </div>
        <div className="slider-container">
          {slides.map((slide, i) => (
            <div
              key={slide.badge}
              className={`slide${i === slideIndex ? ' active-slide' : ''}`}
              style={{ display: i === slideIndex ? 'flex' : 'none' }}
            >
              <div className="slide-content">
                <div className="slide-text">
                  <span className="badge">{slide.badge}</span>
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                  <div className="slider-controls">
                    <button className={`slider-btn${slideIndex === 0 ? ' active' : ''}`} onClick={() => setSlideIndex(0)}>Côté Organisateur</button>
                    <button className={`slider-btn${slideIndex === 1 ? ' active' : ''}`} onClick={() => setSlideIndex(1)}>Côté Bénévole</button>
                  </div>
                </div>
                <div className="slide-img">
                  <img src={asset(slide.img)} height="500px" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
