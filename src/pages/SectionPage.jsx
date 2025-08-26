import { Link } from 'react-router-dom'
import { TaboolaCategoryFeed } from '../components/TaboolaWidget'

function SectionPage() {
  const articles = [
    {
      id: 'getting-started-react',
      title: 'Getting Started with React',
      excerpt: 'Learn the fundamentals of React and build your first component. This comprehensive guide covers everything from setup to creating interactive UIs.',
      category: 'React',
      publishDate: 'Dec 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 'modern-css-techniques',
      title: 'Modern CSS Techniques',
      excerpt: 'Explore the latest CSS features like Grid, Flexbox, and custom properties. Master responsive design and create beautiful layouts.',
      category: 'CSS',
      publishDate: 'Dec 12, 2024',
      readTime: '8 min read'
    },
    {
      id: 'javascript-es2024',
      title: 'JavaScript ES2024 Features',
      excerpt: 'Discover the newest JavaScript features that will improve your code. From new array methods to enhanced async capabilities.',
      category: 'JavaScript',
      publishDate: 'Dec 10, 2024',
      readTime: '6 min read'
    },
    {
      id: 'web-performance-optimization',
      title: 'Web Performance Optimization',
      excerpt: 'Learn how to make your websites blazingly fast with modern optimization techniques and best practices.',
      category: 'Performance',
      publishDate: 'Dec 8, 2024',
      readTime: '10 min read'
    },
    {
      id: 'responsive-design-patterns',
      title: 'Responsive Design Patterns',
      excerpt: 'Master the art of creating websites that look great on any device with these proven design patterns.',
      category: 'Design',
      publishDate: 'Dec 5, 2024',
      readTime: '7 min read'
    },
    {
      id: 'state-management-guide',
      title: 'React State Management Guide',
      excerpt: 'Compare different state management solutions and learn when to use each approach in your React applications.',
      category: 'React',
      publishDate: 'Dec 3, 2024',
      readTime: '12 min read'
    }
  ]

  const categories = [...new Set(articles.map(article => article.category))]

  return (
    <div className="section-page">
      <h1 className="page-title">All Articles</h1>
      <p className="page-subtitle">
        Browse our collection of articles covering web development, design, and technology.
      </p>

      <div className="categories" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ marginRight: '1rem', color: '#6c757d' }}>Categories:</span>
        {categories.map(category => (
          <span 
            key={category} 
            style={{ 
              display: 'inline-block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '0.25rem 0.75rem',
              borderRadius: '15px',
              fontSize: '0.85rem',
              margin: '0.25rem',
            }}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="articles-grid">
        {articles.map(article => (
          <article key={article.id} className="card">
            <div className="article-header">
              <span 
                style={{ 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}
              >
                {article.category}
              </span>
              <h2 style={{ margin: '0.5rem 0' }}>{article.title}</h2>
            </div>
            
            <p>{article.excerpt}</p>
            
            <div className="article-meta" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid #e9ecef'
            }}>
              <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                <div>{article.publishDate}</div>
                <div>{article.readTime}</div>
              </div>
              <Link to={`/article/${article.id}`} className="btn">
                Read Article
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Taboola Below Category Feed */}
      <section className="taboola-section">
        <TaboolaCategoryFeed />
      </section>
    </div>
  )
}

export default SectionPage
