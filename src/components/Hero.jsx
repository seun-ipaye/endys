import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <p className="section-tag hero-tag">Welcome to Endy's African Store</p>
        <h1 className="hero-title">
          Authentic African Groceries, Meats &amp; Hair Care in Windsor, Ontario
        </h1>
        <p className="hero-subtitle">
          From fresh halal cuts and pantry staples to premium hair extensions
          - everything you need to bring a taste of home to your table and
          your style.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary">
            View Products
          </Link>
          <Link to="/#contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Decorative graphic - replace with a real storefront / product photo */}
      <div className="hero-graphic" aria-hidden="true">
        <div className="hero-graphic-circle">🛍️</div>
      </div>
    </section>
  )
}

export default Hero
