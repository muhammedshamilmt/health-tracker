import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Heart, CheckCircle, Star, Users, Shield, Zap, ArrowRight, Mail, User, Lock, Download, Smartphone, Tablet, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="max-w-md mx-auto lg:mx-0">
            <div className="text-center lg:text-left mb-8">
              <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-4">🚀 Start Your Journey</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get Started{" "}
                <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Free</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Create your account and start tracking your health journey today. No credit card required.
              </p>
            </div>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-center">Create Your Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center space-x-2 mb-2">
                      <User className="w-4 h-4 text-teal-600" />
                      <span>Full Name</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center space-x-2 mb-2">
                      <Mail className="w-4 h-4 text-teal-600" />
                      <span>Email Address</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="flex items-center space-x-2 mb-2">
                      <Lock className="w-4 h-4 text-teal-600" />
                      <span>Password</span>
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a secure password"
                      className="border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  size="lg"
                >
                  Create Account - Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-teal-600 hover:text-teal-700 font-medium">
                      Sign in here
                    </Link>
                  </p>
                </div>

                <div className="border-t pt-6">
                  <p className="text-xs text-gray-500 text-center">
                    By creating an account, you agree to our{" "}
                    <Link href="/privacy" className="text-teal-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-teal-600 hover:underline">
                      Terms of Service
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle,
                    title: "30-Day Free Trial",
                    description: "Full access to all premium features for 30 days",
                  },
                  {
                    icon: Shield,
                    title: "Privacy Protected",
                    description: "Your health data is encrypted and never shared",
                  },
                  {
                    icon: Zap,
                    title: "Instant Setup",
                    description: "Get started in less than 2 minutes",
                  },
                  {
                    icon: Users,
                    title: "Community Access",
                    description: "Join thousands of health-focused individuals",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-teal-100 rounded-full p-2 flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <Card className="bg-gradient-to-r from-teal-50 to-coral-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-r from-teal-400 to-coral-400 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">4.9/5 from 50,000+ users</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "HealthTracker transformed how I approach my wellness. The insights are incredible!"
                </blockquote>
                <p className="text-sm text-gray-500 mt-2">- Sarah M., Verified User</p>
              </CardContent>
            </Card>

            {/* Quick Start Steps */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Start in 3 Steps</h3>
              <div className="space-y-3">
                {["Create your free account", "Set your health goals", "Start tracking and see results"].map(
                  (step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-coral-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Start Your Health Journey Today</h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of users who have already transformed their lives with HealthTracker.
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
  )
}
