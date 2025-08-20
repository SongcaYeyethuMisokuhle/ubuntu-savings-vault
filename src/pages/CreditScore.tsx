import { ArrowUp, TrendingUp, Shield, Star, CheckCircle, AlertCircle, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import AccessibilityBar from "@/components/AccessibilityBar";

const CreditScore = () => {
  const navigate = useNavigate();
  const creditScore = 682;
  const scoreImprovement = 47;
  
  const creditFactors = [
    {
      icon: CheckCircle,
      factor: "Payment History",
      status: "Excellent",
      impact: "High",
      score: 95,
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      factor: "Stokvel Participation",
      status: "Building",
      impact: "Medium",
      score: 78,
      color: "text-blue-600"
    },
    {
      icon: Shield,
      factor: "Account Age",
      status: "Good",
      impact: "Medium",
      score: 85,
      color: "text-primary"
    },
    {
      icon: AlertCircle,
      factor: "Credit Utilization",
      status: "Needs Work",
      impact: "High",
      score: 45,
      color: "text-orange-600"
    }
  ];

  const tips = [
    {
      icon: Target,
      title: "Continue Stokvel Contributions",
      description: "Regular stokvel payments show financial discipline and build positive credit history."
    },
    {
      icon: TrendingUp,
      title: "Keep Growing Your Ubuntu Score",
      description: "Community participation and helping members builds trust and improves your profile."
    },
    {
      icon: Shield,
      title: "Maintain Low Balances",
      description: "Keep your credit card balances below 30% of your limit to improve your score."
    }
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
            <h1 className="text-4xl font-bold text-primary mb-3 font-ubuntu">Your Credit Journey</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building financial strength through Ubuntu community values
            </p>
          </div>
        </div>

        {/* Credit Score Overview */}
        <div className="mb-12">
          <Card className="card-community p-8 text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2 font-ubuntu">Your Credit Score</h2>
              <div className="text-6xl font-bold text-primary mb-2">{creditScore}</div>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <ArrowUp className="h-5 w-5" />
                <span className="text-lg font-semibold">+{scoreImprovement} points this year</span>
              </div>
              <p className="text-muted-foreground mt-2">Good Credit Range: 630-689</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-primary/10 rounded-2xl p-6">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Ubuntu Rating</h3>
                <div className="text-2xl font-bold text-primary">Excellent</div>
                <p className="text-sm text-muted-foreground mt-1">Community trust score</p>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Growth Trend</h3>
                <div className="text-2xl font-bold text-accent">+12%</div>
                <p className="text-sm text-muted-foreground mt-1">Last 6 months</p>
              </div>
              <div className="bg-green-100 rounded-2xl p-6">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Credit Health</h3>
                <div className="text-2xl font-bold text-green-600">Good</div>
                <p className="text-sm text-muted-foreground mt-1">Stable and improving</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Credit Factors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 font-ubuntu">What Affects Your Score</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {creditFactors.map((factor, index) => (
              <Card key={index} className="card-community p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-primary/10">
                    <factor.icon className={`h-6 w-6 ${factor.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{factor.factor}</h3>
                      <span className={`text-sm font-medium ${factor.color}`}>{factor.status}</span>
                    </div>
                    <Progress value={factor.score} className="mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{factor.score}% of ideal</span>
                      <span>{factor.impact} impact</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Improvement Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 font-ubuntu">Ubuntu Path to Better Credit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="card-feature">
                <div className="text-center space-y-4">
                  <div className="p-4 rounded-3xl bg-community-gradient mx-auto w-fit">
                    <tip.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 font-ubuntu">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Ubuntu Philosophy */}
        <div className="text-center">
          <Card className="card-community p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-3 font-ubuntu">Ubuntu Credit Philosophy</h3>
            <p className="text-muted-foreground italic">
              "Your financial growth strengthens our community. Our community support strengthens your future."
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Through mutual support and shared responsibility, we all prosper together.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CreditScore;