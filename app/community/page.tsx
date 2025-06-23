import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, MessageCircle, Share2, Trophy, TrendingUp, Plus, Search, Filter, ThumbsUp } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        level: "Fitness Enthusiast",
      },
      content:
        "Just completed my first 10K run! 🏃‍♀️ The training was tough but so worth it. Thanks to everyone who supported me along the way!",
      image: "/placeholder.svg?height=200&width=400",
      likes: 24,
      comments: 8,
      time: "2 hours ago",
      achievement: "First 10K",
    },
    {
      id: 2,
      user: {
        name: "Mike Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        level: "Wellness Warrior",
      },
      content:
        "30 days of consistent 8-hour sleep! 😴 My energy levels have never been better. Here are my top 3 sleep tips...",
      likes: 18,
      comments: 12,
      time: "4 hours ago",
      achievement: "Sleep Master",
    },
    {
      id: 3,
      user: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        level: "Marathon Runner",
      },
      content:
        "Lost 15 pounds in 3 months with a balanced approach! 💪 Sharing my meal prep routine that made all the difference.",
      image: "/placeholder.svg?height=200&width=400",
      likes: 42,
      comments: 15,
      time: "6 hours ago",
      achievement: "Weight Loss Champion",
    },
  ]

  const challenges = [
    {
      id: 1,
      title: "February Step Challenge",
      description: "Walk 300,000 steps this month",
      participants: 1247,
      progress: 68,
      prize: "Fitness Tracker",
      endDate: "Feb 29",
    },
    {
      id: 2,
      title: "Hydration Heroes",
      description: "Drink 8 glasses of water daily for 21 days",
      participants: 892,
      progress: 45,
      prize: "Smart Water Bottle",
      endDate: "Mar 15",
    },
    {
      id: 3,
      title: "Mindful March",
      description: "Meditate for 10 minutes daily",
      participants: 634,
      progress: 12,
      prize: "Meditation App Premium",
      endDate: "Mar 31",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Alex Thompson", points: 2847, avatar: "/placeholder.svg?height=32&width=32" },
    { rank: 2, name: "Maria Garcia", points: 2634, avatar: "/placeholder.svg?height=32&width=32" },
    { rank: 3, name: "David Kim", points: 2521, avatar: "/placeholder.svg?height=32&width=32" },
    { rank: 4, name: "Lisa Wang", points: 2398, avatar: "/placeholder.svg?height=32&width=32" },
    { rank: 5, name: "You", points: 2156, avatar: "/placeholder.svg?height=32&width=32", isUser: true },
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
              <Link href="/community" className="text-teal-600 font-medium">
                Community
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-teal-600 transition-colors">
                Profile
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Share
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
              <Users className="w-8 h-8 text-teal-600" />
              <span>Community</span>
            </h1>
            <p className="text-gray-600 mt-1">Connect, share, and get motivated with fellow health enthusiasts</p>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-100 text-sm font-medium">Active Members</p>
                  <p className="text-2xl font-bold">12,847</p>
                  <p className="text-teal-100 text-sm">+234 this week</p>
                </div>
                <Users className="w-8 h-8 text-teal-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-coral-500 to-coral-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-coral-100 text-sm font-medium">Posts Today</p>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-coral-100 text-sm">+12% from yesterday</p>
                </div>
                <MessageCircle className="w-8 h-8 text-coral-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm font-medium">Active Challenges</p>
                  <p className="text-2xl font-bold">{challenges.length}</p>
                  <p className="text-indigo-100 text-sm">Join now!</p>
                </div>
                <Trophy className="w-8 h-8 text-indigo-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Your Rank</p>
                  <p className="text-2xl font-bold">#5</p>
                  <p className="text-emerald-100 text-sm">This month</p>
                </div>
                <TrendingUp className="w-8 h-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Community Feed */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Community Feed</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {posts.map((post) => (
                    <div key={post.id} className="p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                          <AvatarFallback>
                            {post.user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
                            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 text-xs">
                              {post.user.level}
                            </Badge>
                            {post.achievement && (
                              <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 text-xs">
                                🏆 {post.achievement}
                              </Badge>
                            )}
                          </div>

                          <p className="text-gray-700 mb-3">{post.content}</p>

                          {post.image && (
                            <div className="mb-3">
                              <img
                                src={post.image || "/placeholder.svg"}
                                alt="Post content"
                                className="w-full h-48 object-cover rounded-lg"
                              />
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-teal-600">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                {post.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-teal-600">
                                <MessageCircle className="w-4 h-4 mr-1" />
                                {post.comments}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-teal-600">
                                <Share2 className="w-4 h-4 mr-1" />
                                Share
                              </Button>
                            </div>
                            <span className="text-sm text-gray-500">{post.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Challenges */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  <span>Active Challenges</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="p-4 bg-gradient-to-r from-teal-50 to-coral-50 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{challenge.title}</h4>
                      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 text-xs">
                        {challenge.endDate}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{challenge.participants} participants</span>
                        <span className="font-medium">{challenge.progress}% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-coral-500 h-2 rounded-full"
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500">Prize: {challenge.prize}</p>
                    </div>
                    <Button className="w-full mt-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
                      Join Challenge
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <span>Monthly Leaderboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="points" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="points">Points</TabsTrigger>
                    <TabsTrigger value="steps">Steps</TabsTrigger>
                  </TabsList>
                  <TabsContent value="points" className="space-y-3 mt-4">
                    {leaderboard.map((user) => (
                      <div
                        key={user.rank}
                        className={`flex items-center space-x-3 p-3 rounded-lg ${
                          user.isUser ? "bg-teal-50 border border-teal-200" : "bg-gray-50"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            user.rank === 1
                              ? "bg-yellow-100 text-yellow-700"
                              : user.rank === 2
                                ? "bg-gray-100 text-gray-700"
                                : user.rank === 3
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {user.rank}
                        </div>
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback className="text-xs">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${user.isUser ? "text-teal-700" : "text-gray-900"}`}>
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500">{user.points.toLocaleString()} points</p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="steps" className="space-y-3 mt-4">
                    <div className="text-center py-8 text-gray-500">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Steps leaderboard coming soon!</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Community Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full justify-start bg-teal-50 text-teal-700 hover:bg-teal-100 border-0"
                  variant="outline"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Challenge
                </Button>
                <Button
                  className="w-full justify-start bg-coral-50 text-coral-700 hover:bg-coral-100 border-0"
                  variant="outline"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Find Friends
                </Button>
                <Button
                  className="w-full justify-start bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-0"
                  variant="outline"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Groups
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
