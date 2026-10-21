import { useState } from 'react'

const features = [
  { icon: 'ph-link', title: 'Accès Bénévoles', details: 'Lien magique sans inscription', classic: 'Mots de passe & Comptes', benevoo: '✓ Instantané' },
  { icon: 'ph-bell-ringing', title: 'Gestion des désistements', details: 'Relances auto sur listes de secours', classic: 'Appels paniqués', benevo: '✓ Automatisé' },
  { icon: 'ph-layout', title: "Templates d'événements", details: 'Modèles AG, Festivals, Buvettes', classic: 'Copier/Coller manuel', benevo: '✓ 1 Clic (Bientôt)' },
  { icon: 'ph-users-four', title: 'Matching Disponibilités', details: 'Assignation selon les envies', classic: 'Puzzle mental', benevo: '✓ Intelligent (Bientôt)' },
  { icon: 'ph-projector-screen-chart', title: 'Gestion de projet & Stocks', details: "Pilotage complet de l'asso", classic: 'Outils multiples', benevo: '✓ Intégré (Bientôt)' },
  { icon: 'ph-share-network', title: 'Connexion Réseaux Sociaux', details: 'Recrutement multi-canal', classic: 'Partage manuel', benevo: '✓ Natif (Bientôt)' },
]

export default function FeaturesTable() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="features-table" className="section-features-table">
      <div className="container">
        <div className="section-header">
          <h2>Pourquoi choisir benevo ?</h2>
          <p>Comparez l'efficacité de notre solution digitale face aux méthodes traditionnelles.</p>
        </div>
        <div className="table-wrapper">
          <table className="benevo-table">
            <thead>
              <tr>
                <th>Fonctionnalités & Avantages</th>
                <th>Méthode Classique (Excel/Mail)</th>
                <th className="col-highlight">Solution benevo</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr
                  key={f.title}
                  className={`collapsible-row${openIndex === i ? ' is-open' : ''}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <td>
                    <div className="feat-cell">
                      <i className={f.icon}></i>
                      <div>
                        <strong>{f.title}</strong>
                        <span className="row-details">{f.details}</span>
                      </div>
                    </div>
                  </td>
                  <td className="status-no">{f.classic}</td>
                  <td className="status-yes">{f.benevo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
