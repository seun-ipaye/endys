import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">

        {/* Left: copy */}
        <div className="hero-content">
          <span className="hero-accent-bar" aria-hidden="true"></span>
          <p className="section-tag">Windsor's African Supermarket</p>
          <h1 className="hero-title">
            Authentic African Groceries, Fresh Meat &amp; Hair Essentials
          </h1>
          <p className="hero-subtitle">
            Your local destination for African pantry staples, halal meats,
            fresh ingredients and quality hair products in Windsor.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Shop Our Categories
            </Link>
            <a
              href="https://maps.google.com/maps?q=1311+Tecumseh+Rd+E,+Windsor,+ON"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Right: store image — drop /hero-image.jpg into public/ */}
        <div className="hero-image" aria-hidden="true">
          <img
            src="/hero-image.jpg"
            alt="Inside Endy's African Supermarket"
            className="hero-img"
          />
          <div className="hero-image-fallback"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
