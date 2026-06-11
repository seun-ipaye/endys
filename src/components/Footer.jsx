import { Link } from 'react-router-dom'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Our Products', to: '/products' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/#contact' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>
            Endy's <span>African Store</span>
          </h3>
          <p>
            Authentic African groceries, fresh meats &amp; hair extensions -
            proudly serving Windsor, Ontario.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>1311 Tecumseh Rd E, Windsor, ON N8W 1B9, Canada</p>
          <p>
            <a href="tel:+15199154094">(519) 915-4094</a>
          </p>
          <p>
            <a href="mailto:info@endysafricanstore.ca">
              info@endysafricanstore.ca
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Endy's African Store. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
