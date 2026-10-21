import { useState } from 'react'

const faqs = [
  {
    question: 'Mes bénévoles doivent-ils créer un compte ?',
    answer: "Non, et c'est notre grande force. Vos bénévoles reçoivent un lien magique unique. Ils choisissent leur créneau, entrent leur nom/prénom, et c'est terminé. Pas de mot de passe à oublier.",
  },
  {
    question: "Puis-je tester l'application gratuitement ?",
    answer: "Bien sûr ! La version d'essai vous permet de créer un événement complet pour tester toutes les fonctionnalités avec un petit groupe de bénévoles.",
  },
  {
    question: 'Nos données sont-elles sécurisées ?',
    answer: 'Toutes vos données sont hébergées en Europe et sont cryptées. Nous respectons scrupuleusement le RGPD et nous ne revendrons jamais vos listes de contacts.',
  },
  {
    question: "L'abonnement est-il vraiment sans engagement ?",
    answer: "Oui. Pour l'offre mensuelle, vous pouvez arrêter à tout moment d'un simple clic depuis votre espace administrateur. Aucun préavis n'est requis.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section-faq">
      <div className="container">
        <div className="section-header">
          <h2>Questions fréquentes</h2>
          <p>Tout ce que vous devez savoir pour démarrer sereinement.</p>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }, i) => (
            <div className={`faq-item${openIndex === i ? ' active' : ''}`} key={question}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {question}
                <i className="ph-caret-down"></i>
              </button>
              <div className="faq-answer">
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
