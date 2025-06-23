import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Download, Star, Shield, Smartphone, Zap, Users, CheckCircle, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DownloadAndroid() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-4">🤖 Android App Available</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Download HealthTracker for{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Android</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience powerful health tracking on your Android device. Seamlessly integrate with Google Fit and enjoy
            Material Design excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Get it on Google Play
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-xl"
              asChild
            >
              <Link href="/demo">View Demo</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.8/5 on Play Store</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>250K+ Downloads</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>

        {/* App Preview */}
        <div className="relative mb-20">
          <div className="max-w-md mx-auto">
            <div className="relative bg-gray-900 rounded-[2rem] p-1 shadow-2xl">
              <div className="bg-white rounded-[1.5rem] overflow-hidden">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 h-[600px] flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Health Dashboard</h3>
                    <p className="text-gray-500">Your daily overview</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-emerald-100 rounded-2xl p-4 text-center">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs">🏃</span>
                      </div>
                      <div className="text-xl font-bold text-emerald-700">12,543</div>
                      <div className="text-xs text-emerald-600">Steps</div>
                    </div>
                    <div className="bg-teal-100 rounded-2xl p-4 text-center">
                      <div className="w-8 h-8 bg-teal-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xl font-bold text-teal-700">68</div>
                      <div className="text-xs text-teal-600">BPM</div>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Weekly Goal</span>
                        <span className="text-emerald-600 font-medium">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-medium mb-2">Today's Activities</h4>
                      <div className="space-y-2">
                        <div className="bg-emerald-50 rounded-lg p-2 text-sm text-emerald-700">
                          🏃 Morning Run - 30 min
                        </div>
                        <div className="bg-teal-50 rounded-lg p-2 text-sm text-teal-700">🥗 Healthy Lunch Logged</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Android Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Optimized for{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Android
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the full power of Android with deep system integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏃",
                title: "Google Fit Integration",
                description: "Seamlessly sync with Google Fit for comprehensive activity tracking",
              },
              {
                icon: "⌚",
                title: "Wear OS Support",
                description: "Full compatibility with Wear OS smartwatches for on-the-go tracking",
              },
              {
                icon: "🔒",
                title: "Android Security",
                description: "Leverages Android's robust security features to protect your health data",
              },
              {
                icon: "🎨",
                title: "Material Design",
                description: "Beautiful, intuitive interface following Google's Material Design principles",
              },
              {
                icon: "☁️",
                title: "Google Drive Backup",
                description: "Automatic backup of your health data to Google Drive",
              },
              {
                icon: "🎯",
                title: "Google Assistant",
                description: "Voice commands through Google Assistant for hands-free logging",
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
                    <Smartphone className="w-5 h-5 mr-2 text-emerald-600" />
                    Android Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Android 8.0 (API level 26) or higher
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      2GB RAM minimum
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      100MB available storage
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-teal-600" />
                    Enhanced Features
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Wear OS device for advanced tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Google account for sync
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Google Fit app installed
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
              Download HealthTracker for Android and start your wellness journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
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
