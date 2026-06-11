import './About.css'

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-inner">
        <div className="about-graphic" aria-hidden="true">
          <div className="about-graphic-block">🌍</div>
        </div>

        <div className="about-content">
          <p>
            Endy's African Store was founded with a simple goal: to make sure
            no one in Windsor has to travel far for a taste of home. What
            started as a small family stall has grown into a welcoming
            neighbourhood store, stocked with the groceries, meats and beauty
            essentials that connect us to our roots.
          </p>
          <p>
            We work directly with trusted suppliers across Africa and within
            Canada to bring you authentic, high-quality products at fair
            prices. But beyond the shelves, we're proud to be a gathering
            place - somewhere to share recipes, swap stories, and celebrate
            the rich cultures of the African diaspora.
          </p>
          <p>
            Whether you're cooking your grandmother's recipe, exploring new
            flavours, or getting ready for a special occasion, our team is
            here to help you find exactly what you need - with a smile.
          </p>

          <ul className="about-points">
            <li>
              <strong>Authentic</strong> - sourced directly from trusted
              African & local suppliers
            </li>
            <li>
              <strong>Community-focused</strong> - proudly serving Windsor's
              African diaspora
            </li>
            <li>
              <strong>Family-run</strong> - friendly, knowledgeable service
              every visit
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
