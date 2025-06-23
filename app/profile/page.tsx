import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Heart,
  User,
  Settings,
  Edit,
  Trophy,
  Calendar,
  Activity,
  Target,
  Bell,
  Shield,
  Smartphone,
  Moon,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const achievements = [
    { id: 1, title: "First 5K", description: "Completed your first 5K run", date: "Jan 15, 2024", icon: "🏃‍♀️" },
    {
      id: 2,
      title: "30-Day Streak",
      description: "Logged activities for 30 consecutive days",
      date: "Jan 10, 2024",
      icon: "🔥",
    },
    { id: 3, title: "Weight Loss Milestone", description: "Lost your first 5 pounds", date: "Dec 28, 2023", icon: "⚖️" },
    { id: 4, title: "Early Bird", description: "Completed 10 morning workouts", date: "Dec 15, 2023", icon: "🌅" },
    {
      id: 5,
      title: "Hydration Hero",
      description: "Met water intake goal for 14 days",
      date: "Dec 1, 2023",
      icon: "💧",
    },
    {
      id: 6,
      title: "Sleep Champion",
      description: "Achieved 8+ hours sleep for 7 nights",
      date: "Nov 20, 2023",
      icon: "😴",
    },
  ]

  const stats = [
    { label: "Total Workouts", value: "127", change: "+12 this month" },
    { label: "Calories Burned", value: "24,580", change: "+2,340 this month" },
    { label: "Distance Covered", value: "342 km", change: "+45 km this month" },
    { label: "Active Days", value: "89", change: "+8 this month" },
  ]

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
              <Link href="/dashboard" className="text-gray-600 hover:text-teal-600 transition-colors">
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
              <Link href="/profile" className="text-teal-600 font-medium">
                Profile
              </Link>
            </nav>

            <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Sarah Johnson" />
                    <AvatarFallback className="text-2xl">SJ</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Sarah Johnson</h1>
                      <p className="text-gray-600 mt-1">Fitness Enthusiast • Level 5</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-4 md:mt-0">
                      <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
                        <Trophy className="w-4 h-4 mr-1" />6 Achievements
                      </Badge>
                      <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-100">
                        <Calendar className="w-4 h-4 mr-1" />
                        Member since Nov 2023
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">
                    "On a journey to become the healthiest version of myself! 💪 Love running, yoga, and trying new
                    healthy recipes. Always up for a challenge and supporting others in their fitness goals!"
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-gradient-to-r from-teal-50 to-coral-50 rounded-lg">
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="text-xs text-teal-600 mt-1">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="achievements" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="achievements" className="space-y-6 mt-6">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                      <span>Achievements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                              <p className="text-xs text-gray-500 mt-2">{achievement.date}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6 mt-6">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="w-5 h-5 text-teal-600" />
                      <span>Recent Activity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { activity: "Morning Run", duration: "45 min", calories: "420 cal", time: "Today, 7:30 AM" },
                        {
                          activity: "Yoga Session",
                          duration: "30 min",
                          calories: "120 cal",
                          time: "Yesterday, 6:00 PM",
                        },
                        { activity: "Cycling", duration: "60 min", calories: "380 cal", time: "2 days ago, 8:00 AM" },
                        { activity: "Swimming", duration: "40 min", calories: "340 cal", time: "3 days ago, 7:00 PM" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{item.activity}</h4>
                            <p className="text-sm text-gray-600">{item.time}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{item.duration}</p>
                            <p className="text-sm text-gray-600">{item.calories}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6 mt-6">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="w-5 h-5 text-gray-600" />
                      <span>Account Settings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Bell className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="font-medium text-gray-900">Push Notifications</p>
                            <p className="text-sm text-gray-600">Receive workout reminders and achievements</p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="font-medium text-gray-900">Sync with Wearables</p>
                            <p className="text-sm text-gray-600">Automatically sync data from fitness trackers</p>
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Moon className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="font-medium text-gray-900">Dark Mode</p>
                            <p className="text-sm text-gray-600">Switch to dark theme</p>
                          </div>
                        </div>
                        <Switch />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="font-medium text-gray-900">Privacy Mode</p>
                            <p className="text-sm text-gray-600">Hide your activity from other users</p>
                          </div>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <User className="w-4 h-4 mr-2" />
                          Edit Personal Information
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Target className="w-4 h-4 mr-2" />
                          Update Fitness Goals
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <Shield className="w-4 h-4 mr-2" />
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-teal-50 to-coral-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">Level 5</div>
                  <div className="text-sm text-gray-600">Fitness Enthusiast</div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-coral-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">750/1000 XP to Level 6</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-lg font-semibold text-teal-700">89</div>
                    <div className="text-xs text-teal-600">Active Days</div>
                  </div>
                  <div className="text-center p-3 bg-coral-50 rounded-lg">
                    <div className="text-lg font-semibold text-coral-700">127</div>
                    <div className="text-xs text-coral-600">Workouts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Current Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl mb-2">🔥</div>
                  <div className="text-2xl font-bold text-gray-900">12 Days</div>
                  <div className="text-sm text-gray-600">Keep it up!</div>
                  <div className="mt-4 grid grid-cols-7 gap-1">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className={`h-6 rounded ${i < 5 ? "bg-teal-500" : "bg-gray-200"}`}></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">This week's activity</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Friends Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    name: "Mike Chen",
                    activity: "Completed 5K run",
                    time: "2h ago",
                    avatar: "/placeholder.svg?height=32&width=32",
                  },
                  {
                    name: "Emily Rodriguez",
                    activity: "Hit daily step goal",
                    time: "4h ago",
                    avatar: "/placeholder.svg?height=32&width=32",
                  },
                  {
                    name: "Alex Thompson",
                    activity: "New personal best!",
                    time: "6h ago",
                    avatar: "/placeholder.svg?height=32&width=32",
                  },
                ].map((friend, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
                      <AvatarFallback className="text-xs">
                        {friend.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{friend.name}</p>
                      <p className="text-xs text-gray-600">{friend.activity}</p>
                    </div>
                    <span className="text-xs text-gray-500">{friend.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
