import { Link } from 'react-router-dom'
import { TaboolaHomeFeed } from '../components/TaboolaWidget'

function HomePage() {
  const featuredArticles = [
    {
      id: 'getting-started-react',
      title: 'Getting Started with React',
      excerpt: 'Learn the fundamentals of React and build your first component.',
      readTime: '5 min read'
    },
    {
      id: 'modern-css-techniques',
      title: 'Modern CSS Techniques',
      excerpt: 'Explore the latest CSS features like Grid, Flexbox, and custom properties.',
      readTime: '8 min read'
    },
    {
      id: 'javascript-es2024',
      title: 'JavaScript ES2024 Features',
      excerpt: 'Discover the newest JavaScript features that will improve your code.',
      readTime: '6 min read'
    }
  ]

  return (
    <div className="homepage">
      <section className="hero">
        <h1 className="page-title">Welcome to Our Blog</h1>
        <p className="page-subtitle">
          Discover insights, tutorials, and stories about web development, technology, and design.
        </p>
      </section>

      <section className="featured-section">
        <div className="card">
          <h2>About This Site</h2>
          <p>
            This is a modern React Single Page Application showcasing clean design, 
            smooth navigation, and responsive layouts. Built with React, React Router, 
            and modern CSS techniques.
          </p>
          <Link to="/section" className="btn">
            Explore All Articles
          </Link>
        </div>
      </section>

      <section className="featured-articles">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2c3e50' }}>
          Featured Articles
        </h2>
        <div className="grid">
          {featuredArticles.map(article => (
            <div key={article.id} className="card">
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                  {article.readTime}
                </span>
                <Link to={`/article/${article.id}`} className="btn">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Taboola Below Home Feed */}
      <section className="taboola-section">
        <TaboolaHomeFeed />
      </section>
    </div>
  )
}

export default HomePage
