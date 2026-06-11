import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the top on every page change, or to a hash target (e.g. #contact)
// when one is present in the URL.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export default ScrollManager
