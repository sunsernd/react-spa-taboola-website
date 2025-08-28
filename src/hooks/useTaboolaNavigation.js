import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Custom hook to handle Taboola navigation for SPA
 * Calls the newPageLoad command when LEAVING pages (not when arriving)
 */
export function useTaboolaNavigation() {
  const location = useLocation()
  const isInitialLoad = useRef(true)
  const currentPath = useRef(location.pathname)

  const triggerNewPageLoad = (reason = 'page-leave', fromPath = '') => {
    if (typeof window !== 'undefined' && window._taboola) {
      try {
        window._taboola.push({ notify: 'newPageLoad' })
        console.log(`Taboola newPageLoad triggered (${reason}) - leaving:`, fromPath, 'going to:', location.pathname)
      } catch (error) {
        console.error('Error triggering Taboola newPageLoad:', error)
      }
    }
  }

  useEffect(() => {
    const previousPath = currentPath.current
    currentPath.current = location.pathname

    // Skip the initial page load - no newPageLoad needed
    if (isInitialLoad.current) {
      isInitialLoad.current = false
      console.log('Initial page load, no newPageLoad triggered:', location.pathname)
      return
    }

    // When we reach here, we've navigated from previousPath to location.pathname
    // Trigger newPageLoad for leaving the previous page
    if (previousPath !== location.pathname) {
      triggerNewPageLoad('route-change', previousPath)
    }

    // Cleanup function - triggers when this component/page is being unmounted
    return () => {
      // This runs when leaving the current page
      if (!isInitialLoad.current) {
        triggerNewPageLoad('page-leave-cleanup', currentPath.current)
      }
    }
  }, [location.pathname])

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (!isInitialLoad.current) {
        triggerNewPageLoad('browser-unload', currentPath.current)
      }
    }

    // Listen for page unload (browser close, refresh)
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  // Global cleanup when the entire component unmounts
  useEffect(() => {
    return () => {
      if (!isInitialLoad.current) {
        triggerNewPageLoad('component-unmount', currentPath.current)
      }
    }
  }, [])
}

export default useTaboolaNavigation
