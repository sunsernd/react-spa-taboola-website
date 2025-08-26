import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SectionPage from './pages/SectionPage'
import ArticlePage from './pages/ArticlePage'
import useTaboolaNavigation from './hooks/useTaboolaNavigation'

function AppContent() {
  // Initialize Taboola navigation tracking
  useTaboolaNavigation()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/section" element={<SectionPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Layout>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
