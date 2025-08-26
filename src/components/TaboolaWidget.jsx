import { useEffect, useRef, useState } from 'react'

// Generic Taboola Widget Component
function TaboolaWidget({ 
  containerId, 
  mode = 'alternating-thumbnails-a', 
  placement, 
  targetType = 'mix',
  pageType // 'home', 'category', 'article'
}) {
  const containerRef = useRef(null)
  const isInitialized = useRef(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Prevent multiple initializations
    if (isInitialized.current) {
      return
    }

    const initializeWidget = () => {
      try {
        // Ensure Taboola is available
        if (typeof window === 'undefined' || !window._taboola) {
          console.warn('Taboola not available, retrying...')
          setTimeout(initializeWidget, 1000)
          return
        }

        // Get the current page URL
        const currentUrl = window.location.href

        // Push the page type configuration
        const pageConfig = { url: currentUrl }
        if (pageType === 'home') {
          pageConfig.home = 'auto'
        } else if (pageType === 'category') {
          pageConfig.category = 'auto'
        } else if (pageType === 'article') {
          pageConfig.article = 'auto'
        }

        window._taboola.push(pageConfig)

        // Push the widget configuration
        window._taboola.push({
          mode: mode,
          container: containerId,
          placement: placement,
          target_type: targetType
        })

        isInitialized.current = true
        setIsLoading(false)

        console.log(`Taboola widget initialized: ${containerId}`)
      } catch (error) {
        console.error('Error initializing Taboola widget:', error)
        setHasError(true)
        setIsLoading(false)
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeWidget, 500)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      // Don't clear innerHTML as it conflicts with Taboola
      isInitialized.current = false
    }
  }, [containerId, mode, placement, targetType, pageType])

  if (hasError) {
    return null // Don't render anything if there's an error
  }

  return (
    <div 
      id={containerId}
      ref={containerRef}
      className="taboola-container"
    >
      {isLoading && (
        <div style={{ 
          textAlign: 'center', 
          padding: '1rem',
          color: '#adb5bd',
          fontSize: '0.8rem'
        }}>
          Loading...
        </div>
      )}
      {/* Taboola content will be injected here */}
    </div>
  )
}

// Specific widget components for each page type
export function TaboolaHomeFeed() {
  return (
    <TaboolaWidget
      containerId="taboola-home-article-thumbnails"
      placement="Below Home Thumbnails"
      pageType="home"
    />
  )
}

export function TaboolaCategoryFeed() {
  return (
    <TaboolaWidget
      containerId="taboola-category-article-thumbnails"
      placement="Below Category Thumbnails"
      pageType="category"
    />
  )
}

export function TaboolaArticleFeed() {
  return (
    <TaboolaWidget
      containerId="taboola-below-article-thumbnails"
      placement="Below Article Thumbnails"
      pageType="article"
    />
  )
}

export default TaboolaWidget
