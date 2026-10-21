import { asset } from '../asset'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-logo">
          <img src={asset('mascotte.png')} alt="Logo Benevo" style={{ width: '60px', height: 'auto' }} />
        </div>
        <p>2026 - Fait avec ❤️ pour les associations.</p>
      </div>
    </footer>
  )
}
