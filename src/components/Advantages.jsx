import { useEffect, useRef } from 'react'

const advantages = [
  {
    icon: 'ph-file-xls',
    title: 'Cauchemar des plannings',
    text: 'Gérer les disponibilités sur des tableaux Excel interminables qui ne sont jamais à jour.',
  },
  {
    icon: 'ph-paper-plane-tilt',
    title: "Les chaînes d'emails",
    text: "Envoyer 50 mails pour une confirmation, et perdre l'info importante dans le fil.",
  },
  {
    icon: 'ph-plugs-connected',
    title: 'Trop complexe',
    text: 'Les logiciels existants sont des "usines à gaz" trop chères pour votre structure.',
  },
]

export default function Advantages() {
  const gridRef = useRef(null)

  useEffect(() => {
    // Ajoute .is-visible quand 20% de la carte est visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.2 })

    gridRef.current.querySelectorAll('.advantage-card').forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="avantages" className="section-advantages">
      <div className="container">
        <div className="section-header">
          <h2>Vous vous reconnaissez ?</h2>
          <p>Nous savons que gérer une asso, c'est souvent gérer l'imprévu.</p>
        </div>
        <div className="advantages-grid" ref={gridRef}>
          {advantages.map(({ icon, title, text }) => (
            <div className="advantage-card" key={title}>
              <div className="advantage-icon"><i className={`${icon} ph-1x`}></i></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
