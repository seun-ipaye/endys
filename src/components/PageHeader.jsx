import './PageHeader.css'

function PageHeader({ tag, title, description }) {
  return (
    <section className="page-header">
      <div className="container page-header-inner">
        <p className="section-tag">{tag}</p>
        <h1 className="section-title">{title}</h1>
        {description && <p className="section-subtitle">{description}</p>}
      </div>
    </section>
  )
}

export default PageHeader
