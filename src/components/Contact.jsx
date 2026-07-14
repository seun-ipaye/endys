import './Contact.css'

const INFO = [
  {
    label: 'Address',
    value: '1311 Tecumseh Rd E, Windsor, ON N8W 1B9, Canada',
    href: 'https://maps.google.com/maps?q=1311+Tecumseh+Rd+E,+Windsor,+ON',
    external: true,
  },
  {
    label: 'Phone',
    value: '(519) 915-4094',
    href: 'tel:+15199154094',
  },
  {
    label: 'Email',
    value: 'info@endysafricanstore.ca',
    href: 'mailto:info@endysafricanstore.ca',
  },
]

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">

        <div className="section-header">
          <p className="section-tag">Contact</p>
          <h2 className="section-title">Visit Us or Reach Out</h2>
          <p className="section-subtitle">
            Stop by the store or give us a call — we'd love to see you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <ul className="contact-details">
              {INFO.map((item) => (
                <li key={item.label} className="contact-row">
                  <span className="contact-label">{item.label}</span>
                  <a
                    href={item.href}
                    className="contact-value"
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary contact-wa"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-map">
            <iframe
              title="Endy's African Supermarket location in Windsor, Ontario"
              src="https://maps.google.com/maps?q=1311%20Tecumseh%20Rd%20E%2C%20Windsor%2C%20ON%20N8W%201B9%2C%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
