import { asset } from '../asset'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="#hero-section" className="logo-link">
            <img src={asset('image.png')} alt="Logo BNEVO" style={{ width: '60px', height: 'auto' }} />
            <p className="logo-text">BNEVO</p>
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#solution">Solution Digitale</a></li>
          <li><a href="#pricing">Tarif</a></li>
        </ul>
        <a href="https://mdgav82.github.io/BNEVO/" className="btn btn-border">Essayer l'application</a>
      </div>
    </nav>
  )
}
