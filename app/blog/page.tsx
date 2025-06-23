import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, Search, Calendar, User, ArrowRight, TrendingUp, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BlogPage() {
  const featuredPost = {
    title: "The Science Behind Effective Sleep Tracking: What Your Data Really Means",
    excerpt:
      "Discover how modern sleep tracking technology works and learn to interpret your sleep data for better rest and recovery.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Sleep Science",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  }

  const posts = [
    {
      title: "10 Evidence-Based Nutrition Tips for Sustainable Weight Loss",
      excerpt:
        "Learn practical, science-backed strategies for healthy weight management that you can maintain long-term.",
      author: "Emily Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Nutrition",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Building a Consistent Exercise Routine: A Beginner's Guide",
      excerpt:
        "Start your fitness journey with confidence using these proven strategies for creating lasting exercise habits.",
      author: "Mike Thompson",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Fitness",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "The Mental Health Benefits of Regular Physical Activity",
      excerpt: "Explore the powerful connection between exercise and mental wellbeing, backed by the latest research.",
      author: "Dr. Alex Johnson",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Mental Health",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Understanding Your Heart Rate Zones for Optimal Training",
      excerpt: "Master the art of heart rate training to maximize your workout efficiency and achieve better results.",
      author: "Lisa Chen",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Fitness",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Hydration 101: How Much Water Do You Really Need?",
      excerpt: "Debunk common hydration myths and learn the science-based approach to optimal fluid intake.",
      author: "Dr. Maria Garcia",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "Nutrition",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "The Role of Technology in Modern Healthcare",
      excerpt:
        "Discover how digital health tools are revolutionizing preventive care and personal wellness management.",
      author: "David Kim",
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = [
    { name: "All", count: 24 },
    { name: "Fitness", count: 8 },
    { name: "Nutrition", count: 6 },
    { name: "Sleep Science", count: 4 },
    { name: "Mental Health", count: 3 },
    { name: "Technology", count: 3 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Health & Wellness{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert advice, research-backed tips, and inspiring stories to help you on your health journey.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search articles..."
              className="pl-10 pr-4 py-3 rounded-xl border-teal-200 focus:border-teal-500"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <span>Categories</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      index === 0 ? "bg-teal-50 text-teal-700 font-medium" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-400">({category.count})</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Post */}
            <Card className="shadow-xl border-0 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-coral-500 text-white hover:bg-coral-500">Featured</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white w-fit">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-all border-0 group cursor-pointer">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-3">{post.category}</Badge>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-teal-100 mb-8">
            Get the latest health tips, research updates, and wellness insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <Button className="bg-white text-teal-600 hover:bg-gray-50">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
