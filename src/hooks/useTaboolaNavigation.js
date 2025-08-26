import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Custom hook to handle Taboola navigation for SPA
 * Calls the newPageLoad command when navigating between pages
 */
export function useTaboolaNavigation() {
  const location = useLocation()
  const isInitialLoad = useRef(true)

  useEffect(() => {
    // Skip the initial page load
    if (isInitialLoad.current) {
      isInitialLoad.current = false
      return
    }

    // Execute newPageLoad command for subsequent navigation
    if (typeof window !== 'undefined' && window._taboola) {
      try {
        window._taboola.push({ notify: 'newPageLoad' })
        console.log('Taboola newPageLoad triggered for:', location.pathname)
      } catch (error) {
        console.error('Error triggering Taboola newPageLoad:', error)
      }
    }
  }, [location.pathname])
}

export default useTaboolaNavigation
