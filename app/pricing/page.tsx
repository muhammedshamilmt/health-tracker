"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Heart, Check, Star, Zap, Crown, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Basic",
      description: "Perfect for getting started with health tracking",
      monthlyPrice: 0,
      annualPrice: 0,
      icon: Heart,
      color: "gray",
      features: [
        "Basic activity tracking",
        "Simple nutrition logging",
        "Sleep monitoring",
        "Basic goal setting",
        "Community access",
        "Mobile app access",
      ],
      limitations: ["Limited to 3 goals", "Basic analytics only", "No premium features"],
    },
    {
      name: "Pro",
      description: "Advanced features for serious health enthusiasts",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      icon: Zap,
      color: "teal",
      popular: true,
      features: [
        "Advanced activity tracking",
        "Comprehensive nutrition database",
        "Detailed sleep analysis",
        "Unlimited goals",
        "AI-powered insights",
        "Custom workout plans",
        "Meal planning",
        "Priority support",
        "Data export",
        "Wearable integrations",
      ],
    },
    {
      name: "Premium",
      description: "Complete health ecosystem for professionals",
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      icon: Crown,
      color: "coral",
      features: [
        "Everything in Pro",
        "Personal health coach",
        "Advanced analytics & reports",
        "Custom meal plans",
        "Supplement recommendations",
        "Health risk assessments",
        "Telehealth consultations",
        "Family sharing (up to 6 members)",
        "White-label options",
        "API access",
      ],
    },
  ]

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 30-day free trial for all paid plans. No credit card required to start.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your health journey. Start free, upgrade when you're ready.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isAnnual ? "text-gray-900 font-medium" : "text-gray-500"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-teal-600" />
            <span className={`text-sm ${isAnnual ? "text-gray-900 font-medium" : "text-gray-500"}`}>Annual</span>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Save 20%</Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative shadow-lg hover:shadow-xl transition-all border-0 ${
                  plan.popular ? "ring-2 ring-teal-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-teal-500 text-white hover:bg-teal-500">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-${plan.color}-100 flex items-center justify-center mb-4`}
                  >
                    <plan.icon className={`w-8 h-8 text-${plan.color}-600`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                  <div className="mt-6">
                    <div className="text-4xl font-bold text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      {plan.monthlyPrice > 0 && (
                        <span className="text-lg font-normal text-gray-500">/{isAnnual ? "year" : "month"}</span>
                      )}
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <p className="text-sm text-gray-500 mt-1">
                        ${(plan.annualPrice / 12).toFixed(2)}/month billed annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
                        : plan.monthlyPrice === 0
                          ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          : "bg-coral-500 hover:bg-coral-600 text-white"
                    }`}
                  >
                    {plan.monthlyPrice === 0 ? "Get Started Free" : "Start Free Trial"}
                  </Button>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations && (
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900">Limitations:</h4>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-center space-x-3">
                          <div className="w-4 h-4 rounded-full bg-gray-300 flex-shrink-0"></div>
                          <span className="text-sm text-gray-500">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-coral-50 rounded-3xl p-12">
            <Users className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
            <p className="text-lg text-gray-600 mb-8">
              Custom solutions for organizations, healthcare providers, and large teams. Get dedicated support, advanced
              security, and custom integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
              >
                Contact Sales
              </Button>
              <Button variant="outline" size="lg" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing and plans</p>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
