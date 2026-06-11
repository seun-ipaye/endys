import './Footer.css'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
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
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>1234 Wyandotte St E, Windsor, ON N9A 3H4, Canada</p>
          <p>
            <a href="tel:+15191234567">(519) 123-4567</a>
          </p>
          <p>
            <a href="mailto:info@endysafricanstore.ca">
              info@endysafricanstore.ca
            </a>
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Endy's African Store. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
