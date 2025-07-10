import { Star, ArrowRight, Crown } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

export default function SponsoredBanner() {
  const sponsoredTool = {
    name: 'Claude AI',
    description: 'Advanced AI assistant for analysis, writing, math, coding, and creative tasks',
    category: 'AI Assistant',
    rating: 4.8,
    reviews: 12340,
    pricing: 'Free + Pro',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=200&fit=crop&crop=center',
    features: ['Document Analysis', 'Code Generation', 'Creative Writing', 'Math Problem Solving'],
    offerText: 'Get 2 months free with annual plan',
    originalPrice: '$20/month',
    discountPrice: '$15/month'
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 border-0">
        <div className="absolute top-4 left-4">
          <Badge className="bg-white text-orange-600 hover:bg-white">
            <Crown className="w-3 h-3 mr-1" />
            Sponsored
          </Badge>
        </div>
        
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {sponsoredTool.name}
              </h2>
              
              <p className="text-orange-100 text-lg mb-6 leading-relaxed">
                {sponsoredTool.description}
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-300 fill-current" />
                  <span className="text-white font-medium">{sponsoredTool.rating}</span>
                  <span className="text-orange-200 text-sm">({sponsoredTool.reviews.toLocaleString()} reviews)</span>
                </div>
                <Badge className="bg-orange-400 text-white hover:bg-orange-400">
                  {sponsoredTool.category}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {sponsoredTool.features.map((feature) => (
                  <Badge key={feature} variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
                    {feature}
                  </Badge>
                ))}
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm">{sponsoredTool.offerText}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-orange-200 line-through text-sm">{sponsoredTool.originalPrice}</span>
                      <span className="text-white font-bold text-lg">{sponsoredTool.discountPrice}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-orange-100 text-xs">Limited Time</p>
                    <p className="text-white font-semibold">Save 25%</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50 font-semibold"
                  onClick={() => window.open('#', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <img
                src={sponsoredTool.image}
                alt={sponsoredTool.name}
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </CardContent>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
        </div>
      </Card>
    </section>
  )
}