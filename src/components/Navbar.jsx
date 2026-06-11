import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CATEGORIES } from '../data/categories'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Our Products',
    to: '/products',
    children: CATEGORIES.map((category) => ({
      label: category.title,
      to: `/products/${category.slug}`,
    })),
  },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Add a shadow to the nav once the page has been scrolled
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Endy's <span>African Store</span>
        </Link>

        <nav
          className={`navbar-links ${isMenuOpen ? 'navbar-links-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul>
            {NAV_LINKS.map((link) => {
              if (link.to.startsWith('/#')) {
                return (
                  <li key={link.to}>
                    <Link to={link.to} onClick={closeMenu}>
                      {link.label}
                    </Link>
                  </li>
                )
              }

              if (link.children) {
                return (
                  <li key={link.to} className="navbar-dropdown">
                    <NavLink
                      to={link.to}
                      onClick={closeMenu}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      end
                    >
                      {link.label}
                    </NavLink>
                    <ul className="navbar-submenu">
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            onClick={closeMenu}
                            className={({ isActive }) => (isActive ? 'active' : '')}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              }

              return (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    end
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          className={`navbar-toggle ${isMenuOpen ? 'navbar-toggle-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
