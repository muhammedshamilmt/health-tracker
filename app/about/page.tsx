import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Globe, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former health tech executive with 15+ years in digital wellness. Passionate about making health tracking accessible to everyone.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Medical Officer",
      bio: "Board-certified physician and researcher specializing in preventive medicine and digital health interventions.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    },
    {
      name: "Alex Thompson",
      role: "CTO & Co-Founder",
      bio: "Tech veteran with expertise in AI/ML and mobile development. Previously led engineering teams at major health platforms.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    },
    {
      name: "Emily Johnson",
      role: "Head of Design",
      bio: "Award-winning UX designer focused on creating intuitive health experiences. Advocate for accessible design principles.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Health First",
      description: "Every decision we make is guided by what's best for our users' health and wellbeing.",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "We believe health is for everyone, regardless of background, ability, or starting point.",
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Our features are grounded in scientific research and validated health practices.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push boundaries to make health tracking more effective and enjoyable.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your health data is sacred. We employ the highest standards of data protection.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our mission is to improve health outcomes for people around the world.",
    },
  ]

  const milestones = [
    { year: "2020", event: "Company founded with a vision to democratize health tracking" },
    { year: "2021", event: "Launched MVP with 1,000 beta users and core tracking features" },
    { year: "2022", event: "Reached 50,000 users and introduced AI-powered insights" },
    { year: "2023", event: "Expanded to 100,000+ users across 25 countries" },
    { year: "2024", event: "Launched community features and enterprise solutions" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-6">🌟 Our Story</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Empowering{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">
              Healthier Lives
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're on a mission to make health tracking simple, effective, and accessible for everyone. Join us in
            building a healthier world, one person at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone deserves access to tools that help them live their healthiest life. That's why
                we've created a comprehensive platform that makes health tracking intuitive, engaging, and
                scientifically sound.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From fitness enthusiasts to those just starting their wellness journey, our platform adapts to meet you
                where you are and helps you reach where you want to be.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-teal-50 rounded-xl">
                  <div className="text-2xl font-bold text-teal-700">500K+</div>
                  <div className="text-sm text-teal-600">Active Users</div>
                </div>
                <div className="text-center p-4 bg-coral-50 rounded-xl">
                  <div className="text-2xl font-bold text-coral-700">50M+</div>
                  <div className="text-sm text-coral-600">Workouts Tracked</div>
                </div>
              </div>
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
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate experts dedicated to transforming health and wellness
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all border-0 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 mx-auto rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                    Connect
                  </Button>
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
            <p className="text-xl text-gray-600">Key milestones in our mission to improve global health</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-teal-100 mb-8">
            Be part of a community that's transforming health and wellness for millions of people worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600">
              View Careers
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
