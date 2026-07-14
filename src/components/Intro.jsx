import { Link } from 'react-router-dom'
import './Intro.css'

const FEATURES = [
  {
    number: '01',
    title: 'Authentic Products',
    description: 'Sourced directly from trusted African & local suppliers you can rely on.',
  },
  {
    number: '02',
    title: 'Community Focused',
    description: "Proudly serving Windsor's African diaspora since we opened our doors.",
  },
  {
    number: '03',
    title: 'Family Run',
    description: 'Friendly, knowledgeable service and fair prices every time you visit.',
  },
]

function Intro() {
  return (
    <section className="intro section">
      <div className="container intro-inner">

        <div className="intro-text">
          <p className="section-tag">About the Store</p>
          <h2 className="intro-heading">
            A Taste of Home, Right Here in Windsor
          </h2>
          <p className="intro-body">
            Endy's African Supermarket is a family-run shop bringing the
            flavours, ingredients and beauty essentials of Africa to the
            Windsor community. Whether you're cooking a family favourite,
            stocking your pantry, or looking for the perfect hair extensions,
            we've got you covered.
          </p>
          <Link to="/about" className="btn btn-outline intro-cta">
            Our Story
          </Link>
        </div>

        <div className="intro-features">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.number}>
              <span className="feature-number">{f.number}</span>
              <div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Intro
