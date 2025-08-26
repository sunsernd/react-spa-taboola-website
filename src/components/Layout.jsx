import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              SPA Website
            </Link>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/section">Articles</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          {children}
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 SPA Website. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
