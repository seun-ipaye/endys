import { Link } from 'react-router-dom'
import './Intro.css'

const HIGHLIGHTS = [
  {
    title: 'Fresh Meat',
    description: 'Halal goat, beef, chicken & specialty cuts, prepared fresh.',
  },
  {
    title: 'African Groceries',
    description: 'Spices, grains, snacks & staples from across the continent.',
  },
  {
    title: 'Hair Extensions',
    description: 'Premium braiding hair, wigs & extensions for every style.',
  },
]

function Intro() {
  return (
    <section className="intro section">
      <div className="container intro-inner">
        <div className="intro-text">
          <p className="section-tag">Our Story In Short</p>
          <h2 className="section-title">A Taste of Home, Right Here in Windsor</h2>
          <p>
            Endy's African Store is a family-run shop bringing the flavours,
            ingredients and beauty essentials of Africa to the Windsor
            community. Whether you're cooking a family favourite, stocking
            your pantry, or looking for the perfect hair extensions, we've
            got you covered - with friendly faces and great prices every time
            you visit.
          </p>
        </div>

        <div className="intro-highlights">
          {HIGHLIGHTS.map((item) => (
            <Link to="/products" className="highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Intro
