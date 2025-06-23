import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Heart, Plus, Filter, Calendar, Clock, Zap, TrendingUp, MapPin, Timer } from "lucide-react"
import Link from "next/link"

export default function ActivityPage() {
  const activities = [
    {
      id: 1,
      type: "Running",
      duration: "45 min",
      calories: 420,
      distance: "5.2 km",
      time: "7:30 AM",
      date: "Today",
      heartRate: "avg 145 bpm",
      pace: "8:40 /km",
      color: "teal",
    },
    {
      id: 2,
      type: "Yoga",
      duration: "30 min",
      calories: 120,
      distance: null,
      time: "6:00 PM",
      date: "Yesterday",
      heartRate: "avg 85 bpm",
      pace: null,
      color: "coral",
    },
    {
      id: 3,
      type: "Cycling",
      duration: "60 min",
      calories: 380,
      distance: "15.8 km",
      time: "8:00 AM",
      date: "2 days ago",
      heartRate: "avg 132 bpm",
      pace: "25.2 km/h",
      color: "indigo",
    },
    {
      id: 4,
      type: "Swimming",
      duration: "40 min",
      calories: 340,
      distance: "1.2 km",
      time: "7:00 PM",
      date: "3 days ago",
      heartRate: "avg 128 bpm",
      pace: "2:10 /100m",
      color: "emerald",
    },
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
              <Link href="/activity" className="text-teal-600 font-medium">
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

            <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Activity
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
              <Activity className="w-8 h-8 text-teal-600" />
              <span>Activity Tracking</span>
            </h1>
            <p className="text-gray-600 mt-1">Monitor your workouts and daily activities</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
              <Calendar className="w-4 h-4 mr-2" />
              This Week
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-100 text-sm font-medium">Total Distance</p>
                  <p className="text-2xl font-bold">22.2 km</p>
                  <p className="text-teal-100 text-sm">This week</p>
                </div>
                <MapPin className="w-8 h-8 text-teal-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-coral-500 to-coral-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-coral-100 text-sm font-medium">Calories Burned</p>
                  <p className="text-2xl font-bold">1,260</p>
                  <p className="text-coral-100 text-sm">This week</p>
                </div>
                <Zap className="w-8 h-8 text-coral-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm font-medium">Active Time</p>
                  <p className="text-2xl font-bold">175 min</p>
                  <p className="text-indigo-100 text-sm">This week</p>
                </div>
                <Timer className="w-8 h-8 text-indigo-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Avg Heart Rate</p>
                  <p className="text-2xl font-bold">128 bpm</p>
                  <p className="text-emerald-100 text-sm">This week</p>
                </div>
                <Heart className="w-8 h-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Activity Log */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Activities</span>
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">4 activities this week</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-${activity.color}-100 flex items-center justify-center`}
                          >
                            <Activity className={`w-6 h-6 text-${activity.color}-600`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{activity.type}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                              <span className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{activity.duration}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Zap className="w-4 h-4" />
                                <span>{activity.calories} cal</span>
                              </span>
                              {activity.distance && (
                                <span className="flex items-center space-x-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{activity.distance}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{activity.date}</p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center space-x-1 text-gray-600">
                            <Heart className="w-4 h-4" />
                            <span>{activity.heartRate}</span>
                          </span>
                          {activity.pace && <span className="text-gray-600">{activity.pace}</span>}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Summary & Goals */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <span>Weekly Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-teal-50 to-coral-50 rounded-xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">5</p>
                    <p className="text-sm text-gray-600">Workouts completed</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <p className="text-lg font-semibold text-teal-700">22.2km</p>
                    <p className="text-xs text-teal-600">Distance</p>
                  </div>
                  <div className="text-center p-3 bg-coral-50 rounded-lg">
                    <p className="text-lg font-semibold text-coral-700">1,260</p>
                    <p className="text-xs text-coral-600">Calories</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">Weekly Goal Progress</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Workouts</span>
                      <span className="text-teal-600 font-medium">5/7</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-teal-500 to-coral-500 h-2 rounded-full"
                        style={{ width: "71%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Activity Types</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="week" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="week">This Week</TabsTrigger>
                    <TabsTrigger value="month">This Month</TabsTrigger>
                  </TabsList>
                  <TabsContent value="week" className="space-y-4 mt-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                          <span className="text-sm">Running</span>
                        </div>
                        <span className="text-sm font-medium">40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-coral-500 rounded-full"></div>
                          <span className="text-sm">Cycling</span>
                        </div>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          <span className="text-sm">Swimming</span>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                          <span className="text-sm">Yoga</span>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="month" className="space-y-4 mt-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                          <span className="text-sm">Running</span>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-coral-500 rounded-full"></div>
                          <span className="text-sm">Cycling</span>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                          <span className="text-sm">Swimming</span>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                          <span className="text-sm">Yoga</span>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
