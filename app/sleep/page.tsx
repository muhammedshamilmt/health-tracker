import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Moon, Plus, Clock, Bed, Sun, TrendingUp, Calendar, Star, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function SleepPage() {
  const sleepData = [
    {
      date: "Today",
      bedtime: "10:30 PM",
      wakeup: "6:45 AM",
      duration: "8h 15m",
      quality: 92,
      deepSleep: "2h 30m",
      remSleep: "1h 45m",
      lightSleep: "4h 00m",
    },
    {
      date: "Yesterday",
      bedtime: "11:15 PM",
      wakeup: "7:00 AM",
      duration: "7h 45m",
      quality: 85,
      deepSleep: "2h 15m",
      remSleep: "1h 30m",
      lightSleep: "4h 00m",
    },
    {
      date: "2 days ago",
      bedtime: "10:45 PM",
      wakeup: "6:30 AM",
      duration: "7h 45m",
      quality: 88,
      deepSleep: "2h 20m",
      remSleep: "1h 35m",
      lightSleep: "3h 50m",
    },
    {
      date: "3 days ago",
      bedtime: "11:00 PM",
      wakeup: "7:15 AM",
      duration: "8h 15m",
      quality: 90,
      deepSleep: "2h 45m",
      remSleep: "1h 50m",
      lightSleep: "3h 40m",
    },
  ]

  const averageQuality = sleepData.reduce((sum, day) => sum + day.quality, 0) / sleepData.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-indigo-800/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">HealthTracker</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/dashboard" className="text-indigo-200 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link href="/activity" className="text-indigo-200 hover:text-white transition-colors">
                Activity
              </Link>
              <Link href="/nutrition" className="text-indigo-200 hover:text-white transition-colors">
                Nutrition
              </Link>
              <Link href="/sleep" className="text-white font-medium">
                Sleep
              </Link>
              <Link href="/goals" className="text-indigo-200 hover:text-white transition-colors">
                Goals
              </Link>
              <Link href="/community" className="text-indigo-200 hover:text-white transition-colors">
                Community
              </Link>
              <Link href="/profile" className="text-indigo-200 hover:text-white transition-colors">
                Profile
              </Link>
            </nav>

            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
              <Plus className="w-4 h-4 mr-2" />
              Log Sleep
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
              <Moon className="w-8 h-8 text-indigo-300" />
              <span>Sleep Monitoring</span>
            </h1>
            <p className="text-indigo-200 mt-1">Track your sleep patterns and improve your rest quality</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Badge className="bg-indigo-800/50 text-indigo-200 hover:bg-indigo-800/50 border-indigo-600">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </Badge>
          </div>
        </div>

        {/* Sleep Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-200 text-sm font-medium">Last Night</p>
                  <p className="text-2xl font-bold">{sleepData[0].duration}</p>
                  <p className="text-indigo-200 text-sm">Sleep Duration</p>
                </div>
                <Bed className="w-8 h-8 text-indigo-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm font-medium">Sleep Quality</p>
                  <p className="text-2xl font-bold">{sleepData[0].quality}%</p>
                  <p className="text-purple-200 text-sm">Excellent</p>
                </div>
                <Star className="w-8 h-8 text-purple-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm font-medium">Bedtime</p>
                  <p className="text-2xl font-bold">{sleepData[0].bedtime}</p>
                  <p className="text-blue-200 text-sm">Last Night</p>
                </div>
                <Moon className="w-8 h-8 text-blue-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-teal-600 to-teal-700 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-200 text-sm font-medium">Wake Up</p>
                  <p className="text-2xl font-bold">{sleepData[0].wakeup}</p>
                  <p className="text-teal-200 text-sm">This Morning</p>
                </div>
                <Sun className="w-8 h-8 text-teal-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sleep Log */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-md border-indigo-800/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Recent Sleep Sessions</span>
                  <Badge className="bg-indigo-800/50 text-indigo-200 hover:bg-indigo-800/50">
                    {Math.round(averageQuality)}% avg quality
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sleepData.map((sleep, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-white/5 border border-indigo-800/30 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-white">{sleep.date}</h3>
                          <div className="flex items-center space-x-4 text-sm text-indigo-200 mt-1">
                            <span className="flex items-center space-x-1">
                              <Moon className="w-4 h-4" />
                              <span>{sleep.bedtime}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Sun className="w-4 h-4" />
                              <span>{sleep.wakeup}</span>
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-white">{sleep.duration}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm text-indigo-200">{sleep.quality}%</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-indigo-800/30 rounded-lg">
                          <p className="text-sm font-semibold text-indigo-200">{sleep.deepSleep}</p>
                          <p className="text-xs text-indigo-300">Deep Sleep</p>
                        </div>
                        <div className="text-center p-3 bg-purple-800/30 rounded-lg">
                          <p className="text-sm font-semibold text-purple-200">{sleep.remSleep}</p>
                          <p className="text-xs text-purple-300">REM Sleep</p>
                        </div>
                        <div className="text-center p-3 bg-blue-800/30 rounded-lg">
                          <p className="text-sm font-semibold text-blue-200">{sleep.lightSleep}</p>
                          <p className="text-xs text-blue-300">Light Sleep</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sleep Insights & Tips */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-indigo-800/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-indigo-300" />
                  <span>Sleep Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-xl">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-white">Excellent Sleep!</p>
                    <p className="text-sm text-indigo-200">Your sleep quality is above average</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-indigo-200">Sleep Consistency</span>
                      <span className="text-sm text-indigo-300 font-semibold">85%</span>
                    </div>
                    <Progress
                      value={85}
                      className="bg-indigo-800/50 [&>div]:bg-gradient-to-r [&>div]:from-indigo-400 [&>div]:to-purple-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-indigo-200">Deep Sleep</span>
                      <span className="text-sm text-purple-300 font-semibold">Good</span>
                    </div>
                    <Progress
                      value={78}
                      className="bg-indigo-800/50 [&>div]:bg-gradient-to-r [&>div]:from-purple-400 [&>div]:to-indigo-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-indigo-200">REM Sleep</span>
                      <span className="text-sm text-blue-300 font-semibold">Optimal</span>
                    </div>
                    <Progress
                      value={92}
                      className="bg-indigo-800/50 [&>div]:bg-gradient-to-r [&>div]:from-blue-400 [&>div]:to-teal-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-indigo-800/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  <span>Sleep Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tonight" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-indigo-800/30">
                    <TabsTrigger
                      value="tonight"
                      className="text-indigo-200 data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                    >
                      Tonight
                    </TabsTrigger>
                    <TabsTrigger
                      value="general"
                      className="text-indigo-200 data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                    >
                      General
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="tonight" className="space-y-3 mt-4">
                    <div className="p-3 bg-indigo-800/30 rounded-lg">
                      <h4 className="font-medium text-white">💤 Wind Down Routine</h4>
                      <p className="text-sm text-indigo-200 mt-1">Start dimming lights 1 hour before bed</p>
                    </div>
                    <div className="p-3 bg-indigo-800/30 rounded-lg">
                      <h4 className="font-medium text-white">📱 Digital Detox</h4>
                      <p className="text-sm text-indigo-200 mt-1">Put devices away 30 minutes before sleep</p>
                    </div>
                    <div className="p-3 bg-indigo-800/30 rounded-lg">
                      <h4 className="font-medium text-white">🌡️ Cool Temperature</h4>
                      <p className="text-sm text-indigo-200 mt-1">Keep bedroom between 60-67°F (15-19°C)</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="general" className="space-y-3 mt-4">
                    <div className="p-3 bg-indigo-800/30 rounded-lg">
                      <h4 className="font-medium text-white">⏰ Consistent Schedule</h4>
                      <p className="text-sm text-indigo-200 mt-1">Go to bed and wake up at the same time daily</p>
                    </div>
                    <div className="p-3 bg-indigo-800/30 rounded-lg">
                      <h4 className="font-medium text-white">☕ Caffeine Timing</h4>
                      <p className="text-sm text-indigo-200 mt-1">Avoid caffeine 6 hours before bedtime</p>
                    </div>
                    <div className="p-3 bg-indigo-800/30 rounded-lg">
                      <h4 className="font-medium text-white">🏃 Exercise Regularly</h4>
                      <p className="text-sm text-indigo-200 mt-1">But not within 3 hours of bedtime</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-indigo-800/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Sleep Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-white">7-9 hours</p>
                  <p className="text-sm text-indigo-200">Recommended for adults</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-indigo-200">This week average</span>
                    <span className="text-white font-medium">8h 0m</span>
                  </div>
                  <Progress
                    value={89}
                    className="bg-indigo-800/50 [&>div]:bg-gradient-to-r [&>div]:from-indigo-400 [&>div]:to-purple-500"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0">
                  <Clock className="w-4 h-4 mr-2" />
                  Set Sleep Reminder
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
