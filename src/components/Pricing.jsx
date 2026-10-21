import { useRef, useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const premiumPriceRef = useRef(null)

  const handleToggle = (e) => {
    setAnnual(e.target.checked)

    // Animation de "pop" sur le prix
    const el = premiumPriceRef.current
    el.style.transform = 'scale(1.1)'
    setTimeout(() => { el.style.transform = 'scale(1)' }, 200)
  }

  return (
    <section id="pricing" className="section-pricing">
      <div className="container">
        <div className="section-header">
          <h2>Un tarif simple, comme l'outil</h2>
          <p>Essayez gratuitement, passez au niveau supérieur quand vous êtes prêt.</p>

          <div className="pricing-toggle">
            <span>Mensuel</span>
            <label className="switch">
              <input type="checkbox" id="pricing-checkbox" checked={annual} onChange={handleToggle} />
              <span className="slider round"></span>
            </label>
            <span>Annuel <span className="save-badge">-16%</span></span>
          </div>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card featured">
            <h3 style={{ color: '#079669' }}><b>OFFRE DECOUVERTE</b></h3>
            <p className="price-subtitle">(100% gratuit)</p>
            <div className="price">0€</div>
            <h2 className="price-subtitle">Testez l'efficacité benevo sur vos petits événements</h2>
            <ul className="pricing-features">
              <li><i className="ph-check-circle"></i>Planning Interactif : Créez vos événements et missions facilement.</li>
              <li><i className="ph-check-circle"></i>Alerte Anti-Surprise : Notification dès qu'un bénévole a un imprévu.</li>
              <li><i className="ph-check-circle"></i>Démarche Auto Mail : Démarcharge automatique de la base bénévoles de benevo par mail lors d'un désistement.</li>
              <li><i className="ph-warning-circle-fill"></i>Limite de l'offre : Maximum 10 bénévoles contactés.</li>
              <li><i className="ph-warning-circle-fill"></i>Limite de l'offre : Maximum 5 évènements par an.</li>
            </ul>
            <a href="#contact" className="btn btn-border">Commencer</a>
          </div>
          <div className="pricing-card featured">
            <h3 style={{ color: '#079669' }}><b>OFFRE PREMIUM</b></h3>
            <p className="price-subtitle">{' '}</p>
            <div className="price-container">
              <div className="price" id="premium-price" ref={premiumPriceRef}>{annual ? '199.90€' : '19.90€'}</div>
            </div>
            <h2 className="price-subtitle">La securité absolue pour vos gros événements et une diffusion massive</h2>
            <ul className="pricing-features">
              <li><i className="ph-check-circle"></i>Toutes les fonctions de l'Offre Découverte</li>
              <li><i className="ph-check-circle"></i>Evénements Illimités</li>
              <li><i className="ph-check-circle"></i>Démarchage Illimité Mail + SMS</li>
              <li><i className="ph-check-circle"></i>Dashboard & Statistiques : Accédez à un tableau de bord complet pour piloter et analyser les données de vos événements</li>
            </ul>
            <a href="#contact" className="btn btn-primary">Passer au Premium</a>
          </div>
        </div>
      </div>
    </section>
  )
}
