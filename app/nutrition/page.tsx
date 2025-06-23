import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Plus, Search, Camera, Apple, Coffee, Utensils, TrendingUp, Target, Clock } from "lucide-react"
import Link from "next/link"

export default function NutritionPage() {
  const meals = [
    {
      id: 1,
      type: "Breakfast",
      time: "8:30 AM",
      items: ["Oatmeal with berries", "Greek yogurt", "Green tea"],
      calories: 420,
      protein: 18,
      carbs: 65,
      fat: 12,
      color: "emerald",
    },
    {
      id: 2,
      type: "Lunch",
      time: "1:15 PM",
      items: ["Grilled chicken salad", "Quinoa", "Avocado"],
      calories: 580,
      protein: 35,
      carbs: 45,
      fat: 22,
      color: "teal",
    },
    {
      id: 3,
      type: "Snack",
      time: "4:00 PM",
      items: ["Apple", "Almonds"],
      calories: 180,
      protein: 6,
      carbs: 20,
      fat: 12,
      color: "coral",
    },
    {
      id: 4,
      type: "Dinner",
      time: "7:30 PM",
      items: ["Salmon", "Sweet potato", "Broccoli"],
      calories: 650,
      protein: 42,
      carbs: 55,
      fat: 28,
      color: "indigo",
    },
  ]

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0)
  const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0)
  const totalCarbs = meals.reduce((sum, meal) => sum + meal.carbs, 0)
  const totalFat = meals.reduce((sum, meal) => sum + meal.fat, 0)

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
              <Link href="/nutrition" className="text-teal-600 font-medium">
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

            <div className="flex items-center space-x-2">
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                <Camera className="w-4 h-4 mr-2" />
                Scan Food
              </Button>
              <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Meal
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
              <Apple className="w-8 h-8 text-teal-600" />
              <span>Nutrition Tracking</span>
            </h1>
            <p className="text-gray-600 mt-1">Monitor your daily nutrition and reach your goals</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
              <Clock className="w-4 h-4 mr-1" />
              {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </Badge>
          </div>
        </div>

        {/* Daily Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-100 text-sm font-medium">Calories</p>
                  <p className="text-2xl font-bold">{totalCalories}</p>
                  <p className="text-teal-100 text-sm">Goal: 2,000</p>
                </div>
                <Target className="w-8 h-8 text-teal-200" />
              </div>
              <div className="mt-4">
                <Progress value={(totalCalories / 2000) * 100} className="bg-teal-400 [&>div]:bg-white" />
                <p className="text-teal-100 text-sm mt-1">{Math.round((totalCalories / 2000) * 100)}% of daily goal</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-coral-500 to-coral-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-coral-100 text-sm font-medium">Protein</p>
                  <p className="text-2xl font-bold">{totalProtein}g</p>
                  <p className="text-coral-100 text-sm">Goal: 120g</p>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">P</span>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={(totalProtein / 120) * 100} className="bg-coral-400 [&>div]:bg-white" />
                <p className="text-coral-100 text-sm mt-1">{Math.round((totalProtein / 120) * 100)}% of daily goal</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm font-medium">Carbs</p>
                  <p className="text-2xl font-bold">{totalCarbs}g</p>
                  <p className="text-indigo-100 text-sm">Goal: 250g</p>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">C</span>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={(totalCarbs / 250) * 100} className="bg-indigo-400 [&>div]:bg-white" />
                <p className="text-indigo-100 text-sm mt-1">{Math.round((totalCarbs / 250) * 100)}% of daily goal</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Fat</p>
                  <p className="text-2xl font-bold">{totalFat}g</p>
                  <p className="text-emerald-100 text-sm">Goal: 65g</p>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">F</span>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={(totalFat / 65) * 100} className="bg-emerald-400 [&>div]:bg-white" />
                <p className="text-emerald-100 text-sm mt-1">{Math.round((totalFat / 65) * 100)}% of daily goal</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Meal Log */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Today's Meals</span>
                  <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                    <Search className="w-4 h-4 mr-2" />
                    Search Foods
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {meals.map((meal) => (
                    <div key={meal.id} className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-xl bg-${meal.color}-100 flex items-center justify-center`}>
                            {meal.type === "Breakfast" && <Coffee className={`w-6 h-6 text-${meal.color}-600`} />}
                            {meal.type === "Lunch" && <Utensils className={`w-6 h-6 text-${meal.color}-600`} />}
                            {meal.type === "Snack" && <Apple className={`w-6 h-6 text-${meal.color}-600`} />}
                            {meal.type === "Dinner" && <Utensils className={`w-6 h-6 text-${meal.color}-600`} />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{meal.type}</h3>
                            <p className="text-sm text-gray-500">{meal.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">{meal.calories} cal</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 mt-1"
                          >
                            Edit
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {meal.items.map((item, index) => (
                          <p key={index} className="text-sm text-gray-600">
                            • {item}
                          </p>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-2 bg-coral-50 rounded-lg">
                          <p className="text-sm font-semibold text-coral-700">{meal.protein}g</p>
                          <p className="text-xs text-coral-600">Protein</p>
                        </div>
                        <div className="p-2 bg-indigo-50 rounded-lg">
                          <p className="text-sm font-semibold text-indigo-700">{meal.carbs}g</p>
                          <p className="text-xs text-indigo-600">Carbs</p>
                        </div>
                        <div className="p-2 bg-emerald-50 rounded-lg">
                          <p className="text-sm font-semibold text-emerald-700">{meal.fat}g</p>
                          <p className="text-xs text-emerald-600">Fat</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nutrition Insights & Water Tracking */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <span>Nutrition Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-teal-50 to-coral-50 rounded-xl">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">Great Balance!</p>
                    <p className="text-sm text-gray-600">Your macros are well distributed today</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Protein</span>
                      <span className="text-sm text-coral-600 font-semibold">
                        {Math.round((totalProtein / (totalProtein + totalCarbs + totalFat)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-coral-500 h-2 rounded-full"
                        style={{
                          width: `${Math.round((totalProtein / (totalProtein + totalCarbs + totalFat)) * 100)}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Carbs</span>
                      <span className="text-sm text-indigo-600 font-semibold">
                        {Math.round((totalCarbs / (totalProtein + totalCarbs + totalFat)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${Math.round((totalCarbs / (totalProtein + totalCarbs + totalFat)) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Fat</span>
                      <span className="text-sm text-emerald-600 font-semibold">
                        {Math.round((totalFat / (totalProtein + totalCarbs + totalFat)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${Math.round((totalFat / (totalProtein + totalCarbs + totalFat)) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Water Intake</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-blue-600">6.2L</p>
                  <p className="text-sm text-gray-600">of 8L daily goal</p>
                </div>

                <Progress
                  value={78}
                  className="mb-4 bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-400 [&>div]:to-blue-600"
                />

                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-8 rounded-lg ${i < 6 ? "bg-blue-500" : "bg-gray-200"} flex items-center justify-center`}
                    >
                      {i < 6 && <span className="text-white text-xs">💧</span>}
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Water
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Meal Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="dinner" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="dinner">Dinner</TabsTrigger>
                    <TabsTrigger value="snack">Snack</TabsTrigger>
                  </TabsList>
                  <TabsContent value="dinner" className="space-y-3 mt-4">
                    <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h4 className="font-medium text-gray-900">Grilled Chicken Bowl</h4>
                      <p className="text-sm text-gray-600">520 cal • High protein</p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h4 className="font-medium text-gray-900">Vegetarian Stir Fry</h4>
                      <p className="text-sm text-gray-600">380 cal • High fiber</p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h4 className="font-medium text-gray-900">Salmon & Quinoa</h4>
                      <p className="text-sm text-gray-600">450 cal • Omega-3 rich</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="snack" className="space-y-3 mt-4">
                    <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h4 className="font-medium text-gray-900">Greek Yogurt & Berries</h4>
                      <p className="text-sm text-gray-600">150 cal • High protein</p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h4 className="font-medium text-gray-900">Mixed Nuts</h4>
                      <p className="text-sm text-gray-600">200 cal • Healthy fats</p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <h4 className="font-medium text-gray-900">Apple & Peanut Butter</h4>
                      <p className="text-sm text-gray-600">180 cal • Fiber rich</p>
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
