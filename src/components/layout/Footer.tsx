import { Link } from 'react-router-dom'
import { Sparkles, Twitter, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Browse Tools', href: '/browse' },
        { name: 'Submit Tool', href: '/submit-tool' },
        { name: 'Blog', href: '/blog' },
        { name: 'Dashboard', href: '/dashboard' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Content Creation', href: '/browse/content-creation' },
        { name: 'Data Analysis', href: '/browse/data-analysis' },
        { name: 'Image Generation', href: '/browse/image-generation' },
        { name: 'Code Assistant', href: '/browse/code-assistant' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'API Documentation', href: '/docs' },
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
      ]
    }
  ]

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Email', href: '#', icon: Mail },
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-2 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Tools Directory</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Discover, compare, and find the perfect AI tools for your needs. 
              The most comprehensive directory of AI-powered solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} AI Tools Directory. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-sm text-gray-600 hover:text-primary-600">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary-600">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-sm text-gray-600 hover:text-primary-600">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}