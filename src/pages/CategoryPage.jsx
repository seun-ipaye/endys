import { Navigate, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { getCategoryBySlug } from '../data/categories'
import './CategoryPage.css'

function CategoryPage() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)

  if (!category) {
    return <Navigate to="/products" replace />
  }

  return (
    <>
      <PageHeader
        tag="Our Products"
        title={category.title}
        description={category.shortDescription}
      />

      <section className="section category-page">
        <div className="container category-page-inner">
          <div className={`category-banner ${category.className}`} aria-hidden="true">
            <span>{category.icon}</span>
          </div>

          <p className="category-long-description">{category.longDescription}</p>

          <div className="category-items">
            {category.items.map((item) => (
              <div className="category-item" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryPage
