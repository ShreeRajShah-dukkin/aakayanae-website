import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#top">
          <img src={logo} alt="Aakayanae" />
          <span>Aakayanae</span>
        </a>

        <nav className="footer-links">
          <a href="#services">Services</a>
          <a href="#website-types">Website types</a>
          <a href="#insights">Insights</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-copy">© {new Date().getFullYear()} Aakayanae. Built for businesses that want to be found.</p>
      </div>
    </footer>
  )
}
