import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Code, Zap, Shield, Globe, Database, Terminal, BookOpen } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function APIPage() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/users/{id}/activities",
      description: "Retrieve user's activity data with optional date filtering",
      parameters: ["user_id", "start_date", "end_date", "activity_type"],
    },
    {
      method: "POST",
      path: "/api/v1/users/{id}/activities",
      description: "Create a new activity record for the user",
      parameters: ["user_id", "activity_data", "timestamp"],
    },
    {
      method: "GET",
      path: "/api/v1/users/{id}/nutrition",
      description: "Get nutrition data and meal logs for a user",
      parameters: ["user_id", "date_range", "meal_type"],
    },
    {
      method: "GET",
      path: "/api/v1/users/{id}/sleep",
      description: "Retrieve sleep tracking data and analysis",
      parameters: ["user_id", "date_range", "include_stages"],
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Real-time Data",
      description: "Access live health metrics and instant updates via webhooks",
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with full HIPAA compliance",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "99.9% uptime with global CDN and redundant infrastructure",
    },
    {
      icon: Database,
      title: "Rich Data Models",
      description: "Comprehensive health data with detailed metadata and insights",
    },
  ]

  const useCases = [
    {
      title: "Healthcare Providers",
      description: "Integrate patient health data into EMR systems for better care coordination",
      icon: "🏥",
      benefits: ["Patient monitoring", "Care plan optimization", "Outcome tracking"],
    },
    {
      title: "Fitness Apps",
      description: "Enhance your app with comprehensive health tracking capabilities",
      icon: "💪",
      benefits: ["Activity sync", "Progress analytics", "Goal management"],
    },
    {
      title: "Research Institutions",
      description: "Access anonymized health data for population health studies",
      icon: "🔬",
      benefits: ["Large datasets", "Longitudinal studies", "Real-world evidence"],
    },
    {
      title: "Corporate Wellness",
      description: "Build employee wellness programs with detailed health insights",
      icon: "🏢",
      benefits: ["Team challenges", "Wellness metrics", "Engagement tracking"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 mb-6">🔌 Developer Platform</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Build with{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">
              Health Data
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Powerful APIs to integrate comprehensive health tracking into your applications. HIPAA-compliant, scalable,
            and developer-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
            >
              Get API Key
            </Button>
            <Button variant="outline" size="lg" className="border-teal-200 text-teal-700 hover:bg-teal-50">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Enterprise-Grade API</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale, security, and seamless integration
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-xl text-gray-600">RESTful APIs with comprehensive health data access</p>
          </div>

          <Tabs defaultValue="endpoints" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="authentication">Auth</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>

            <TabsContent value="endpoints" className="mt-8">
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <Card key={index} className="bg-white shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Badge
                          className={`${
                            endpoint.method === "GET" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                          } font-mono`}
                        >
                          {endpoint.method}
                        </Badge>
                        <div className="flex-1">
                          <code className="text-lg font-mono text-gray-900 mb-2 block">{endpoint.path}</code>
                          <p className="text-gray-600 mb-3">{endpoint.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {endpoint.parameters.map((param, paramIndex) => (
                              <Badge key={paramIndex} variant="outline" className="text-xs font-mono">
                                {param}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="authentication" className="mt-8">
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-teal-600" />
                    <span>Authentication</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">API Key Authentication</h3>
                    <p className="text-gray-600 mb-4">
                      Include your API key in the Authorization header of every request:
                    </p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      curl -H "Authorization: Bearer YOUR_API_KEY" \<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;https://api.healthtracker.com/v1/users/123/activities
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">OAuth 2.0</h3>
                    <p className="text-gray-600">
                      For user-facing applications, use OAuth 2.0 with PKCE for secure authentication flows.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="examples" className="mt-8">
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-teal-600" />
                    <span>Code Examples</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Get User Activities</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      {`const response = await fetch('https://api.healthtracker.com/v1/users/123/activities', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const activities = await response.json();
console.log(activities);`}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Create Activity</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      {`const newActivity = {
  type: 'running',
  duration: 1800, // 30 minutes in seconds
  calories: 300,
  distance: 5000 // 5km in meters
};

const response = await fetch('https://api.healthtracker.com/v1/users/123/activities', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newActivity)
});`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations are leveraging our API to build innovative health solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Build?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Start integrating HealthTracker into your applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
              <Code className="w-5 h-5 mr-2" />
              Get API Key
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600">
              <BookOpen className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
