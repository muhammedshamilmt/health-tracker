import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Clock, Users, Zap, Globe, Coffee, Gamepad2, ArrowRight, Briefcase, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description:
        "Join our engineering team to build beautiful, responsive user interfaces that help millions track their health.",
      requirements: ["5+ years React/TypeScript experience", "Mobile-first design expertise", "Health tech passion"],
      color: "teal",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "New York, NY / Remote",
      type: "Full-time",
      description:
        "Design intuitive experiences that make health tracking accessible and engaging for users worldwide.",
      requirements: ["3+ years product design experience", "Healthcare/wellness background", "User research skills"],
      color: "coral",
    },
    {
      title: "Data Scientist",
      department: "Data & AI",
      location: "Remote",
      type: "Full-time",
      description:
        "Develop AI models and insights that help users understand their health data and achieve their goals.",
      requirements: ["PhD/MS in relevant field", "Machine learning expertise", "Python/R proficiency"],
      color: "indigo",
    },
    {
      title: "Clinical Research Manager",
      department: "Medical",
      location: "Boston, MA",
      type: "Full-time",
      description: "Lead clinical studies to validate our health tracking features and ensure medical accuracy.",
      requirements: ["Clinical research experience", "Medical/health background", "Regulatory knowledge"],
      color: "emerald",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description:
        "Help enterprise customers maximize value from our platform and drive adoption across their organizations.",
      requirements: ["B2B customer success experience", "Healthcare industry knowledge", "Strong communication skills"],
      color: "purple",
    },
    {
      title: "Marketing Intern",
      department: "Marketing",
      location: "San Francisco, CA",
      type: "Internship",
      description: "Support our marketing team with content creation, social media, and campaign execution.",
      requirements: ["Marketing/communications student", "Social media savvy", "Creative mindset"],
      color: "blue",
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness stipends",
    },
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and quarterly team retreats",
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "Professional development budget, conference attendance, and mentorship programs",
    },
    {
      icon: Users,
      title: "Inclusive Culture",
      description: "Diverse, supportive team with strong values and collaborative environment",
    },
    {
      icon: Coffee,
      title: "Great Perks",
      description: "Unlimited PTO, home office setup, free meals, and team events",
    },
    {
      icon: Gamepad2,
      title: "Work-Life Balance",
      description: "No-meeting Fridays, flexible schedules, and respect for personal time",
    },
  ]

  const values = [
    {
      title: "Health First",
      description: "We prioritize the wellbeing of our users and team members in everything we do.",
    },
    {
      title: "Inclusive Innovation",
      description: "We build for everyone and believe diverse perspectives drive better solutions.",
    },
    {
      title: "Continuous Learning",
      description: "We embrace curiosity, experimentation, and growth at every level.",
    },
    {
      title: "Transparent Communication",
      description: "We share openly, give honest feedback, and build trust through transparency.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-6">🚀 Join Our Mission</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Build the Future of{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">
              Health Tech
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join a passionate team dedicated to making health tracking accessible, effective, and enjoyable for
            everyone. Help us transform how people approach their wellness journey.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
          >
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-to-br from-teal-50 to-coral-50 border-0 text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team so they can take care of our users
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity to make a meaningful impact on global health
            </p>
          </div>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all border-0">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <Badge className={`bg-${job.color}-100 text-${job.color}-700 hover:bg-${job.color}-100`}>
                          {job.department}
                        </Badge>
                        {job.type === "Internship" && (
                          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">{job.type}</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, reqIndex) => (
                          <Badge key={reqIndex} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button className={`bg-${job.color}-500 hover:bg-${job.color}-600 text-white`}>Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Life at HealthTracker</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're building more than just a product – we're creating a culture where everyone can do their best work
                while making a meaningful impact on global health.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From virtual coffee chats to quarterly team retreats, we prioritize connection, collaboration, and
                celebrating our wins together.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-teal-700">4.9/5</div>
                  <div className="text-sm text-teal-600">Employee Rating</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-coral-700">95%</div>
                  <div className="text-sm text-coral-600">Retention Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Team Culture"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-teal-400 to-coral-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Don't see a position that fits? We're always looking for talented individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
              Send Open Application
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
