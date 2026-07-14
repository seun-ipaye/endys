import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/categories'
import './Products.css'

function Products() {
  return (
    <section id="products" className="products section section-grey">
      <div className="container">
        <div className="product-grid">
          {CATEGORIES.map((category) => (
            <article className="product-card" key={category.slug}>
              <div className="product-image">
                <img src={category.image} alt={category.title} loading="lazy" />
              </div>
              <div className="product-body">
                <p className="product-label">{category.title}</p>
                <p className="product-desc">{category.shortDescription}</p>
                <div className="product-actions">
                  <Link to={`/products/${category.slug}`} className="btn btn-primary product-btn">
                    Explore
                  </Link>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline product-btn"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
