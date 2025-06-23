import React from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'
function page() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-coral-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">HealthTracker</span>
              </div>
              <p className="text-gray-400">
                Empowering your health journey with intelligent tracking and personalized insights.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/features" className="block hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="block hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="/api" className="block hover:text-white transition-colors">
                  API
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/about" className="block hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/blog" className="block hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="/careers" className="block hover:text-white transition-colors">
                  Careers
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/help" className="block hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="/contact" className="block hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="/privacy" className="block hover:text-white transition-colors">
                  Privacy
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HealthTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page
