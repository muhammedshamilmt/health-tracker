import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Heart, Activity, Moon, Droplets, Target, TrendingUp, ArrowRight, Play, Download, Star, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-4">🎬 Interactive Demo</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">
              HealthTracker
            </span>{" "}
            Live
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore all the features and see how HealthTracker can transform your health journey. This interactive demo
            shows real app functionality.
          </p>
        </div>

        {/* Demo Dashboard */}
        <div className="mb-16">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-coral-500 text-white">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Heart className="w-6 h-6" />
                  <span>HealthTracker Dashboard Demo</span>
                </div>
                <Badge className="bg-white/20 text-white">Live Demo</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 bg-gradient-to-br from-teal-50 to-coral-50">
              {/* Welcome Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Good morning, Demo User! 👋</h2>
                <p className="text-gray-600">Here's your health summary for today</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-teal-100 text-sm font-medium">Steps Today</p>
                        <p className="text-3xl font-bold">8,432</p>
                      </div>
                      <Activity className="w-8 h-8 text-teal-200" />
                    </div>
                    <Progress value={84} className="bg-teal-400 [&>div]:bg-white" />
                    <p className="text-teal-100 text-sm mt-2">84% of daily goal</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-coral-500 to-coral-600 text-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-coral-100 text-sm font-medium">Calories</p>
                        <p className="text-3xl font-bold">1,247</p>
                      </div>
                      <Heart className="w-8 h-8 text-coral-200" />
                    </div>
                    <Progress value={83} className="bg-coral-400 [&>div]:bg-white" />
                    <p className="text-coral-100 text-sm mt-2">83% of daily goal</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-indigo-100 text-sm font-medium">Sleep</p>
                        <p className="text-3xl font-bold">7h 23m</p>
                      </div>
                      <Moon className="w-8 h-8 text-indigo-200" />
                    </div>
                    <Progress value={92} className="bg-indigo-400 [&>div]:bg-white" />
                    <p className="text-indigo-100 text-sm mt-2">92% sleep efficiency</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-emerald-100 text-sm font-medium">Water</p>
                        <p className="text-3xl font-bold">6.2L</p>
                      </div>
                      <Droplets className="w-8 h-8 text-emerald-200" />
                    </div>
                    <Progress value={78} className="bg-emerald-400 [&>div]:bg-white" />
                    <p className="text-emerald-100 text-sm mt-2">78% of daily goal</p>
                  </CardContent>
                </Card>
              </div>

              {/* Interactive Elements */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-teal-600" />
                      <span>Quick Actions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      className="w-full justify-start bg-teal-50 text-teal-700 hover:bg-teal-100 border-0"
                      variant="outline"
                    >
                      + Log Activity
                    </Button>
                    <Button
                      className="w-full justify-start bg-coral-50 text-coral-700 hover:bg-coral-100 border-0"
                      variant="outline"
                    >
                      + Add Meal
                    </Button>
                    <Button
                      className="w-full justify-start bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-0"
                      variant="outline"
                    >
                      + Record Sleep
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-teal-600" />
                      <span>Weekly Progress</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Steps Average</span>
                        <span className="text-teal-600 font-semibold">8,234</span>
                      </div>
                      <Progress
                        value={82}
                        className="bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-teal-500 [&>div]:to-teal-600"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Workouts</span>
                        <span className="text-coral-600 font-semibold">5/7 days</span>
                      </div>
                      <Progress
                        value={71}
                        className="bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-coral-500 [&>div]:to-coral-600"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Try These Features</h2>
            <p className="text-xl text-gray-600">Click around and explore the interactive elements above</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Activity Tracking",
                description: "Log workouts, track steps, and monitor your daily movement",
                color: "teal",
              },
              {
                icon: Heart,
                title: "Health Metrics",
                description: "Monitor heart rate, calories, and other vital health indicators",
                color: "coral",
              },
              {
                icon: TrendingUp,
                title: "Progress Analytics",
                description: "View detailed charts and insights about your health journey",
                color: "indigo",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-4`}
                  >
                    <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of users who have already transformed their health journey with HealthTracker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  )
}
