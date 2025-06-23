'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Heart,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Video,
  Book,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function SupportPage() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
      color: "teal",
      action: "Start Chat",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      availability: "Mon-Fri 6AM-6PM PST",
      responseTime: "< 5 minutes",
      color: "coral",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "24/7",
      responseTime: "< 4 hours",
      color: "indigo",
      action: "Send Email",
    },
    {
      icon: Video,
      title: "Screen Share",
      description: "Schedule a video call for complex technical issues",
      availability: "By appointment",
      responseTime: "Same day",
      color: "emerald",
      action: "Schedule Call",
    },
  ]

  const quickHelp = [
    {
      icon: "🔄",
      title: "Sync Issues",
      description: "Data not syncing from your device?",
      action: "Troubleshoot",
    },
    {
      icon: "🔐",
      title: "Account Access",
      description: "Can't log in or forgot password?",
      action: "Reset Password",
    },
    {
      icon: "💳",
      title: "Billing Questions",
      description: "Issues with subscription or payments?",
      action: "View Billing",
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Problems with the mobile app?",
      action: "Get Help",
    },
    {
      icon: "🎯",
      title: "Goal Setting",
      description: "Need help setting up your goals?",
      action: "Learn More",
    },
    {
      icon: "📊",
      title: "Data Export",
      description: "Want to export your health data?",
      action: "Export Data",
    },
  ]

  const systemStatus = [
    { service: "Web Application", status: "operational", uptime: "99.9%" },
    { service: "Mobile Apps", status: "operational", uptime: "99.8%" },
    { service: "Data Sync", status: "operational", uptime: "99.7%" },
    { service: "API Services", status: "operational", uptime: "99.9%" },
    { service: "Notifications", status: "maintenance", uptime: "99.5%" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50"
    >
      {/* Header */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            We're Here to{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Help</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get the support you need to make the most of your health tracking journey. Our expert team is available 24/7
            to assist you.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <Input
              placeholder="Search for help articles, troubleshooting guides, or common issues..."
              className="pl-12 pr-4 py-4 text-lg rounded-xl border-teal-200 focus:border-teal-500"
            />
            <Button className="absolute right-2 top-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
              Search
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Quick Help */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickHelp.map((item, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all border-0 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                        {item.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Support</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-${option.color}-100 flex items-center justify-center flex-shrink-0`}
                    >
                      <option.icon className={`w-6 h-6 text-${option.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                      <p className="text-gray-600 mb-4">{option.description}</p>
                      <div className="space-y-2 text-sm mb-6">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{option.availability}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Response time: {option.responseTime}</span>
                        </div>
                      </div>
                      <Button className={`bg-${option.color}-500 hover:bg-${option.color}-600 text-white`}>
                        {option.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">System Status</h2>
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>All Systems Operational</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemStatus.map((system, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {system.status === "operational" ? (
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    )}
                    <span className="font-medium text-gray-900">{system.service}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge
                      className={`${
                        system.status === "operational"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-yellow-100 text-yellow-700"
                      } hover:bg-current`}
                    >
                      {system.status === "operational" ? "Operational" : "Maintenance"}
                    </Badge>
                    <span className="text-sm text-gray-500">{system.uptime} uptime</span>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                  View Detailed Status
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resources */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Book className="w-5 h-5 text-teal-600" />
                <span>Help Resources</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <a href="/help" className="block p-3 rounded-lg hover:bg-teal-50 transition-colors">
                  <h3 className="font-medium text-gray-900 mb-1">Help Center</h3>
                  <p className="text-sm text-gray-600">Browse our comprehensive knowledge base</p>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-teal-50 transition-colors">
                  <h3 className="font-medium text-gray-900 mb-1">Video Tutorials</h3>
                  <p className="text-sm text-gray-600">Step-by-step video guides</p>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-teal-50 transition-colors">
                  <h3 className="font-medium text-gray-900 mb-1">API Documentation</h3>
                  <p className="text-sm text-gray-600">Technical documentation for developers</p>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-teal-50 transition-colors">
                  <h3 className="font-medium text-gray-900 mb-1">Community Forum</h3>
                  <p className="text-sm text-gray-600">Connect with other users and get tips</p>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-r from-coral-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-coral-600" />
                <span>Premium Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Get priority support with faster response times, dedicated account management, and exclusive access to
                new features.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-700">Priority queue access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-700">Dedicated account manager</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-700">Phone & video support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-700">Custom integrations help</span>
                </div>
              </div>
              <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">Upgrade to Premium</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Still Need Help?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Our support team is standing by to help you succeed with HealthTracker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
              Start Live Chat
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
      <Footer/>
    </motion.div>
  )
}
