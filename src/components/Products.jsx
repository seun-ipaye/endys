import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/categories'
import './Products.css'

function Products() {
  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="product-grid">
          {CATEGORIES.map((category) => (
            <Link
              to={`/products/${category.slug}`}
              className="product-card"
              key={category.slug}
            >
              <div className={`product-image ${category.className}`}>
                <img src={category.image} alt="" loading="lazy" />
              </div>
              <div className="product-body">
                <h3>{category.title}</h3>
                <p>{category.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
