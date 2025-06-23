import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Target, Plus, Edit, Trophy, Calendar, TrendingUp, CheckCircle, Clock, Zap } from "lucide-react"
import Link from "next/link"

export default function GoalsPage() {
  const goals = [
    {
      id: 1,
      title: "Lose 10 pounds",
      category: "Weight Loss",
      target: 10,
      current: 6.5,
      unit: "lbs",
      deadline: "March 31, 2024",
      status: "on-track",
      color: "coral",
      icon: Target,
    },
    {
      id: 2,
      title: "Run 5K in under 25 minutes",
      category: "Fitness",
      target: 25,
      current: 28.5,
      unit: "min",
      deadline: "April 15, 2024",
      status: "behind",
      color: "teal",
      icon: Zap,
    },
    {
      id: 3,
      title: "Drink 8 glasses of water daily",
      category: "Hydration",
      target: 30,
      current: 22,
      unit: "days",
      deadline: "February 29, 2024",
      status: "ahead",
      color: "blue",
      icon: CheckCircle,
    },
    {
      id: 4,
      title: "Sleep 8 hours consistently",
      category: "Sleep",
      target: 21,
      current: 18,
      unit: "days",
      deadline: "March 15, 2024",
      status: "on-track",
      color: "indigo",
      icon: Clock,
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "First 5K Completed",
      description: "Completed your first 5K run",
      date: "Jan 15, 2024",
      icon: Trophy,
      color: "yellow",
    },
    {
      id: 2,
      title: "30-Day Streak",
      description: "Logged activities for 30 consecutive days",
      date: "Jan 10, 2024",
      icon: Calendar,
      color: "green",
    },
    {
      id: 3,
      title: "Weight Loss Milestone",
      description: "Lost your first 5 pounds",
      date: "Dec 28, 2023",
      icon: Target,
      color: "purple",
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
              <Link href="/activity" className="text-gray-600 hover:text-teal-600 transition-colors">
                Activity
              </Link>
              <Link href="/nutrition" className="text-gray-600 hover:text-teal-600 transition-colors">
                Nutrition
              </Link>
              <Link href="/sleep" className="text-gray-600 hover:text-teal-600 transition-colors">
                Sleep
              </Link>
              <Link href="/goals" className="text-teal-600 font-medium">
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
              New Goal
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
              <Target className="w-8 h-8 text-teal-600" />
              <span>Goals & Achievements</span>
            </h1>
            <p className="text-gray-600 mt-1">Set targets, track progress, and celebrate your wins</p>
          </div>
        </div>

        {/* Goals Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-100 text-sm font-medium">Active Goals</p>
                  <p className="text-2xl font-bold">{goals.length}</p>
                  <p className="text-teal-100 text-sm">In progress</p>
                </div>
                <Target className="w-8 h-8 text-teal-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Completed</p>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-emerald-100 text-sm">This year</p>
                </div>
                <CheckCircle className="w-8 h-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-coral-500 to-coral-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-coral-100 text-sm font-medium">Success Rate</p>
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-coral-100 text-sm">All time</p>
                </div>
                <TrendingUp className="w-8 h-8 text-coral-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100 text-sm font-medium">Achievements</p>
                  <p className="text-2xl font-bold">{achievements.length}</p>
                  <p className="text-yellow-100 text-sm">Unlocked</p>
                </div>
                <Trophy className="w-8 h-8 text-yellow-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Goals */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Active Goals</span>
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
                    {goals.filter((g) => g.status === "on-track").length} on track
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {goals.map((goal) => (
                    <div key={goal.id} className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-${goal.color}-100 flex items-center justify-center`}>
                            <goal.icon className={`w-6 h-6 text-${goal.color}-600`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                            <p className="text-sm text-gray-500">{goal.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            className={`${
                              goal.status === "on-track"
                                ? "bg-green-100 text-green-700"
                                : goal.status === "ahead"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {goal.status === "on-track"
                              ? "✓ On Track"
                              : goal.status === "ahead"
                                ? "↗ Ahead"
                                : "⚠ Behind"}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">
                            {goal.current} / {goal.target} {goal.unit}
                          </span>
                        </div>
                        <Progress
                          value={(goal.current / goal.target) * 100}
                          className={`bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-${goal.color}-500 [&>div]:to-${goal.color}-600`}
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Deadline: {goal.deadline}</span>
                          <span>{Math.round((goal.current / goal.target) * 100)}% complete</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Quick Actions */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg"
                  >
                    <div
                      className={`w-10 h-10 rounded-full bg-${achievement.color}-100 flex items-center justify-center`}
                    >
                      <achievement.icon className={`w-5 h-5 text-${achievement.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Goal Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="fitness" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="fitness">Fitness</TabsTrigger>
                    <TabsTrigger value="wellness">Wellness</TabsTrigger>
                  </TabsList>
                  <TabsContent value="fitness" className="space-y-3 mt-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-teal-200 text-teal-700 hover:bg-teal-50"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Weight Loss Goal
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-coral-200 text-coral-700 hover:bg-coral-50"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Running Goal
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Strength Goal
                    </Button>
                  </TabsContent>
                  <TabsContent value="wellness" className="space-y-3 mt-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Sleep Goal
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Hydration Goal
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-purple-200 text-purple-700 hover:bg-purple-50"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Mindfulness Goal
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Weekly Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-gradient-to-r from-teal-50 to-coral-50 rounded-xl text-center">
                  <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">10,000 Steps Daily</h3>
                  <p className="text-sm text-gray-600 mb-3">Complete 7 days in a row</p>
                  <Progress value={57} className="mb-2" />
                  <p className="text-xs text-gray-500">4/7 days completed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
