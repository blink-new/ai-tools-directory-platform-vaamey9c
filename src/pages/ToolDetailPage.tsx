import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  Star, 
  ExternalLink, 
  Share2, 
  ChevronLeft,
  Play,
  Users,
  Tag,
  Check,
  X,
  Heart,
  MessageCircle,
  Award,
  Globe,
  Zap
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Progress } from '../components/ui/progress'

// Mock data for the tool
const toolData = {
  id: 1,
  name: 'ChatGPT',
  tagline: 'Advanced AI chatbot for conversations, content creation, and problem-solving',
  description: 'ChatGPT is a state-of-the-art language model developed by OpenAI that can engage in human-like conversations, help with writing tasks, answer questions, assist with coding, and much more. Built on the GPT architecture, it represents one of the most advanced AI assistants available today.',
  category: 'Conversational AI',
  subcategory: 'Chatbots',
  rating: 4.9,
  reviews: 15420,
  pricing: {
    free: true,
    paid: true,
    plans: [
      { name: 'Free', price: '$0', features: ['Basic GPT-3.5', 'Limited usage', 'Standard response time'] },
      { name: 'Plus', price: '$20/month', features: ['GPT-4 access', 'Faster responses', 'Priority access', 'Plugin support'] },
      { name: 'Team', price: '$30/user/month', features: ['Everything in Plus', 'Team collaboration', 'Admin controls', 'Higher usage limits'] }
    ]
  },
  isPremium: true,
  isNew: false,
  website: 'https://chat.openai.com',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center',
  gallery: [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1675557009785-69f59a6b0b37?w=600&h=400&fit=crop&crop=center'
  ],
  features: [
    'Natural language conversations',
    'Content creation and writing',
    'Code generation and debugging',
    'Data analysis and insights',
    'Creative brainstorming',
    'Educational assistance',
    'Language translation',
    'Summarization'
  ],
  prosAndCons: {
    pros: [
      'Exceptional natural language understanding',
      'Versatile across many use cases',
      'Continuously improving responses',
      'Large knowledge base',
      'User-friendly interface'
    ],
    cons: [
      'Can sometimes generate incorrect information',
      'Limited real-time data access',
      'Usage limits on free tier',
      'Occasional downtime during peak hours'
    ]
  },
  useCases: [
    'Content creation and copywriting',
    'Programming assistance',
    'Research and analysis',
    'Customer service automation',
    'Educational tutoring',
    'Creative writing',
    'Business communication',
    'Data interpretation'
  ],
  tags: ['chatbot', 'writing', 'coding', 'popular', 'openai'],
  launched: '2022-11-30',
  lastUpdated: '2024-01-15',
  company: 'OpenAI',
  integrations: ['API', 'Plugins', 'Microsoft Office', 'Slack', 'Discord'],
  alternatives: [
    { name: 'Claude AI', rating: 4.7, pricing: 'Free + Paid' },
    { name: 'Bard', rating: 4.5, pricing: 'Free' },
    { name: 'Copilot', rating: 4.6, pricing: 'Free + Paid' }
  ]
}

const reviews = [
  {
    id: 1,
    user: { name: 'Sarah Johnson', avatar: 'SJ', verified: true },
    rating: 5,
    date: '2024-01-10',
    comment: 'Absolutely incredible tool! ChatGPT has revolutionized how I approach content creation and research. The responses are remarkably human-like and helpful.',
    helpful: 24,
    category: 'Content Creation'
  },
  {
    id: 2,
    user: { name: 'Mike Chen', avatar: 'MC', verified: true },
    rating: 4,
    date: '2024-01-08',
    comment: 'Great for coding assistance and debugging. Sometimes the solutions need tweaking, but it saves so much time overall.',
    helpful: 18,
    category: 'Programming'
  },
  {
    id: 3,
    user: { name: 'Emma Davis', avatar: 'ED', verified: false },
    rating: 5,
    date: '2024-01-05',
    comment: 'Perfect for brainstorming and creative writing. The AI understands context really well and provides meaningful suggestions.',
    helpful: 12,
    category: 'Creative Writing'
  }
]

