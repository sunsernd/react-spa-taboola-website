import { useParams, Link } from 'react-router-dom'
import { TaboolaArticleFeed } from '../components/TaboolaWidget'

function ArticlePage() {
  const { id } = useParams()

  // Sample article data - in a real app, this would come from an API or CMS
  const articles = {
    'getting-started-react': {
      title: 'Getting Started with React',
      category: 'React',
      publishDate: 'December 15, 2024',
      readTime: '5 min read',
      author: 'Jane Smith',
      content: `
        React is a powerful JavaScript library for building user interfaces, particularly web applications. Developed by Facebook, it has revolutionized how we think about creating interactive UIs.

        ## What Makes React Special?

        React introduces a component-based architecture that makes code more modular and reusable. Instead of manipulating the DOM directly, React uses a virtual DOM that efficiently updates only the parts of the page that have changed.

        ## Getting Started

        To get started with React, you'll need Node.js installed on your machine. The easiest way to create a new React application is using Create React App or Vite:

        \`\`\`bash
        npx create-react-app my-app
        cd my-app
        npm start
        \`\`\`

        ## Your First Component

        Components are the building blocks of React applications. Here's a simple example:

        \`\`\`jsx
        function Welcome(props) {
          return <h1>Hello, {props.name}!</h1>;
        }
        \`\`\`

        ## State and Props

        React components can have state (internal data) and props (data passed from parent components). This allows you to create dynamic, interactive applications.

        ## Next Steps

        Once you understand the basics, explore concepts like hooks, context, and routing to build more complex applications. The React ecosystem is vast and continually evolving, making it an exciting technology to learn.
      `
    },
    'modern-css-techniques': {
      title: 'Modern CSS Techniques',
      category: 'CSS',
      publishDate: 'December 12, 2024',
      readTime: '8 min read',
      author: 'Alex Johnson',
      content: `
        CSS has evolved tremendously over the past few years. Modern CSS techniques allow us to create sophisticated layouts and interactions that were previously only possible with JavaScript.

        ## CSS Grid Layout

        CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease:

        \`\`\`css
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        \`\`\`

        ## Flexbox for Component Layout

        Flexbox is perfect for one-dimensional layouts and aligning items within containers:

        \`\`\`css
        .flex-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        \`\`\`

        ## Custom Properties (CSS Variables)

        CSS custom properties allow you to store values that can be reused throughout your stylesheet:

        \`\`\`css
        :root {
          --primary-color: #667eea;
          --secondary-color: #764ba2;
        }

        .button {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        }
        \`\`\`

        ## Modern Selectors

        CSS now includes powerful selectors like :has(), :is(), and :where() that give you more control over styling.

        ## Container Queries

        Container queries allow components to respond to their container's size rather than the viewport, enabling truly modular responsive design.

        These modern techniques enable developers to create more maintainable, performant, and visually appealing websites.
      `
    },
    'javascript-es2024': {
      title: 'JavaScript ES2024 Features',
      category: 'JavaScript',
      publishDate: 'December 10, 2024',
      readTime: '6 min read',
      author: 'Sarah Chen',
      content: `
        JavaScript continues to evolve with each new ECMAScript specification. ES2024 brings several exciting features that will improve how we write JavaScript code.

        ## Array Grouping

        The new \`Object.groupBy()\` method allows you to group array elements based on a function:

        \`\`\`javascript
        const people = [
          { name: 'Alice', age: 25 },
          { name: 'Bob', age: 30 },
          { name: 'Charlie', age: 25 }
        ];

        const groupedByAge = Object.groupBy(people, person => person.age);
        // { 25: [{name: 'Alice', age: 25}, {name: 'Charlie', age: 25}], 30: [{name: 'Bob', age: 30}] }
        \`\`\`

        ## Promise.withResolvers()

        This new method provides a cleaner way to create promises that can be resolved or rejected externally:

        \`\`\`javascript
        const { promise, resolve, reject } = Promise.withResolvers();

        // Use resolve() or reject() when needed
        setTimeout(() => resolve('Success!'), 1000);
        \`\`\`

        ## Regular Expression v Flag

        The new 'v' flag for regular expressions provides enhanced Unicode support and better character class handling.

        ## Atomics.waitAsync()

        This addition to the Atomics API allows for asynchronous waiting on shared memory locations without blocking the main thread.

        ## Temporal API Progress

        While not yet in ES2024, the Temporal API continues development as a modern replacement for JavaScript's Date object.

        These features demonstrate JavaScript's commitment to developer experience and performance improvements.
      `
    },
    'web-performance-optimization': {
      title: 'Web Performance Optimization',
      category: 'Performance',
      publishDate: 'December 8, 2024',
      readTime: '10 min read',
      author: 'Mike Rodriguez',
      content: `
        Web performance is crucial for user experience and business success. Even small improvements in loading time can significantly impact user engagement and conversions.

        ## Core Web Vitals

        Google's Core Web Vitals are essential metrics for measuring user experience:

        - **Largest Contentful Paint (LCP)**: Measures loading performance
        - **First Input Delay (FID)**: Measures interactivity
        - **Cumulative Layout Shift (CLS)**: Measures visual stability

        ## Image Optimization

        Images often account for the majority of a page's data. Optimize them by:

        - Using modern formats like WebP and AVIF
        - Implementing responsive images with srcset
        - Lazy loading images below the fold
        - Compressing images appropriately

        ## Code Splitting

        Break your JavaScript bundles into smaller chunks that load only when needed:

        \`\`\`javascript
        const LazyComponent = React.lazy(() => import('./LazyComponent'));
        \`\`\`

        ## Caching Strategies

        Implement effective caching at multiple levels:

        - Browser caching with proper HTTP headers
        - Service workers for offline functionality
        - CDN caching for static assets

        ## Critical Resource Optimization

        - Inline critical CSS
        - Preload important resources
        - Use resource hints (preconnect, prefetch)

        ## Monitoring and Measuring

        Use tools like Lighthouse, WebPageTest, and real user monitoring to continuously track and improve performance.

        Remember, performance optimization is an ongoing process, not a one-time task.
      `
    },
    'responsive-design-patterns': {
      title: 'Responsive Design Patterns',
      category: 'Design',
      publishDate: 'December 5, 2024',
      readTime: '7 min read',
      author: 'Emma Wilson',
      content: `
        Responsive design ensures your website works well on all devices. Understanding common patterns helps you create flexible, user-friendly layouts.

        ## The Mobile-First Approach

        Start designing for the smallest screen size and progressively enhance for larger screens:

        \`\`\`css
        /* Mobile styles (default) */
        .container {
          padding: 1rem;
        }

        /* Tablet and up */
        @media (min-width: 768px) {
          .container {
            padding: 2rem;
          }
        }
        \`\`\`

        ## Flexible Grid Systems

        Use CSS Grid and Flexbox to create layouts that adapt to different screen sizes:

        \`\`\`css
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        \`\`\`

        ## Responsive Typography

        Make text readable across devices using relative units and fluid typography:

        \`\`\`css
        .heading {
          font-size: clamp(1.5rem, 4vw, 3rem);
        }
        \`\`\`

        ## Navigation Patterns

        Common responsive navigation patterns include:

        - Hamburger menus for mobile
        - Tab bars for touch interfaces
        - Sticky navigation for desktop

        ## Image and Media Handling

        Ensure images and videos scale appropriately:

        \`\`\`css
        img {
          max-width: 100%;
          height: auto;
        }
        \`\`\`

        ## Testing Across Devices

        Always test your responsive designs on real devices and use browser dev tools to simulate different screen sizes.

        Responsive design is about creating inclusive experiences that work for everyone, regardless of their device.
      `
    },
    'state-management-guide': {
      title: 'React State Management Guide',
      category: 'React',
      publishDate: 'December 3, 2024',
      readTime: '12 min read',
      author: 'David Park',
      content: `
        State management is one of the most important aspects of React applications. Choosing the right approach can make your code more maintainable and your app more performant.

        ## Local Component State

        For simple, component-specific data, useState is often sufficient:

        \`\`\`jsx
        function Counter() {
          const [count, setCount] = useState(0);
          
          return (
            <button onClick={() => setCount(count + 1)}>
              Count: {count}
            </button>
          );
        }
        \`\`\`

        ## Context API

        For data that needs to be shared across multiple components:

        \`\`\`jsx
        const ThemeContext = createContext();

        function App() {
          const [theme, setTheme] = useState('light');
          
          return (
            <ThemeContext.Provider value={{ theme, setTheme }}>
              <MyComponent />
            </ThemeContext.Provider>
          );
        }
        \`\`\`

        ## Redux Toolkit

        For complex applications with intricate state interactions:

        \`\`\`javascript
        import { createSlice } from '@reduxjs/toolkit';

        const counterSlice = createSlice({
          name: 'counter',
          initialState: { value: 0 },
          reducers: {
            increment: (state) => {
              state.value += 1;
            }
          }
        });
        \`\`\`

        ## Zustand

        A lightweight alternative to Redux with a simpler API:

        \`\`\`javascript
        import { create } from 'zustand';

        const useStore = create((set) => ({
          count: 0,
          increment: () => set((state) => ({ count: state.count + 1 })),
        }));
        \`\`\`

        ## When to Use Each Approach

        - **useState**: Component-specific state
        - **useContext**: App-wide themes, user authentication
        - **Redux/Zustand**: Complex state logic, time-travel debugging
        - **React Query**: Server state management

        ## Best Practices

        - Keep state as local as possible
        - Normalize complex state structures
        - Use immutable updates
        - Consider server state vs client state

        The key is choosing the right tool for your specific needs and keeping your state management strategy simple and predictable.
      `
    }
  }

  const article = articles[id]

  if (!article) {
    return (
      <div className="article-page">
        <div className="article-content">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/section" className="btn">
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="article-page">
      <div className="article-content">
        <div className="article-meta">
          <Link to="/section" style={{ color: '#667eea', textDecoration: 'none' }}>
            ← Back to Articles
          </Link>
          <div style={{ marginTop: '1rem' }}>
            <span style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '0.25rem 0.75rem',
              borderRadius: '15px',
              fontSize: '0.8rem',
              marginRight: '1rem'
            }}>
              {article.category}
            </span>
            <span>{article.publishDate} • {article.readTime} • By {article.author}</span>
          </div>
        </div>

        <h1>{article.title}</h1>
        
        <div 
          style={{ lineHeight: '1.8' }}
          dangerouslySetInnerHTML={{ 
            __html: article.content
              .split('\n\n')
              .map(paragraph => {
                if (paragraph.trim().startsWith('## ')) {
                  return `<h2>${paragraph.replace('## ', '')}</h2>`
                }
                if (paragraph.trim().startsWith('```')) {
                  return `<pre style="background: #f8f9fa; padding: 1rem; border-radius: 5px; overflow-x: auto; margin: 1rem 0;"><code>${paragraph.replace(/```[\w]*\n?/, '').replace(/```$/, '')}</code></pre>`
                }
                return `<p>${paragraph}</p>`
              })
              .join('')
          }}
        />

        {/* Taboola Below Article Feed */}
        <div style={{ marginTop: '3rem' }}>
          <TaboolaArticleFeed />
        </div>

        <div style={{ 
          marginTop: '2rem',
          paddingTop: '2rem', 
          borderTop: '1px solid #e9ecef',
          textAlign: 'center'
        }}>
          <Link to="/section" className="btn">
            Read More Articles
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
