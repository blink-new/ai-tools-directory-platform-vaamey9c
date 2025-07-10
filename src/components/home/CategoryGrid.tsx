import { 
  Brain, 
  Image, 
  Code, 
  PenTool, 
  BarChart3, 
  MessageCircle, 
  Music, 
  Video,
  Briefcase,
  Palette,
  Camera,
  FileText
} from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

export default function CategoryGrid() {
  const categories = [
    {
      name: 'Conversational AI',
      icon: MessageCircle,
      toolCount: 145,
      description: 'Chatbots, virtual assistants, and AI companions',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      name: 'Image Generation',
      icon: Image,
      toolCount: 89,
      description: 'AI-powered image creation and editing tools',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      popular: true
    },
    {
      name: 'Code Assistant',
      icon: Code,
      toolCount: 67,
      description: 'Programming helpers and code generation tools',
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      popular: true
    },
    {
      name: 'Content Writing',
      icon: PenTool,
      toolCount: 124,
      description: 'AI writing assistants and content creators',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      popular: false
    },
    {
      name: 'Data Analysis',
      icon: BarChart3,
      toolCount: 78,
      description: 'Analytics, insights, and business intelligence',
      color: 'bg-cyan-500',
      bgColor: 'bg-cyan-50',
      popular: false
    },
    {
      name: 'Audio & Music',
      icon: Music,
      toolCount: 45,
      description: 'Music generation, audio editing, and voice synthesis',
      color: 'bg-pink-500',
      bgColor: 'bg-pink-50',
      popular: false
    },
    {
      name: 'Video Creation',
      icon: Video,
      toolCount: 52,
      description: 'Video editing, animation, and production tools',
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
      popular: false
    },
    {
      name: 'Business Tools',
      icon: Briefcase,
      toolCount: 91,
      description: 'Productivity, automation, and business solutions',
      color: 'bg-indigo-500',
      bgColor: 'bg-indigo-50',
      popular: false
    },
    {
      name: 'Design & Art',
      icon: Palette,
      toolCount: 63,
      description: 'Creative tools for designers and artists',
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      popular: false
    },
    {
      name: 'Research & Analysis',
      icon: Brain,
      toolCount: 34,
      description: 'Research assistants and analytical tools',
      color: 'bg-teal-500',
      bgColor: 'bg-teal-50',
      popular: false
    },
    {
      name: 'Photo Editing',
      icon: Camera,
      toolCount: 41,
      description: 'AI-powered photo enhancement and manipulation',
      color: 'bg-violet-500',
      bgColor: 'bg-violet-50',
      popular: false
    },
    {
      name: 'Document Processing',
      icon: FileText,
      toolCount: 29,
      description: 'PDF processing, OCR, and document analysis',
      color: 'bg-slate-500',
      bgColor: 'bg-slate-50',
      popular: false
    }
  ]

  const handleCategoryClick = (categoryName: string) => {
    // TODO: Navigate to category page
    console.log('Navigating to category:', categoryName)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Explore by Category
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find the perfect AI tools for your specific needs across different categories
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card 
            key={category.name}
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md"
            onClick={() => handleCategoryClick(category.name)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${category.bgColor} group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-6 h-6 ${category.color.replace('bg-', 'text-')}`} />
                </div>
                {category.popular && (
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 text-xs">
                    Popular
                  </Badge>
                )}
              </div>
              
              <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  {category.toolCount} tools
                </span>
                <div className="w-2 h-2 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Can't find what you're looking for?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            onClick={() => handleCategoryClick('browse-all')}
          >
            Browse All Categories
          </button>
          <button 
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            onClick={() => handleCategoryClick('request-category')}
          >
            Request New Category
          </button>
        </div>
      </div>
    </section>
  )
}