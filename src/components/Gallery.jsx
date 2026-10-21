import { useState } from 'react'
import { asset } from '../asset'

const screenshots = [
  { src: "slider/Capture d'écran 2026-04-15 054539.png", width: '350px' },
  { src: "slider/Capture d'écran 2026-04-15 054554.png", width: '400px' },
  { src: "slider/Capture d'écran 2026-04-15 054606.png", width: '400px' },
  { src: "slider/Capture d'écran 2026-04-15 054632.png", width: '400px' },
]

// Style des flèches désactivées aux extrémités
const arrowState = (disabled) => ({
  opacity: disabled ? '0.5' : '1',
  pointerEvents: disabled ? 'none' : 'auto',
})

export default function Gallery() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const last = screenshots.length - 1

  return (
    <section id="galerie" className="section-gallery">
      <div className="container">
        <div className="section-header">
          <h2>L'application en images</h2>
        </div>
        <div className="gallery-wrapper">
          <button
            className="gallery-arrow prev-btn"
            id="galPrevBtn"
            style={arrowState(galleryIndex === 0)}
            onClick={() => setGalleryIndex((i) => Math.max(0, i - 1))}
          >
            <i className="ph-caret-left-bold"></i>
          </button>
          <div className="gallery-track-container">
            <ul className="gallery-track" id="galleryTrack" style={{ transform: `translateX(-${galleryIndex * 100}%)` }}>
              {screenshots.map(({ src, width }) => (
                <li className="gallery-slide" key={src}>
                  <div className="screenshot-container">
                    <img src={asset(src)} style={{ width, height: 'auto' }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="gallery-arrow next-btn"
            id="galNextBtn"
            style={arrowState(galleryIndex === last)}
            onClick={() => setGalleryIndex((i) => Math.min(last, i + 1))}
          >
            <i className="ph-caret-right-bold"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
