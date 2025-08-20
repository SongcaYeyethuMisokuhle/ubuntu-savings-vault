import { BookOpen, Video, Users, Award, Clock, Star, Play, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import AccessibilityBar from "@/components/AccessibilityBar";

const LearnAndGrow = () => {
  const navigate = useNavigate();
  
  const featuredCourses = [
    {
      id: 1,
      title: "Ubuntu Stokvel Fundamentals",
      description: "Learn the basics of community saving and the Ubuntu philosophy",
      duration: "45 min",
      level: "Beginner",
      language: "isiZulu, English",
      progress: 75,
      type: "video",
      icon: Users
    },
    {
      id: 2,
      title: "Building Credit Through Community",
      description: "How stokvel participation improves your financial profile",
      duration: "30 min",
      level: "Intermediate",
      language: "isiXhosa, English",
      progress: 0,
      type: "interactive",
      icon: Award
    },
    {
      id: 3,
      title: "Smart Budgeting for Ubuntu Living",
      description: "Balance personal goals with community responsibilities",
      duration: "60 min",
      level: "Beginner",
      language: "Sesotho, English",
      progress: 100,
      type: "course",
      icon: BookOpen
    }
  ];

  const quickLessons = [
    {
      title: "Daily Financial Habits",
      duration: "5 min",
      language: "isiZulu"
    },
    {
      title: "Emergency Fund Basics",
      duration: "8 min",
      language: "isiXhosa"
    },
    {
      title: "Investment 101",
      duration: "12 min",
      language: "Sesotho"
    },
    {
      title: "Debt Management",
      duration: "10 min",
      language: "English"
    }
  ];

  const achievements = [
    { name: "Ubuntu Beginner", icon: Star, earned: true },
    { name: "Community Saver", icon: Users, earned: true },
    { name: "Credit Builder", icon: Award, earned: false },
    { name: "Financial Guru", icon: BookOpen, earned: false }
  ];

  return (
    <div className="min-h-screen bg-earth-gradient">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <AccessibilityBar />
        
        {/* Header Section */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4 hover:bg-primary/10"
          >
            ← Back to Dashboard
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-3 font-ubuntu">Learn & Grow Together</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ubuntu-centered financial education in your home language
            </p>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="mb-12">
          <Card className="card-community p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">12</div>
                <p className="text-sm text-muted-foreground">Courses Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">180</div>
                <p className="text-sm text-muted-foreground">Learning Minutes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
                <p className="text-sm text-muted-foreground">Weekly Goal</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
                <p className="text-sm text-muted-foreground">Certificates Earned</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Featured Courses */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground font-ubuntu">Featured Learning Paths</h2>
            <Button variant="outline" className="hover:bg-primary/10">
              View All Courses
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="card-feature group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-2xl bg-community-gradient">
                      <course.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {course.type}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 font-ubuntu">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      Available in: {course.language}
                    </div>
                    
                    {course.progress > 0 && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      className="w-full mt-4"
                      variant={course.progress > 0 ? "outline" : "default"}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Lessons */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 font-ubuntu">Quick Daily Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLessons.map((lesson, index) => (
              <Card key={index} className="card-community p-4 hover:bg-primary/5 cursor-pointer transition-all">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Play className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground text-sm">{lesson.title}</h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                      <span>{lesson.duration}</span>
                      <span>{lesson.language}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 font-ubuntu">Your Ubuntu Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`card-community p-6 text-center ${achievement.earned ? 'bg-primary/5' : 'opacity-60'}`}>
                <div className={`p-4 rounded-3xl mx-auto w-fit mb-3 ${achievement.earned ? 'bg-community-gradient' : 'bg-muted'}`}>
                  <achievement.icon className={`h-8 w-8 ${achievement.earned ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{achievement.name}</h3>
                {achievement.earned && (
                  <Badge variant="secondary" className="mt-2 text-xs">Earned</Badge>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Download Resources */}
        <div className="mb-12">
          <Card className="card-community p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-ubuntu">Ubuntu Financial Guide</h3>
                <p className="text-muted-foreground">
                  Download our comprehensive guide to community-centered financial wellness
                </p>
              </div>
              <Button variant="outline" className="hover:bg-primary/10">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </Card>
        </div>

        {/* Ubuntu Philosophy */}
        <div className="text-center">
          <Card className="card-community p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-3 font-ubuntu">Learning Through Ubuntu</h3>
            <p className="text-muted-foreground italic">
              "Knowledge shared is knowledge multiplied. When one learns, we all grow stronger."
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Your financial education strengthens our entire community's prosperity.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default LearnAndGrow;