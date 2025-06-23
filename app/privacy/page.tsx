import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Lock, Eye, Database, Users, Globe, FileText, Mail, BookOpen } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information",
          details:
            "We collect information you provide directly, such as your name, email address, date of birth, and health goals when you create an account.",
        },
        {
          subtitle: "Health Data",
          details:
            "This includes activity data, nutrition logs, sleep patterns, and other health metrics you choose to track through our platform.",
        },
        {
          subtitle: "Device Information",
          details:
            "We may collect information about the devices you use to access our services, including device type, operating system, and unique device identifiers.",
        },
        {
          subtitle: "Usage Data",
          details:
            "We collect information about how you use our services, including features accessed, time spent, and interaction patterns.",
        },
      ],
    },
    {
      id: "data-usage",
      title: "How We Use Your Data",
      icon: Eye,
      content: [
        {
          subtitle: "Service Provision",
          details:
            "We use your data to provide, maintain, and improve our health tracking services and personalized recommendations.",
        },
        {
          subtitle: "Analytics & Insights",
          details:
            "Your health data helps us generate personalized insights and recommendations to help you achieve your wellness goals.",
        },
        {
          subtitle: "Communication",
          details:
            "We may use your contact information to send you service updates, health tips, and important account notifications.",
        },
        {
          subtitle: "Research & Development",
          details:
            "Aggregated, anonymized data may be used to improve our algorithms and develop new features that benefit all users.",
        },
      ],
    },
    {
      id: "data-sharing",
      title: "Data Sharing & Disclosure",
      icon: Users,
      content: [
        {
          subtitle: "Third-Party Integrations",
          details:
            "With your explicit consent, we may share data with connected apps and devices (like fitness trackers) to enhance your experience.",
        },
        {
          subtitle: "Healthcare Providers",
          details:
            "You can choose to share your health data with healthcare providers or other authorized parties through our secure sharing features.",
        },
        {
          subtitle: "Legal Requirements",
          details:
            "We may disclose information when required by law, to protect our rights, or to ensure user safety and security.",
        },
        {
          subtitle: "Business Transfers",
          details:
            "In the event of a merger or acquisition, user data may be transferred as part of the business assets, with continued privacy protection.",
        },
      ],
    },
    {
      id: "data-security",
      title: "Data Security & Protection",
      icon: Shield,
      content: [
        {
          subtitle: "Encryption",
          details: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards.",
        },
        {
          subtitle: "Access Controls",
          details:
            "We implement strict access controls and authentication measures to ensure only authorized personnel can access user data.",
        },
        {
          subtitle: "Regular Audits",
          details:
            "Our security practices are regularly audited by third-party security firms to ensure compliance with industry standards.",
        },
        {
          subtitle: "Data Minimization",
          details:
            "We collect and retain only the data necessary to provide our services and delete data when it's no longer needed.",
        },
      ],
    },
    {
      id: "user-rights",
      title: "Your Rights & Controls",
      icon: Lock,
      content: [
        {
          subtitle: "Data Access",
          details: "You have the right to access, download, and review all personal data we have collected about you.",
        },
        {
          subtitle: "Data Correction",
          details: "You can update or correct your personal information at any time through your account settings.",
        },
        {
          subtitle: "Data Deletion",
          details:
            "You can request deletion of your account and associated data, which will be processed within 30 days.",
        },
        {
          subtitle: "Data Portability",
          details:
            "You can export your health data in standard formats to transfer to other services or for personal use.",
        },
      ],
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      icon: Globe,
      content: [
        {
          subtitle: "HIPAA Compliance",
          details:
            "Our platform meets HIPAA requirements for healthcare data protection and privacy in the United States.",
        },
        {
          subtitle: "GDPR Compliance",
          details: "We comply with the General Data Protection Regulation for users in the European Union.",
        },
        {
          subtitle: "CCPA Compliance",
          details:
            "California residents have additional rights under the California Consumer Privacy Act, which we fully support.",
        },
        {
          subtitle: "International Standards",
          details: "We adhere to international privacy frameworks and standards to protect users globally.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-6">🔒 Your Privacy Matters</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Privacy{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're committed to protecting your personal health data with the highest standards of privacy and security.
            Learn how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>Last updated: March 15, 2024</span>
            <span>•</span>
            <span>Effective: March 15, 2024</span>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-teal-50 to-coral-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Privacy at a Glance</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
                  <p className="text-sm text-gray-600">
                    Your health data is protected by healthcare-grade security standards.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-coral-100 flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-coral-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">You Control Your Data</h3>
                  <p className="text-sm text-gray-600">
                    Access, modify, or delete your data anytime with full transparency.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">No Data Selling</h3>
                  <p className="text-sm text-gray-600">
                    We never sell your personal health information to third parties.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <span>Contents</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#${section.id}`}
                    className="block px-3 py-2 rounded-lg transition-colors hover:bg-teal-50 text-gray-700 hover:text-teal-700"
                  >
                    <div className="flex items-center space-x-2">
                      <section.icon className="w-4 h-4" />
                      <span className="text-sm">{section.title}</span>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Privacy Policy Content */}
          <div className="lg:col-span-3 space-y-12">
            {sections.map((section, index) => (
              <div key={index} id={section.id}>
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="text-xl">{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.subtitle}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.details}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* Contact Information */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-teal-50 to-coral-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate
                  to contact our Privacy Team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white">Contact Privacy Team</Button>
                  <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                    Download Privacy Policy
                  </Button>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <strong>Privacy Officer:</strong> privacy@healthtracker.com
                    <br />
                    <strong>Mailing Address:</strong> 123 Health Street, Suite 400, San Francisco, CA 94105
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
            <p className="text-xl text-gray-600">Our privacy team is here to help</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
                <p className="text-gray-600 mb-6">Send us your privacy questions and concerns</p>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  Contact Privacy Team
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-coral-100 flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-coral-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Center</h3>
                <p className="text-gray-600 mb-6">Learn more about our privacy practices</p>
                <Button variant="outline" className="border-coral-200 text-coral-700 hover:bg-coral-50">
                  Visit Privacy Center
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
