import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Our Products', to: '/products' },
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
            {NAV_LINKS.map((link) =>
              link.to.startsWith('/#') ? (
                <li key={link.to}>
                  <Link to={link.to} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ) : (
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
            )}
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
