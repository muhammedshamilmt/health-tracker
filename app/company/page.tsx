import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Award, TrendingUp, Building, Lightbulb, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CompanyPage() {
  const stats = [
    { label: "Active Users", value: "500K+", icon: Users },
    { label: "Countries", value: "50+", icon: Globe },
    { label: "Team Members", value: "150+", icon: Building },
    { label: "Years of Innovation", value: "4+", icon: Award },
  ]

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "HealthTracker was born from a vision to make health tracking accessible to everyone, everywhere.",
    },
    {
      year: "2021",
      title: "First Million Data Points",
      description: "Reached our first major milestone with over 1 million health data points tracked by our users.",
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched AI-powered insights and personalized recommendations to help users achieve their goals.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to 50+ countries and launched localized versions in 12 languages.",
    },
    {
      year: "2024",
      title: "Enterprise Solutions",
      description: "Introduced enterprise-grade solutions for healthcare providers and corporate wellness programs.",
    },
  ]

  const leadership = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Product at a leading health tech company. Passionate about democratizing health data.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Medical Officer",
      bio: "Board-certified physician with 15+ years in digital health and preventive medicine.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Alex Thompson",
      role: "CTO & Co-Founder",
      bio: "Former Principal Engineer at major tech companies. Expert in scalable health data systems.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Johnson",
      role: "VP of Design",
      bio: "Award-winning designer focused on creating inclusive and accessible health experiences.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Health First",
      description: "Every decision we make prioritizes the health and wellbeing of our users and community.",
    },
    {
      icon: Users,
      title: "Inclusive Innovation",
      description: "We build for everyone, ensuring our platform is accessible regardless of background or ability.",
    },
    {
      icon: Lightbulb,
      title: "Evidence-Based",
      description: "Our features are grounded in scientific research and validated health practices.",
    },
    {
      icon: Target,
      title: "User-Centric",
      description: "We listen to our users and continuously improve based on their feedback and needs.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-6">🏢 About HealthTracker</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming Health{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Together</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're on a mission to democratize health tracking and empower everyone to live their healthiest life. Learn
            about our journey, values, and the team making it all possible.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-lg border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                    <stat.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone deserves access to tools that help them understand and improve their health.
                Our mission is to make comprehensive health tracking simple, accessible, and actionable for people
                everywhere.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                By combining cutting-edge technology with evidence-based health science, we're creating a platform that
                not only tracks your health data but provides meaningful insights that drive real behavior change.
              </p>
              <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
                Learn About Our Impact
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our Mission"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-teal-400 to-coral-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our mission to transform health tracking</p>
          </div>
          <div className="space-y-8">
            {timeline.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{milestone.year}</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders driving our mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all border-0 text-center">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={150}
                      height={150}
                      className="w-24 h-24 mx-auto rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-sm text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investors & Partners */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Backed by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to be supported by leading investors and partners who share our vision
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 mx-auto text-teal-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Series A Funding</h3>
                <p className="text-gray-600">$15M raised to accelerate product development and global expansion</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 mx-auto text-coral-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                <p className="text-gray-600">Winner of multiple health tech innovation awards and recognitions</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Partners</h3>
                <p className="text-gray-600">
                  Partnerships with leading healthcare providers and wellness organizations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Partner With Us</h2>
          <p className="text-xl text-teal-100 mb-8">
            Interested in working together? Let's explore how we can create value for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
