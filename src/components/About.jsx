import './About.css'

const FEATURES = [
  {
    number: '01',
    title: 'Authentic Sourcing',
    description: 'We work directly with trusted suppliers across Africa and within Canada.',
  },
  {
    number: '02',
    title: 'Community Hub',
    description: 'A gathering place to share recipes, swap stories and celebrate culture.',
  },
  {
    number: '03',
    title: 'Family Run',
    description: 'Friendly faces and personal service — we know our customers by name.',
  },
]

function About() {
  return (
    <section id="about" className="about section section-dark">
      <div className="container about-inner">

        <div className="about-content">
          <p className="section-tag">About Us</p>
          <h2 className="about-heading">
            Rooted in Culture,<br />Built for Community
          </h2>
          <p className="about-body">
            Endy's African Supermarket was founded with a simple goal: to make
            sure no one in Windsor has to travel far for a taste of home. What
            started as a small family stall has grown into a welcoming
            neighbourhood store stocked with the groceries, meats and beauty
            essentials that connect us to our roots.
          </p>
          <p className="about-body">
            Whether you're cooking your grandmother's recipe, exploring new
            flavours, or getting ready for a special occasion, our team is here
            to help — with a smile and fair prices every time.
          </p>
        </div>

        <div className="about-features">
          {FEATURES.map((f) => (
            <div className="about-feature" key={f.number}>
              <span className="about-feature-number">{f.number}</span>
              <div>
                <h3 className="about-feature-title">{f.title}</h3>
                <p className="about-feature-desc">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
