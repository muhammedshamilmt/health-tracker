import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Activity, Target, Moon, Apple, Users, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FeaturesPage() {
  const features = [
    {
      icon: Activity,
      title: "Activity Tracking",
      description:
        "Comprehensive workout and movement monitoring with GPS tracking, heart rate zones, and performance analytics.",
      benefits: ["GPS route mapping", "Heart rate monitoring", "Calorie tracking", "Performance insights"],
      color: "teal",
      image: "https://img.freepik.com/free-vector/fitness-stats-concept-illustration_114360-5046.jpg?uid=R184261370&ga=GA1.1.938875538.1737971654&semt=ais_hybrid&w=740",
    },
    {
      icon: Apple,
      title: "Nutrition Management",
      description: "Smart food logging with barcode scanning, macro tracking, and personalized meal recommendations.",
      benefits: ["Barcode scanning", "Macro tracking", "Meal planning", "Recipe suggestions"],
      color: "emerald",
      image: "https://img.freepik.com/free-vector/cardio-exercising-healthy-lifestyle-heart-disease-prevention-healthcare-cardiology-healthy-eating-workout-health-diagnostics_335657-791.jpg?uid=R184261370&ga=GA1.1.938875538.1737971654&semt=ais_hybrid&w=740",
    },
    {
      icon: Moon,
      title: "Sleep Analysis",
      description: "Advanced sleep tracking with sleep stage analysis, smart alarms, and sleep quality insights.",
      benefits: ["Sleep stage tracking", "Smart wake-up", "Sleep quality scoring", "Bedtime reminders"],
      color: "indigo",
      image: "https://img.freepik.com/premium-vector/smartwatch-sleep-tracking-isolated-cartoon-vector-illustrations_107173-21527.jpg?uid=R184261370&ga=GA1.1.938875538.1737971654&semt=ais_hybrid&w=740",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Personalized goal creation with progress tracking, milestone celebrations, and adaptive targets.",
      benefits: ["Custom goals", "Progress tracking", "Milestone rewards", "Adaptive targets"],
      color: "coral",
      image: "https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?uid=R184261370&ga=GA1.1.938875538.1737971654&semt=ais_hybrid&w=740",
    },
    {
      icon: Users,
      title: "Social Community",
      description: "Connect with like-minded individuals, join challenges, and share your health journey.",
      benefits: ["Community challenges", "Friend connections", "Achievement sharing", "Group motivation"],
      color: "purple",
      image: "https://img.freepik.com/free-vector/network-concept-illustration_114360-25039.jpg?uid=R184261370&ga=GA1.1.938875538.1737971654&semt=ais_hybrid&w=740",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights and trends with AI-powered recommendations for optimal health outcomes.",
      benefits: ["Trend analysis", "AI insights", "Health reports", "Predictive analytics"],
      color: "blue",
      image: "https://img.freepik.com/premium-vector/robotic-process-automation-abstract-concept-vector-illustration_107173-25461.jpg?uid=R184261370&ga=GA1.1.938875538.1737971654&semt=ais_hybrid&w=740",
    },
  ]

  const integrations = [
    { name: "Apple Health", icon: "🍎", description: "Seamless sync with Apple Health ecosystem" },
    { name: "Google Fit", icon: "🏃", description: "Connect with Google Fit for unified tracking" },
    { name: "Fitbit", icon: "⌚", description: "Import data from your Fitbit devices" },
    { name: "Garmin", icon: "🎯", description: "Professional athlete-grade integration" },
    { name: "MyFitnessPal", icon: "🍽️", description: "Enhanced nutrition tracking capabilities" },
    { name: "Strava", icon: "🚴", description: "Social fitness tracking and segments" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-6">✨ Comprehensive Health Platform</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">
              Optimal Health
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover powerful features designed to transform your health journey. From activity tracking to nutrition
            management, we've got every aspect of your wellness covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
            >
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-teal-200 text-teal-700 hover:bg-teal-50">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-100 flex items-center justify-center`}>
                      <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-${feature.color}-500`}></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`bg-${feature.color}-500 hover:bg-${feature.color}-600 text-white`}>
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-teal-400 to-coral-400 rounded-full opacity-20 blur-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite health and fitness apps for a unified experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{integration.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                  <p className="text-gray-600">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
