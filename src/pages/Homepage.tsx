import HeroSection from '../components/home/HeroSection'
import FeaturedTools from '../components/home/FeaturedTools'
import SponsoredBanner from '../components/home/SponsoredBanner'
import CategoryGrid from '../components/home/CategoryGrid'
import NewsletterSignup from '../components/home/NewsletterSignup'

export default function Homepage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <SponsoredBanner />
      <FeaturedTools />
      <CategoryGrid />
      <NewsletterSignup />
    </div>
  )
}