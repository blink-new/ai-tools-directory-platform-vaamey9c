import { useState } from 'react'
import { Mail, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent } from '../ui/card'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  const benefits = [
    'Weekly AI tool recommendations',
    'Exclusive deals and early access',
    'Industry insights and trends',
    'Expert reviews and comparisons'
  ]

  if (isSubscribed) {
    return (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 border-0">
          <CardContent className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Welcome to the community!
            </h3>
            <p className="text-emerald-100 text-lg">
              Thank you for subscribing! You'll receive your first newsletter within 24 hours.
            </p>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 border-0 overflow-hidden">
        <CardContent className="p-12 text-center relative">
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Join 50,000+ professionals who rely on our weekly newsletter for the latest AI tools, 
              trends, and insights to stay competitive.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-white/40"
                  required
                />
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-6"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center justify-center md:justify-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <span className="text-primary-100 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            
            <p className="text-primary-200 text-xs mt-6">
              No spam, ever. Unsubscribe anytime with one click.
            </p>
          </div>
          
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}