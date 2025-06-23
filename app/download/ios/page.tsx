import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Download, Star, Shield, Smartphone, Zap, Users, CheckCircle, Apple, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DownloadiOS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-4">📱 iOS App Available</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Download HealthTracker for{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">iOS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get the most advanced health tracking experience on your iPhone and iPad. Seamlessly sync with Apple Health
            and enjoy native iOS features.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Download on App Store
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-teal-200 text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-xl"
              asChild
            >
              <Link href="/demo">View Demo</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 on App Store</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>100K+ Downloads</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>Privacy Focused</span>
            </div>
          </div>
        </div>

        {/* App Preview */}
        <div className="relative mb-20">
          <div className="max-w-md mx-auto">
            <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <div className="bg-gradient-to-br from-teal-50 to-coral-50 p-8 h-[600px] flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Today's Progress</h3>
                    <p className="text-gray-500">Keep up the great work!</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-teal-100 rounded-2xl p-4 text-center">
                      <div className="w-8 h-8 bg-teal-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs">👟</span>
                      </div>
                      <div className="text-xl font-bold text-teal-700">8,432</div>
                      <div className="text-xs text-teal-600">Steps</div>
                    </div>
                    <div className="bg-coral-100 rounded-2xl p-4 text-center">
                      <div className="w-8 h-8 bg-coral-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xl font-bold text-coral-700">72</div>
                      <div className="text-xs text-coral-600">BPM</div>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Daily Goal</span>
                        <span className="text-teal-600 font-medium">84%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-coral-500 h-2 rounded-full"
                          style={{ width: "84%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-medium mb-2">Quick Actions</h4>
                      <div className="space-y-2">
                        <div className="bg-teal-50 rounded-lg p-2 text-sm text-teal-700">+ Log Activity</div>
                        <div className="bg-coral-50 rounded-lg p-2 text-sm text-coral-700">+ Add Meal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iOS Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Built for{" "}
              <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">
                iOS Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience seamless integration with your iPhone and iPad ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🍎",
                title: "Apple Health Integration",
                description: "Seamlessly sync with Apple Health for comprehensive health data management",
              },
              {
                icon: "⌚",
                title: "Apple Watch Support",
                description: "Track workouts and monitor health metrics directly from your wrist",
              },
              {
                icon: "🔒",
                title: "Privacy by Design",
                description: "Your health data stays secure with iOS privacy features and end-to-end encryption",
              },
              {
                icon: "📱",
                title: "Native iOS Experience",
                description: "Optimized for iOS with native performance and familiar interface patterns",
              },
              {
                icon: "☁️",
                title: "iCloud Sync",
                description: "Your data syncs across all your Apple devices automatically",
              },
              {
                icon: "🎯",
                title: "Siri Shortcuts",
                description: "Create custom voice commands to quickly log health data",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-20">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">System Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Smartphone className="w-5 h-5 mr-2 text-teal-600" />
                    iPhone Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      iOS 15.0 or later
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      iPhone 8 or newer
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      50MB available storage
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-coral-600" />
                    Recommended Features
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Apple Watch for enhanced tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      iCloud account for sync
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Apple Health app enabled
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Health?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Download HealthTracker for iOS and start your wellness journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
                <Apple className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
