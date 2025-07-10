import { useState } from 'react'
import { Search, Sparkles, ArrowRight, TrendingUp, Users, Star, Zap } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  const stats = [
    { icon: Sparkles, label: 'AI Tools', value: '2,500+', color: 'text-blue-600' },
    { icon: Users, label: 'Monthly Users', value: '100K+', color: 'text-emerald-600' },
    { icon: Star, label: 'User Rating', value: '4.8/5', color: 'text-yellow-500' },
    { icon: TrendingUp, label: 'Tools Added Daily', value: '15+', color: 'text-purple-600' },
  ]

  const popularSearches = [
    { term: 'ChatGPT', trending: true },
    { term: 'Image Generation', trending: false },
    { term: 'Code Assistant', trending: true },
    { term: 'Content Writing', trending: false },
    { term: 'Data Analysis', trending: false }
  ]

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in border border-blue-200/50">
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            Discover 2,500+ AI Tools • Updated Daily
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            Discover the{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Perfect AI Tools
            </span>{' '}
            for Your Workflow
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            The most comprehensive directory of AI-powered solutions. 
            Find, compare, and choose the right tools to{' '}
            <span className="text-blue-600 font-semibold">supercharge your productivity</span>.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/50 p-2">
                <div className="flex items-center">
                  <Search className="absolute left-6 text-gray-400 w-6 h-6" />
                  <Input
                    type="text"
                    placeholder="Search for AI tools, categories, or features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-14 pr-32 py-4 text-lg bg-transparent border-0 focus:ring-0 placeholder:text-gray-400"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button
                    onClick={handleSearch}
                    className="absolute right-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Search
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Search Terms */}
          <div className="mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-sm text-gray-500 mb-4">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((item) => (
                <button
                  key={item.term}
                  className="group relative px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 hover:shadow-md"
                  onClick={() => setSearchQuery(item.term)}
                >
                  {item.trending && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                  {item.term}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 mb-4 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-bounce-subtle"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
    </section>
  )
}