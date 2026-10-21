import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { asset } from '../asset'

const testimonials = [
  { quote: "\"Je gère mon asso comme une entreprise, mais Excel montrait ses limites. Cet outil m'apporte enfin la rigueur qui nous manquait.\"", name: 'Dominique', role: "Présidente d'Association" },
  { quote: "\"On est des vieux de la vieille, on se méfie des gadgets. Mais là, ça va droit au but. Pas de QR codes compliqués, c'est simple.\"", name: 'Martine', role: 'Secrétaire & Organisatrice' },
  { quote: "\"Enfin je peux choisir mes créneaux et voir avec qui je bosse ! Fini la frustration d'être mis au parking tout seul.\"", name: 'Thomas', role: 'Bénévole Festival' },
  { quote: "\"Le plus gros problème, c'est de savoir qui est où quand il y a un imprévu. Gérer les retards automatiquement, c'est un game-changer.\"", name: 'Julien', role: 'Coordinateur Technique' },
]

const GAP = 20

// Nombre de cartes visibles selon la largeur de l'écran
function getVisibleSlides() {
  const width = window.innerWidth
  if (width <= 600) return 1
  if (width <= 900) return 2
  return 3
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    const track = trackRef.current
    const slideWidth = track.children[0].getBoundingClientRect().width
    track.style.transform = `translateX(-${(slideWidth + GAP) * currentIndex}px)`
  }, [currentIndex, visibleSlides])

  useEffect(() => {
    const onResize = () => {
      // Retour au début pour éviter les décalages lors d'un changement de taille
      setCurrentIndex(0)
      setVisibleSlides(getVisibleSlides())
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIndex = testimonials.length - visibleSlides

  return (
    <section id="retours" className="section-testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Nos premiers retours</h2>
          <p>Ils ont testé l'approche et partagé leurs besoins.</p>
        </div>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow prev-btn"
            id="prevBtn"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          >
            <i className="ph-caret-left-bold"></i>
          </button>

          <div className="carousel-track-container">
            <ul className="carousel-track" id="track" ref={trackRef}>
              {testimonials.map(({ quote, name, role }) => (
                <li className="carousel-slide" key={name}>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p>{quote}</p>
                    </div>
                    <div className="author-info">
                      <div className="author-avatar">
                        <img src={asset('Gemini_Generated_Image_kcp025kcp025kcp0.png')} alt={`Avatar ${name}`} />
                      </div>
                      <div className="author-details">
                        <strong>{name}</strong>
                        <span>{role}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="carousel-arrow next-btn"
            id="nextBtn"
            disabled={currentIndex >= maxIndex}
            onClick={() => setCurrentIndex((i) => Math.min(maxIndex, i + 1))}
          >
            <i className="ph-caret-right-bold"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
