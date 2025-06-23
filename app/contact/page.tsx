import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, MapPin, Phone, Mail, Clock, MessageCircle, Users, Briefcase } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const offices = [
    {
      city: "San Francisco",
      address: "123 Health Street, Suite 400\nSan Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@healthtracker.com",
      hours: "Mon-Fri 9AM-6PM PST",
    },
    {
      city: "New York",
      address: "456 Wellness Ave, Floor 12\nNew York, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@healthtracker.com",
      hours: "Mon-Fri 9AM-6PM EST",
    },
    {
      city: "London",
      address: "789 Fitness Lane\nLondon, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@healthtracker.com",
      hours: "Mon-Fri 9AM-5PM GMT",
    },
  ]

  const contactReasons = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "sales", label: "Sales & Partnerships" },
    { value: "press", label: "Press & Media" },
    { value: "careers", label: "Careers" },
    { value: "billing", label: "Billing & Accounts" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <Input placeholder="John" className="border-gray-300 focus:border-teal-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <Input placeholder="Doe" className="border-gray-300 focus:border-teal-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="border-gray-300 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company (Optional)</label>
                  <Input placeholder="Your Company" className="border-gray-300 focus:border-teal-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Contact *</label>
                  <Select>
                    <SelectTrigger className="border-gray-300 focus:border-teal-500">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactReasons.map((reason) => (
                        <SelectItem key={reason.value} value={reason.value}>
                          {reason.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="border-gray-300 focus:border-teal-500"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-3">
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-teal-600" />
                  <span>Quick Contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Live Chat
                </Button>
                <Button variant="outline" className="w-full border-teal-200 text-teal-700 hover:bg-teal-50">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button variant="outline" className="w-full border-coral-200 text-coral-700 hover:bg-coral-50">
                  <Users className="w-4 h-4 mr-2" />
                  Book a Demo
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">hello@healthtracker.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900">Support Hours</p>
                    <p className="text-gray-600">24/7 Chat & Email</p>
                    <p className="text-gray-600">Mon-Fri 9AM-6PM Phone</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sales Contact */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-coral-50 to-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Briefcase className="w-6 h-6 text-coral-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Enterprise Sales</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Interested in enterprise solutions? Our sales team can help you find the right plan for your
                  organization.
                </p>
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600">Visit us at one of our global locations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start justify-center space-x-2">
                      <MapPin className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                      <p className="text-sm whitespace-pre-line">{office.address}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-teal-600" />
                      <p className="text-sm">{office.phone}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-teal-600" />
                      <p className="text-sm">{office.email}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <p className="text-sm">{office.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of users who are already transforming their health with HealthTracker.
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
