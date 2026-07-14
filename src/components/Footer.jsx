import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Home',         to: '/' },
  { label: 'Our Products', to: '/products' },
  { label: 'About Us',     to: '/about' },
  { label: 'Contact',      to: '/#contact' },
]

function Footer() {
  const year = new Date().getFullYear()
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-brand">
          {!logoError ? (
            <img
              src="/logo.png"
              alt="Endy's African Supermarket"
              className="footer-logo"
              onError={() => setLogoError(true)}
            />
          ) : (
            <p className="footer-logo-text">
              Endy's <span>African Supermarket</span>
            </p>
          )}
          <p className="footer-tagline">
            Authentic African groceries, fresh meats &amp; hair essentials in
            Windsor, Ontario.
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li>1311 Tecumseh Rd E, Windsor, ON N8W 1B9</li>
            <li><a href="tel:+15199154094">(519) 915-4094</a></li>
            <li><a href="mailto:info@endysafricanstore.ca">info@endysafricanstore.ca</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Endy's African Supermarket. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
