import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Custom hook to handle Taboola navigation for SPA
 * Calls the newPageLoad command when navigating between pages and on unmount
 */
export function useTaboolaNavigation() {
  const location = useLocation()
  const isInitialLoad = useRef(true)
  const previousPath = useRef(location.pathname)

  const triggerNewPageLoad = (reason = 'navigation') => {
    if (typeof window !== 'undefined' && window._taboola) {
      try {
        window._taboola.push({ notify: 'newPageLoad' })
        console.log(`Taboola newPageLoad triggered (${reason}):`, location.pathname)
      } catch (error) {
        console.error('Error triggering Taboola newPageLoad:', error)
      }
    }
  }

  useEffect(() => {
    // Skip the initial page load
    if (isInitialLoad.current) {
      isInitialLoad.current = false
      previousPath.current = location.pathname
      return
    }

    // Only trigger if we've actually changed routes
    if (previousPath.current !== location.pathname) {
      triggerNewPageLoad('route-change')
      previousPath.current = location.pathname
    }

    // Cleanup function - triggers when leaving the current page
    return () => {
      // Trigger newPageLoad when leaving the page/component unmounting
      // Only if we're not on the initial load and the path is changing
      if (!isInitialLoad.current && previousPath.current === location.pathname) {
        triggerNewPageLoad('page-leave')
      }
    }
  }, [location.pathname])

  // Additional effect to handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      if (!isInitialLoad.current) {
        triggerNewPageLoad('browser-navigation')
      }
    }

    window.addEventListener('popstate', handlePopState)
    
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  // Effect to handle component unmount
  useEffect(() => {
    return () => {
      // Trigger newPageLoad on component unmount (app closing/refresh)
      if (!isInitialLoad.current) {
        triggerNewPageLoad('component-unmount')
      }
    }
  }, [])
}

export default useTaboolaNavigation
