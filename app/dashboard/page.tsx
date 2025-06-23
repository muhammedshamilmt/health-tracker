import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Activity, Heart, Moon, Droplets, Target, Plus, TrendingUp, Calendar, Bell, Settings, User } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-coral-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-teal-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-coral-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">HealthTracker</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/dashboard" className="text-teal-600 font-medium">
                Dashboard
              </Link>
              <Link href="/activity" className="text-gray-600 hover:text-teal-600 transition-colors">
                Activity
              </Link>
              <Link href="/nutrition" className="text-gray-600 hover:text-teal-600 transition-colors">
                Nutrition
              </Link>
              <Link href="/sleep" className="text-gray-600 hover:text-teal-600 transition-colors">
                Sleep
              </Link>
              <Link href="/goals" className="text-gray-600 hover:text-teal-600 transition-colors">
                Goals
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-teal-600 transition-colors">
                Community
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-teal-600 transition-colors">
                Profile
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Good morning, Sarah! 👋</h1>
              <p className="text-gray-600 mt-1">Here's your health summary for today</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
              </Badge>
            </div>
          </div>
        </div>

        {/* Daily Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-0 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-100 text-sm font-medium">Steps Today</p>
                  <p className="text-3xl font-bold">8,432</p>
                  <p className="text-teal-100 text-sm">Goal: 10,000</p>
                </div>
                <div className="bg-white/20 rounded-full p-3">
                  <Activity className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={84} className="bg-teal-400 [&>div]:bg-white" />
                <p className="text-teal-100 text-sm mt-1">84% of daily goal</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-coral-500 to-coral-600 text-white border-0 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-coral-100 text-sm font-medium">Calories Burned</p>
                  <p className="text-3xl font-bold">1,247</p>
                  <p className="text-coral-100 text-sm">Goal: 1,500</p>
                </div>
                <div className="bg-white/20 rounded-full p-3">
                  <Heart className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={83} className="bg-coral-400 [&>div]:bg-white" />
                <p className="text-coral-100 text-sm mt-1">83% of daily goal</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm font-medium">Sleep Last Night</p>
                  <p className="text-3xl font-bold">7h 23m</p>
                  <p className="text-indigo-100 text-sm">Quality: Good</p>
                </div>
                <div className="bg-white/20 rounded-full p-3">
                  <Moon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={92} className="bg-indigo-400 [&>div]:bg-white" />
                <p className="text-indigo-100 text-sm mt-1">92% sleep efficiency</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Water Intake</p>
                  <p className="text-3xl font-bold">6.2L</p>
                  <p className="text-emerald-100 text-sm">Goal: 8L</p>
                </div>
                <div className="bg-white/20 rounded-full p-3">
                  <Droplets className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={78} className="bg-emerald-400 [&>div]:bg-white" />
                <p className="text-emerald-100 text-sm mt-1">78% of daily goal</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-teal-600" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full justify-start bg-teal-50 text-teal-700 hover:bg-teal-100 border-0"
                  variant="outline"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Log Activity
                </Button>
                <Button
                  className="w-full justify-start bg-coral-50 text-coral-700 hover:bg-coral-100 border-0"
                  variant="outline"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Meal
                </Button>
                <Button
                  className="w-full justify-start bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-0"
                  variant="outline"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Record Sleep
                </Button>
                <Button
                  className="w-full justify-start bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-0"
                  variant="outline"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Log Water
                </Button>
              </CardContent>
            </Card>

            {/* Health Tip */}
            <Card className="shadow-lg border-0 mt-6">
              <CardHeader>
                <CardTitle className="text-lg">💡 Today's Health Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  "Take a 5-minute walk after each meal to help with digestion and blood sugar regulation. Small
                  movements throughout the day add up!"
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Progress */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-teal-600" />
                    <span>Weekly Progress</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                    View Details
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Daily Steps Average</span>
                      <span className="text-sm text-teal-600 font-semibold">8,234 steps</span>
                    </div>
                    <Progress
                      value={82}
                      className="bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-teal-500 [&>div]:to-teal-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Workout Sessions</span>
                      <span className="text-sm text-coral-600 font-semibold">5 of 7 days</span>
                    </div>
                    <Progress
                      value={71}
                      className="bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-coral-500 [&>div]:to-coral-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Sleep Quality</span>
                      <span className="text-sm text-indigo-600 font-semibold">7.2 hrs average</span>
                    </div>
                    <Progress
                      value={90}
                      className="bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-indigo-500 [&>div]:to-indigo-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Hydration Goal</span>
                      <span className="text-sm text-emerald-600 font-semibold">6.8L average</span>
                    </div>
                    <Progress
                      value={85}
                      className="bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-emerald-600"
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-coral-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-coral-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Great progress this week!</p>
                      <p className="text-sm text-gray-600">You're 15% ahead of last week's performance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
