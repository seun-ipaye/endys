import { useState } from 'react'
import './Contact.css'

const INITIAL_FORM = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // No backend yet - this just confirms receipt to the user.
  // Replace with a real submission (email service / API) when ready.
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contact" className="contact section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Contact</p>
          <h2 className="section-title">Visit Us or Reach Out</h2>
          <p className="section-subtitle">
            We'd love to hear from you. Stop by the store, give us a call, or
            send a message - whichever is easiest for you.
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>

            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="How can we help?"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {submitted && (
              <p className="form-success" role="status">
                Thanks for reaching out! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
