import { Users, DollarSign, Shield, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const CommunityStats = () => {
  const stats = [
    {
      icon: Users,
      label: "Active Members",
      value: "12",
      subtext: "in Khanyisa Stokvel",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      label: "Group Balance",
      value: "R 28,450",
      subtext: "total contributions",
      color: "text-green-600"
    },
    {
      icon: Shield,
      label: "Security Score",
      value: "98%",
      subtext: "fraud protection active",
      color: "text-primary"
    },
    {
      icon: Award,
      label: "Credit Rating",
      value: "Good",
      subtext: "building credit history",
      color: "text-accent"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground font-ubuntu mb-2">Community Overview</h2>
        <p className="text-muted-foreground">Your stokvel's collective strength</p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="card-community p-4">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground font-ubuntu">{stat.value}</div>
                <div className="text-sm font-medium text-foreground/80">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.subtext}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityStats;