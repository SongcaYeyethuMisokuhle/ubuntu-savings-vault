import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  gradient?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, onClick, gradient = false }: FeatureCardProps) => {
  return (
    <Card 
      className={`card-feature ${gradient ? 'bg-gradient-to-br from-accent/10 to-primary/10' : ''} group`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className={`p-4 rounded-3xl ${gradient ? 'bg-community-gradient' : 'bg-primary/10'} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`h-8 w-8 ${gradient ? 'text-primary-foreground' : 'text-primary'}`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1 font-ubuntu">{title}</h3>
          <p className="text-sm text-muted-foreground text-center leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;