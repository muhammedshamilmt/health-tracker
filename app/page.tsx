import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Heart, Moon, Target, TrendingUp, Users, Star, Download, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer  from "@/components/footer"
import Navbar from "@/components/navbar"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">✨ Transform Your Health Journey</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Track Your Health.{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">
                    Transform Your Life Too.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Take control of your wellness journey with our comprehensive health tracking app. Monitor activities,
                  nutrition, sleep, and achieve your goals with personalized insights.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link href="/get-started">
                    <Download className="w-5 h-5 mr-2" />
                    Get Started Free
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-teal-200 text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-xl"
                  asChild
                >
                  <Link href="/demo">View Demo</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>50K+ Users</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900">Today's Progress</h3>
                    <p className="text-gray-500">Keep up the great work!</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-teal-50 rounded-2xl p-4 text-center">
                      <Activity className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-teal-700">8,432</div>
                      <div className="text-xs text-teal-600">Steps</div>
                    </div>
                    <div className="bg-coral-50 rounded-2xl p-4 text-center">
                      <Heart className="w-6 h-6 text-coral-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-coral-700">72</div>
                      <div className="text-xs text-coral-600">BPM</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Daily Goal</span>
                      <span className="text-teal-600 font-medium">84%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-teal-500 to-coral-500 h-2 rounded-full"
                        style={{ width: "84%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-teal-400 to-coral-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-coral-400 to-teal-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything You Need for{" "}
              <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">
                Optimal Health
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive health tracking tools designed to help you build lasting healthy habits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Activity Tracking",
                description: "Monitor your daily activities, workouts, and movement patterns with detailed analytics",
                color: "teal",
              },
              {
                icon: Target,
                title: "Nutrition Logging",
                description: "Track your meals, calories, and macronutrients with our comprehensive food database",
                color: "coral",
              },
              {
                icon: Moon,
                title: "Sleep Monitoring",
                description: "Analyze your sleep patterns and get personalized tips for better rest",
                color: "indigo",
              },
              {
                icon: TrendingUp,
                title: "Goal Setting",
                description: "Set personalized health goals and track your progress with visual insights",
                color: "emerald",
              },
              {
                icon: Heart,
                title: "Health Insights",
                description: "Get AI-powered insights and recommendations based on your health data",
                color: "rose",
              },
              {
                icon: Users,
                title: "Community Support",
                description: "Connect with like-minded individuals and share your health journey",
                color: "purple",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-${feature.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Loved by Thousands of Users</h2>
            <p className="text-xl text-gray-600">See how HealthTracker is transforming lives around the world</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fitness Enthusiast",
                image: "/placeholder.svg?height=60&width=60",
                quote:
                  "HealthTracker helped me lose 30 pounds and build sustainable healthy habits. The insights are incredible!",
                rating: 5,
              },
              {
                name: "Mike Chen",
                role: "Busy Professional",
                image: "/placeholder.svg?height=60&width=60",
                quote:
                  "Finally, a health app that fits my busy lifestyle. The sleep tracking feature has been a game-changer.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Marathon Runner",
                image: "/placeholder.svg?height=60&width=60",
                quote:
                  "The detailed activity tracking and nutrition insights have taken my training to the next level.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed">"{testimonial.quote}"</blockquote>

                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Join Thousands Improving Their Health Today Too!
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Start your wellness journey with HealthTracker. Download now and get your first month free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-50 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/download/ios">
                  <Download className="w-5 h-5 mr-2" />
                  Download for iOS
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-xl"
                asChild
              >
                <Link href="/download/android">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Android
                </Link>
              </Button>
            </div>

            <p className="text-sm text-teal-100">No credit card required • 30-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
