import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Menu,Heart } from 'lucide-react'
function page() {
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-coral-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">HealthTracker</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-teal-600 transition-colors">
                Features
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
                About
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-teal-600 transition-colors">
                Dashboard
              </Link>
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50" asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default page