export default function ToolDetailPage() {
  // const { slug } = useParams() // Available if needed later
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(1)
  const [activeTab, setActiveTab] = useState('overview')

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    // Show toast notification
  }

  const ratingBreakdown = [
    { stars: 5, percentage: 78, count: 12028 },
    { stars: 4, percentage: 15, count: 2313 },
    { stars: 3, percentage: 5, count: 771 },
    { stars: 2, percentage: 1, count: 154 },
    { stars: 1, percentage: 1, count: 154 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/browse" className="hover:text-blue-600 transition-colors">
            Browse Tools
          </Link>
          <ChevronLeft className="w-4 h-4 rotate-180" />
          <Link to={`/browse/${toolData.category.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-600 transition-colors">
            {toolData.category}
          </Link>
          <ChevronLeft className="w-4 h-4 rotate-180" />
          <span className="text-gray-900 font-medium">{toolData.name}</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
            <div className="flex-shrink-0 mb-6 lg:mb-0">
              <img
                src={toolData.image}
                alt={toolData.name}
                className="w-32 h-32 rounded-2xl object-cover shadow-lg"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{toolData.name}</h1>
                    {toolData.isPremium && (
                      <Badge className="bg-emerald-500 hover:bg-emerald-600">
                        <Award className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                    {toolData.isNew && (
                      <Badge className="bg-blue-500 hover:bg-blue-600">
                        <Zap className="w-3 h-3 mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-xl text-gray-600 mb-4">{toolData.tagline}</p>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <Badge variant="secondary" className="text-sm">
                      <Tag className="w-4 h-4 mr-1" />
                      {toolData.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-semibold">{toolData.rating}</span>
                      <span className="text-gray-500">({toolData.reviews.toLocaleString()} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>10M+ users</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleBookmark}
                    className={isBookmarked ? 'text-red-600 border-red-200' : ''}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                    {isBookmarked ? 'Saved' : 'Save'}
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit {toolData.name}
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Globe className="w-4 h-4" />
                  <span>Free tier available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-gray-200 rounded-xl p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Features
            </TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Pricing
            </TabsTrigger>
            <TabsTrigger value="reviews" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Reviews
            </TabsTrigger>
            <TabsTrigger value="alternatives" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Alternatives
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle>About {toolData.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{toolData.description}</p>
                  </CardContent>
                </Card>

                {/* Use Cases */}
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Use Cases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {toolData.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Pros and Cons */}
                <Card>
                  <CardHeader>
                    <CardTitle>Pros & Cons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                          <Check className="w-4 h-4 mr-2" />
                          Pros
                        </h4>
                        <ul className="space-y-2">
                          {toolData.prosAndCons.pros.map((pro, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                          <X className="w-4 h-4 mr-2" />
                          Cons
                        </h4>
                        <ul className="space-y-2">
                          {toolData.prosAndCons.cons.map((con, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="font-medium">{toolData.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Launched</span>
                      <span className="font-medium">{new Date(toolData.launched).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company</span>
                      <span className="font-medium">{toolData.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Updated</span>
                      <span className="font-medium">{new Date(toolData.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {toolData.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Integrations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Integrations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {toolData.integrations.map((integration) => (
                        <div key={integration} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{integration}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {toolData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {toolData.pricing.plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedPlan === index 
                      ? 'ring-2 ring-blue-500 shadow-lg' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedPlan(index)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6" 
                      variant={selectedPlan === index ? 'default' : 'outline'}
                    >
                      {index === 0 ? 'Start Free' : 'Choose Plan'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Rating Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold mb-2">{toolData.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">{toolData.reviews.toLocaleString()} reviews</div>
                    </div>
                    <div className="space-y-2">
                      {ratingBreakdown.map((item) => (
                        <div key={item.stars} className="flex items-center space-x-2 text-sm">
                          <span className="w-8">{item.stars}★</span>
                          <Progress value={item.percentage} className="flex-1 h-2" />
                          <span className="w-12 text-gray-600">{item.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3 space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.user.avatar} />
                          <AvatarFallback>{review.user.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-semibold">{review.user.name}</span>
                                {review.user.verified && (
                                  <Badge variant="secondary" className="text-xs">
                                    <Check className="w-3 h-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {review.category}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-3">{review.comment}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              <span>Reply</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>Helpful ({review.helpful})</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="alternatives" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Similar Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {toolData.alternatives.map((alt, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-2">{alt.name}</h4>
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm">{alt.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{alt.pricing}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}