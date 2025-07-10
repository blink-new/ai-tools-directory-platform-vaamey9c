import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Homepage from './pages/Homepage'
import BrowsePage from './pages/BrowsePage'
import ToolDetailPage from './pages/ToolDetailPage'
import ComparisonPage from './pages/ComparisonPage'
import SubmitToolPage from './pages/SubmitToolPage'
import BlogPage from './pages/BlogPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/browse/:category" element={<BrowsePage />} />
            <Route path="/browse/:category/:subcategory" element={<BrowsePage />} />
            <Route path="/tool/:slug" element={<ToolDetailPage />} />
            <Route path="/compare/:comparison" element={<ComparisonPage />} />
            <Route path="/submit-tool" element={<SubmitToolPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App