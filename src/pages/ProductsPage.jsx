import PageHeader from '../components/PageHeader'
import Products from '../components/Products'

function ProductsPage() {
  return (
    <>
      <PageHeader
        tag="Our Products"
        title="Shop By Category"
        description="Browse our most popular categories. Visit us in-store for our full range of products and weekly fresh arrivals."
      />
      <Products />
    </>
  )
}

export default ProductsPage
