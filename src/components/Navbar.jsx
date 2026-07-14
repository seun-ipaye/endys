import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CATEGORIES } from '../data/categories'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Our Products',
    to: '/products',
    children: CATEGORIES.map((c) => ({ label: c.title, to: `/products/${c.slug}` })),
  },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false)
  const [isMenuOpen, setIsMenuOpen]   = useState(false)
  const [logoError,  setLogoError]    = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">

        {/* Logo — drop /logo.png into the public/ folder to activate */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          {!logoError ? (
            <img
              src="/logo.png"
              alt="Endy's African Supermarket"
              className="navbar-logo-img"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="navbar-logo-text">
              Endy's <span>African Supermarket</span>
            </span>
          )}
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
                    <Link to={link.to} onClick={closeMenu}>{link.label}</Link>
                  </li>
                )
              }
              if (link.children) {
                return (
                  <li key={link.to} className="navbar-dropdown">
                    <NavLink
                      to={link.to}
                      end
                      onClick={closeMenu}
                      className={({ isActive }) => (isActive ? 'active' : '')}
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
                    end
                    onClick={closeMenu}
                    className={({ isActive }) => (isActive ? 'active' : '')}
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
          onClick={() => setIsMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
