import './Products.css'

const CATEGORIES = [
  {
    icon: '🥩',
    title: 'Meat',
    description:
      'Halal goat, beef, chicken, turkey & oxtail, freshly cut and packed to order - perfect for stews, suya & jollof.',
    className: 'card-meat',
  },
  {
    icon: '🍲',
    title: 'African Groceries',
    description:
      'Rice, gari, fufu, plantain flour, palm oil, dried fish, spices & seasonings to stock a true African pantry.',
    className: 'card-food',
  },
  {
    icon: '💁🏾‍♀️',
    title: 'Hair Extensions',
    description:
      'Braiding hair, weaves, wigs & accessories from trusted brands - quality extensions for every look.',
    className: 'card-hair',
  },
]

function Products() {
  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="product-grid">
          {CATEGORIES.map((category) => (
            <article className="product-card" key={category.title}>
              <div className={`product-image ${category.className}`}>
                <span aria-hidden="true">{category.icon}</span>
              </div>
              <div className="product-body">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
