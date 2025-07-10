import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { 
  Search, 
  Grid3X3, 
  List, 
  Star, 
  ExternalLink, 
  Bookmark,
  SlidersHorizontal,
  ChevronDown,
  X
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../components/ui/select'

// Mock data for tools
const allTools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Advanced AI chatbot for conversations, content creation, and problem-solving with natural language processing.',
    category: 'Conversational AI',
    subcategory: 'Chatbots',
    rating: 4.9,
    reviews: 15420,
    pricing: 'Free + Paid',
    isPremium: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&crop=center',
    features: ['Chat Interface', 'Content Creation', 'Code Generation', 'Analysis'],
    slug: 'chatgpt',
    tags: ['chatbot', 'writing', 'coding', 'popular']
  },
  {
    id: 2,
    name: 'DALL-E 2',
    description: 'Generate stunning images from text descriptions using advanced AI with high-quality artistic outputs.',
    category: 'Image Generation',
    subcategory: 'Text-to-Image',
    rating: 4.7,
    reviews: 8932,
    pricing: 'Paid',
    isPremium: false,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1686191128892-c02751edc0c8?w=300&h=200&fit=crop&crop=center',
    features: ['Text to Image', 'High Quality', 'Multiple Styles', 'Commercial Use'],
    slug: 'dall-e-2',
    tags: ['art', 'design', 'creative', 'popular']
  },
  {
    id: 3,
    name: 'GitHub Copilot',
    description: 'AI-powered code completion and programming assistant that helps write better code faster.',
    category: 'Code Assistant',
    subcategory: 'Code Completion',
    rating: 4.8,
    reviews: 12845,
    pricing: 'Paid',
    isPremium: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300&h=200&fit=crop&crop=center',
    features: ['Code Completion', 'Multiple Languages', 'Context Aware', 'IDE Integration'],
    slug: 'github-copilot',
    tags: ['coding', 'development', 'productivity', 'popular']
  },
  {
    id: 4,
    name: 'Midjourney',
    description: 'Create amazing artwork and images with AI-powered artistic generation and style transfer.',
    category: 'Image Generation',
    subcategory: 'Artistic Creation',
    rating: 4.6,
    reviews: 9876,
    pricing: 'Paid',
    isPremium: false,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=200&fit=crop&crop=center',
    features: ['Artistic Style', 'High Resolution', 'Style Variations', 'Community'],
    slug: 'midjourney',
    tags: ['art', 'creative', 'design', 'trending']
  },
  {
    id: 5,
    name: 'Jasper AI',
    description: 'AI content creation platform for marketing and business writing with powerful templates.',
    category: 'Content Writing',
    subcategory: 'Marketing Copy',
    rating: 4.5,
    reviews: 6543,
    pricing: 'Paid',
    isPremium: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=center',
    features: ['Blog Posts', 'Marketing Copy', 'SEO Optimization', 'Templates'],
    slug: 'jasper-ai',
    tags: ['writing', 'marketing', 'business', 'seo']
  },
  {
    id: 6,
    name: 'Tableau AI',
    description: 'Advanced data visualization and business intelligence platform with AI-powered insights.',
    category: 'Data Analysis',
    subcategory: 'Visualization',
    rating: 4.7,
    reviews: 5432,
    pricing: 'Free + Paid',
    isPremium: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center',
    features: ['Data Visualization', 'Real-time Analytics', 'Dashboard', 'Collaboration'],
    slug: 'tableau-ai',
    tags: ['analytics', 'data', 'business', 'new']
  }
]

const categories = [
  'All Categories',
  'Conversational AI',
  'Image Generation', 
  'Code Assistant',
  'Content Writing',
  'Data Analysis'
]

const pricingFilters = ['All Pricing', 'Free', 'Paid', 'Free + Paid']
const sortOptions = ['Most Popular', 'Highest Rated', 'Newest', 'Name A-Z']

export default function BrowsePage() {
  const { category } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(category || 'All Categories')
  const [selectedPricing, setSelectedPricing] = useState('All Pricing')
  const [selectedSort, setSelectedSort] = useState('Most Popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  // Filter and sort tools
  const filteredTools = allTools
    .filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All Categories' || tool.category === selectedCategory
      const matchesPricing = selectedPricing === 'All Pricing' || tool.pricing.includes(selectedPricing.replace(' + Paid', ''))
      
      return matchesSearch && matchesCategory && matchesPricing
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case 'Highest Rated':
          return b.rating - a.rating
        case 'Newest':
          return b.isNew ? 1 : -1
        case 'Name A-Z':
          return a.name.localeCompare(b.name)
        default: // Most Popular
          return b.reviews - a.reviews
      }
    })

  const handleBookmark = (toolId: number) => {
    console.log('Bookmarking tool:', toolId)
  }

  // Filters functionality can be expanded later
  // const addFilter = (filter: string) => {
  //   if (!activeFilters.includes(filter)) {
  //     setActiveFilters([...activeFilters, filter])
  //   }
  // }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter))
  }

  const ToolCard = ({ tool }: { tool: typeof allTools[0] }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={tool.image}
              alt={tool.name}
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {tool.category}
              </Badge>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => handleBookmark(tool.id)}
              className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Bookmark className="w-4 h-4" />
            </button>
            {tool.isPremium && (
              <Badge className="bg-emerald-500 hover:bg-emerald-600">
                Premium
              </Badge>
            )}
            {tool.isNew && (
              <Badge className="bg-blue-500 hover:bg-blue-600">
                New
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {tool.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{tool.rating}</span>
            <span className="text-xs text-gray-500">({tool.reviews.toLocaleString()})</span>
          </div>
          <span className="text-sm font-medium text-blue-600">{tool.pricing}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {tool.features.slice(0, 3).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {tool.features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tool.features.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex w-full space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open('#', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  )

  const ToolListItem = ({ tool }: { tool: typeof allTools[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={tool.image}
            alt={tool.name}
            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  {tool.name}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{tool.rating}</span>
                    <span className="text-xs text-gray-500">({tool.reviews.toLocaleString()})</span>
                  </div>
                  <span className="text-sm font-medium text-blue-600">{tool.pricing}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {tool.features.slice(0, 4).map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                {tool.isPremium && (
                  <Badge className="bg-emerald-500 hover:bg-emerald-600">
                    Premium
                  </Badge>
                )}
                {tool.isNew && (
                  <Badge className="bg-blue-500 hover:bg-blue-600">
                    New
                  </Badge>
                )}
                <button
                  onClick={() => handleBookmark(tool.id)}
                  className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {category ? `${category} Tools` : 'Browse AI Tools'}
          </h1>
          <p className="text-xl text-gray-600">
            Discover the perfect AI tools for your needs from our collection of {allTools.length}+ solutions
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search tools, features, or use cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPricing} onValueChange={setSelectedPricing}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Pricing" />
              </SelectTrigger>
              <SelectContent>
                {pricingFilters.map((pricing) => (
                  <SelectItem key={pricing} value={pricing}>{pricing}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSort} onValueChange={setSelectedSort}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>More Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>

            <div className="flex-1"></div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-600 mr-2">Active filters:</span>
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="flex items-center space-x-1">
                  <span>{filter}</span>
                  <button onClick={() => removeFilter(filter)}>
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFilters([])}
                className="text-blue-600"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredTools.length} of {allTools.length} tools
            </p>
          </div>
        </div>

        {/* Tools Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTools.map((tool) => (
              <ToolListItem key={tool.id} tool={tool} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All Categories')
                setSelectedPricing('All Pricing')
                setActiveFilters([])
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}