import { Calendar, MessageCircle, BookOpen, Users, TrendingUp, Phone } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Plan your next stokvel gathering with AI assistance",
      gradient: true,
      action: () => navigate("/schedule-meeting")
    },
    {
      icon: BookOpen,
      title: "Learn & Grow",
      description: "Financial education in your home language",
      gradient: false,
      action: () => console.log("Navigate to Learn")
    },
    {
      icon: Users,
      title: "Community Chat",
      description: "Connect with your stokvel members",
      gradient: false,
      action: () => navigate("/community-chat")
    },
    {
      icon: TrendingUp,
      title: "Credit Score",
      description: "Build your financial profile",
      gradient: false,
      action: () => console.log("Navigate to Credit Score")
    },
    {
      icon: MessageCircle,
      title: "Voice Assistant",
      description: "Ask questions in isiZulu, isiXhosa & more",
      gradient: false,
      action: () => console.log("Activate Voice Assistant")
    },
    {
      icon: Phone,
      title: "USSD Access",
      description: "Use *120*2345# on any phone",
      gradient: false,
      action: () => console.log("Show USSD instructions")
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground font-ubuntu">Quick Actions</h2>
        <p className="text-sm text-muted-foreground">Ubuntu Stokvel Tools</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              onClick={feature.action}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;