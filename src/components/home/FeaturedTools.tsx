import { Star, ArrowRight, Bookmark, ExternalLink } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Badge } from '../ui/badge'

export default function FeaturedTools() {
  const featuredTools = [
    {
      id: 1,
      name: 'ChatGPT',
      description: 'Advanced AI chatbot for conversations, content creation, and problem-solving',
      category: 'Conversational AI',
      rating: 4.9,
      reviews: 15420,
      pricing: 'Free + Paid',
      isPremium: true,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop&crop=center',
      features: ['Chat Interface', 'Content Creation', 'Code Generation', 'Analysis'],
      slug: 'chatgpt'
    },
    {
      id: 2,
      name: 'DALL-E 2',
      description: 'Generate stunning images from text descriptions using advanced AI',
      category: 'Image Generation',
      rating: 4.7,
      reviews: 8932,
      pricing: 'Paid',
      isPremium: false,
      image: 'https://images.unsplash.com/photo-1686191128892-c02751edc0c8?w=200&h=200&fit=crop&crop=center',
      features: ['Text to Image', 'High Quality', 'Multiple Styles', 'Commercial Use'],
      slug: 'dall-e-2'
    },
    {
      id: 3,
      name: 'GitHub Copilot',
      description: 'AI-powered code completion and programming assistant',
      category: 'Code Assistant',
      rating: 4.8,
      reviews: 12845,
      pricing: 'Paid',
      isPremium: true,
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=200&h=200&fit=crop&crop=center',
      features: ['Code Completion', 'Multiple Languages', 'Context Aware', 'IDE Integration'],
      slug: 'github-copilot'
    },
    {
      id: 4,
      name: 'Midjourney',
      description: 'Create amazing artwork and images with AI-powered artistic generation',
      category: 'Image Generation',
      rating: 4.6,
      reviews: 9876,
      pricing: 'Paid',
      isPremium: false,
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200&h=200&fit=crop&crop=center',
      features: ['Artistic Style', 'High Resolution', 'Style Variations', 'Community'],
      slug: 'midjourney'
    },
    {
      id: 5,
      name: 'Jasper AI',
      description: 'AI content creation platform for marketing and business writing',
      category: 'Content Writing',
      rating: 4.5,
      reviews: 6543,
      pricing: 'Paid',
      isPremium: true,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop&crop=center',
      features: ['Blog Posts', 'Marketing Copy', 'SEO Optimization', 'Templates'],
      slug: 'jasper-ai'
    },
    {
      id: 6,
      name: 'Tableau AI',
      description: 'Advanced data visualization and business intelligence platform',
      category: 'Data Analysis',
      rating: 4.7,
      reviews: 5432,
      pricing: 'Free + Paid',
      isPremium: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center',
      features: ['Data Visualization', 'Real-time Analytics', 'Dashboard', 'Collaboration'],
      slug: 'tableau-ai'
    }
  ]

  const handleBookmark = (toolId: number) => {
    // TODO: Implement bookmark functionality
    console.log('Bookmarking tool:', toolId)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured AI Tools
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the most popular and powerful AI tools trusted by millions of users worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredTools.map((tool) => (
          <Card key={tool.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{tool.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => handleBookmark(tool.id)}
                    className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                  {tool.isPremium && (
                    <Badge className="bg-emerald-500 hover:bg-emerald-600">
                      Premium
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pb-4">
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {tool.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{tool.rating}</span>
                  <span className="text-xs text-gray-500">({tool.reviews.toLocaleString()})</span>
                </div>
                <span className="text-sm font-medium text-primary-600">{tool.pricing}</span>
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
                  className="flex-1 bg-primary-600 hover:bg-primary-700"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" variant="outline" className="bg-white hover:bg-primary-50">
          View All Tools
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  )
}