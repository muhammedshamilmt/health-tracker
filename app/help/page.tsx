import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Heart,
  Search,
  MessageCircle,
  Book,
  Video,
  HelpCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Smartphone,
  BookOpen,
  Users,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HelpPage() {
  const popularArticles = [
    {
      title: "Getting Started with HealthTracker",
      category: "Getting Started",
      readTime: "5 min",
      views: "12.5K",
      description: "Learn the basics of setting up your account and tracking your first activities.",
    },
    {
      title: "How to Sync Your Fitness Tracker",
      category: "Integrations",
      readTime: "3 min",
      views: "8.2K",
      description: "Step-by-step guide to connect your wearable devices and sync data automatically.",
    },
    {
      title: "Understanding Your Sleep Data",
      category: "Sleep Tracking",
      readTime: "7 min",
      views: "6.8K",
      description: "Decode your sleep metrics and learn how to improve your sleep quality.",
    },
    {
      title: "Setting and Achieving Health Goals",
      category: "Goals",
      readTime: "6 min",
      views: "5.9K",
      description: "Best practices for creating realistic goals and staying motivated.",
    },
    {
      title: "Troubleshooting Data Sync Issues",
      category: "Troubleshooting",
      readTime: "4 min",
      views: "4.3K",
      description: "Common solutions for when your data isn't syncing properly.",
    },
    {
      title: "Privacy and Data Security",
      category: "Privacy",
      readTime: "8 min",
      views: "3.7K",
      description: "Learn how we protect your health data and manage your privacy settings.",
    },
  ]

  const categories = [
    { name: "Getting Started", icon: "🚀", count: 12 },
    { name: "Activity Tracking", icon: "🏃", count: 18 },
    { name: "Nutrition", icon: "🥗", count: 15 },
    { name: "Sleep Tracking", icon: "😴", count: 10 },
    { name: "Goals & Challenges", icon: "🎯", count: 8 },
    { name: "Integrations", icon: "🔗", count: 14 },
    { name: "Account & Billing", icon: "💳", count: 9 },
    { name: "Troubleshooting", icon: "🔧", count: 16 },
  ]

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
      color: "teal",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "24/7",
      responseTime: "< 4 hours",
      color: "coral",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      availability: "Mon-Fri 9AM-6PM PST",
      responseTime: "< 5 minutes",
      color: "indigo",
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Schedule a screen-sharing session for complex issues",
      availability: "By appointment",
      responseTime: "Same day",
      color: "emerald",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            How can we{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">help you?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers, get support, and learn how to make the most of HealthTracker.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <Input
              placeholder="Search for help articles, features, or common issues..."
              className="pl-12 pr-4 py-4 text-lg rounded-xl border-teal-200 focus:border-teal-500"
            />
            <Button className="absolute right-2 top-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
              Search
            </Button>
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
                  <Book className="w-5 h-5 text-teal-600" />
                  <span>Browse by Category</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-3 rounded-lg transition-colors hover:bg-teal-50 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-gray-700 group-hover:text-teal-700">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">({category.count})</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="shadow-lg hover:shadow-xl transition-all border-0 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-teal-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Start Chat</h3>
                    <p className="text-sm text-gray-600">Get instant help</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-all border-0 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-coral-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Video className="w-6 h-6 text-coral-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Watch Tutorials</h3>
                    <p className="text-sm text-gray-600">Video guides</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-all border-0 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mobile App</h3>
                    <p className="text-sm text-gray-600">Download guide</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-all border-0 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <HelpCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Report Issue</h3>
                    <p className="text-sm text-gray-600">Technical support</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Popular Articles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Help Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-all border-0 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">{article.category}</Badge>
                            <span className="text-sm text-gray-500">{article.readTime}</span>
                            <span className="text-sm text-gray-500">{article.views} views</span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-teal-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-600">{article.description}</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 ml-4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {contactOptions.map((option, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-all border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-${option.color}-100 flex items-center justify-center flex-shrink-0`}
                        >
                          <option.icon className={`w-6 h-6 text-${option.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                          <p className="text-gray-600 mb-4">{option.description}</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">{option.availability}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <AlertCircle className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">Response time: {option.responseTime}</span>
                            </div>
                          </div>
                          <Button className={`mt-4 bg-${option.color}-500 hover:bg-${option.color}-600 text-white`}>
                            {option.title === "Live Chat"
                              ? "Start Chat"
                              : option.title === "Email Support"
                                ? "Send Email"
                                : option.title === "Phone Support"
                                  ? "Call Now"
                                  : "Schedule Call"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Status & Updates */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-teal-50 to-coral-50">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                  <h3 className="text-lg font-semibold text-gray-900">All Systems Operational</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  All HealthTracker services are running smoothly. Check our status page for real-time updates.
                </p>
                <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                  View Status Page
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">Our support team is here to help you succeed</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-6">Get instant help from our support team</p>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-coral-100 flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-coral-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone Support</h3>
                <p className="text-gray-600 mb-6">Speak directly with our experts</p>
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">
                  Call Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Support</h3>
                <p className="text-gray-600 mb-6">Send us a detailed message</p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
