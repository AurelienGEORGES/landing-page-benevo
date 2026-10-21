import { useEffect, useRef, useState } from 'react'
import { asset } from '../asset'

// Phrases qui défilent dans le titre
const phrases = [
  "d'organiser",
  'de gagner en efficacité',
  'de gérer les événements',
  'de fédérer vos équipes',
]

// Fenêtres de scroll (en % du tunnel) pendant lesquelles chaque capture est visible
const steps = [
  { start: 0.0, end: 0.3 },
  { start: 0.35, end: 0.55 },
  { start: 0.6, end: 0.8 },
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [hideText, setHideText] = useState(false)
  const [activeImgs, setActiveImgs] = useState([false, false, false])
  const tunnelRef = useRef(null)
  const heroTextRef = useRef(null)

  useEffect(() => {
    let timeout
    const interval = setInterval(() => {
      setHideText(true)
      timeout = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length)
        setHideText(false)
      }, 500)
    }, 2500)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const tunnel = tunnelRef.current
      const tunnelHeight = tunnel.offsetHeight - window.innerHeight
      let scrollPercent = (window.scrollY - tunnel.offsetTop) / tunnelHeight
      scrollPercent = Math.max(0, Math.min(1, scrollPercent))

      heroTextRef.current.style.opacity = 1 - scrollPercent * 3
      setActiveImgs(steps.map(({ start, end }) => scrollPercent >= start && scrollPercent <= end))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="hero-header" id="hero-section">
      <div className="scroll-tunnel" ref={tunnelRef}>
        <div className="sticky-container">
          <div className="container hero-content-top" id="hero-text" ref={heroTextRef}>
            <h1>
              Retrouvez le plaisir<br />
              <span id="dynamic-text" className={hideText ? 'hide-text' : undefined}>{phrases[phraseIndex]}</span>
            </h1>
            <div className="cta-group-center">
              <a href="#demo" className="btn btn-primary">Démonstration vidéo</a>
            </div>
          </div>
          <div className="iphone-main-container">
            <img src={asset('LEAN-iPhone_Mockup_Hero_modifie.png')} className="iphone-base" alt="iPhone BNEVO" />
            <div className={`overlay-left-img${activeImgs[0] ? ' active' : ''}`} id="img-1">
              <img src={asset("screens/Capture d'écran 2026-04-15 052538.png")} alt="Etape 1" width="350px" height="auto" />
            </div>
            <div className={`overlay-right-img${activeImgs[1] ? ' active' : ''}`} id="img-2">
              <img src={asset("screens/Capture d'écran 2026-04-15 052720.png")} alt="Etape 2" width="350px" height="auto" />
            </div>
            <div className={`overlay-left-img${activeImgs[2] ? ' active' : ''}`} id="img-3">
              <img src={asset("screens/Capture d'écran 2026-04-15 052828.png")} alt="Etape 3" width="350px" height="auto" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
