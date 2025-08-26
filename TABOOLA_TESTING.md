# Taboola Integration Testing Guide

## Overview
This document outlines how to test the Taboola widget integration in the React SPA website. The integration includes widgets on Homepage, Section page, and Article pages with proper SPA navigation handling.

## Prerequisites
- Development server running (`npm run dev`)
- Browser developer tools available
- Access to browser console for debugging

## Testing Checklist

### 1. Initial Page Load Test
**Test**: Homepage loads correctly with Taboola widget
- [ ] Navigate to `http://localhost:5173/`
- [ ] Check that the page loads without errors
- [ ] Verify Taboola loader script is present in `<head>`
- [ ] Look for "Loading Taboola content..." placeholder initially
- [ ] Check browser console for Taboola initialization logs

**Expected Console Output**:
```
Taboola widget initialized: taboola-home-article-thumbnails
```

### 2. Section Page Test
**Test**: Section page loads correctly with Taboola widget
- [ ] Navigate to `/section` from homepage or directly
- [ ] Verify Taboola widget appears below the articles grid
- [ ] Check for "Sponsored Content" label above widget
- [ ] Look for proper container ID: `taboola-category-article-thumbnails`

**Expected Console Output**:
```
Taboola newPageLoad triggered for: /section
Taboola widget initialized: taboola-category-article-thumbnails
```

### 3. Article Page Test
**Test**: Article pages load correctly with Taboola widget
- [ ] Navigate to any article (e.g., `/article/getting-started-react`)
- [ ] Verify Taboola widget appears after article content
- [ ] Check widget is above "Read More Articles" button
- [ ] Look for proper container ID: `taboola-below-article-thumbnails`

**Expected Console Output**:
```
Taboola newPageLoad triggered for: /article/getting-started-react
Taboola widget initialized: taboola-below-article-thumbnails
```

### 4. SPA Navigation Test
**Test**: Navigation between pages triggers newPageLoad command
- [ ] Start on homepage
- [ ] Navigate to section page - check console for newPageLoad
- [ ] Navigate to article page - check console for newPageLoad
- [ ] Navigate back to homepage - check console for newPageLoad
- [ ] Verify no newPageLoad on initial page load

**Expected Behavior**:
- First page load: No newPageLoad command
- Subsequent navigation: newPageLoad command fired before widget initialization

### 5. Widget Configuration Test
**Test**: Correct Taboola configuration is sent
Open browser dev tools and check network tab for Taboola requests:

**Homepage Configuration**:
```javascript
{home: 'auto', url: 'http://localhost:5173/'}
{mode: 'alternating-thumbnails-a', container: 'taboola-home-article-thumbnails', placement: 'Below Home Thumbnails', target_type: 'mix'}
```

**Section Page Configuration**:
```javascript
{category: 'auto', url: 'http://localhost:5173/section'}
{mode: 'alternating-thumbnails-a', container: 'taboola-category-article-thumbnails', placement: 'Below Category Thumbnails', target_type: 'mix'}
```

**Article Page Configuration**:
```javascript
{article: 'auto', url: 'http://localhost:5173/article/article-id'}
{mode: 'alternating-thumbnails-a', container: 'taboola-below-article-thumbnails', placement: 'Below Article Thumbnails', target_type: 'mix'}
```

### 6. Responsive Design Test
**Test**: Widgets work on different screen sizes
- [ ] Test on desktop view (>768px)
- [ ] Test on tablet view (768px)
- [ ] Test on mobile view (<768px)
- [ ] Verify widget containers adjust properly
- [ ] Check loading placeholder reduces height on mobile (250px vs 300px)

### 7. Error Handling Test
**Test**: Graceful handling of Taboola loading issues
- [ ] Block Taboola CDN in dev tools network tab
- [ ] Navigate to pages and verify error messages in console
- [ ] Check that pages still function without Taboola
- [ ] Verify loading placeholders remain visible

## Debugging

### Console Commands
Use these commands in browser console to debug:

```javascript
// Check if Taboola is loaded
console.log(window._taboola);

// Check Taboola queue
console.log(window._taboola.length);

// Manual widget initialization (for testing)
window._taboola.push({notify:'newPageLoad'});
```

### Common Issues

1. **Widget not loading**: Check if Taboola script loaded correctly
2. **SPA navigation not working**: Verify useTaboolaNavigation hook is active
3. **Wrong container ID**: Check container IDs match requirements exactly
4. **Multiple initializations**: Clear browser cache and reload

### Container ID Reference

| Page Type | Container ID | Placement |
|-----------|--------------|-----------|
| Homepage | `taboola-home-article-thumbnails` | Below Home Thumbnails |
| Section | `taboola-category-article-thumbnails` | Below Category Thumbnails |
| Article | `taboola-below-article-thumbnails` | Below Article Thumbnails |

## Production Testing

Before going live:
- [ ] Replace localhost URLs with production domain
- [ ] Test with real Taboola account (not demo)
- [ ] Verify all tracking and analytics work
- [ ] Test on real mobile devices
- [ ] Performance test with Taboola loaded
- [ ] SEO check to ensure proper page indexing

## Notes

- Taboola widgets may show placeholder content in development
- Full ad content requires production environment and real traffic
- Widget loading may take 3-5 seconds on first page load
- SPA navigation should be much faster for subsequent page loads
