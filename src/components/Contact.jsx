import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Contact</p>
          <h2 className="section-title">Visit Us or Reach Out</h2>
          <p className="section-subtitle">
            We'd love to hear from you. Stop by the store or give us a call -
            whichever is easiest for you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <ul className="contact-details">
              <li>
                <span className="contact-icon" aria-hidden="true">📍</span>
                <div>
                  <h3>Address</h3>
                  <p>1311 Tecumseh Rd E, Windsor, ON N8W 1B9, Canada</p>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">📞</span>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+15199154094">(519) 915-4094</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">✉️</span>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@endysafricanstore.ca">
                      info@endysafricanstore.ca
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-map">
            <iframe
              title="Endy's African Store location in Windsor, Ontario"
              src="https://maps.google.com/maps?q=1311%20Tecumseh%20Rd%20E%2C%20Windsor%2C%20ON%20N8W%201B9%2C%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
