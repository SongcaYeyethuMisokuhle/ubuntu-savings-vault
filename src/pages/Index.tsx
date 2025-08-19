import Header from "@/components/Header";
import WalletCard from "@/components/WalletCard";
import QuickActions from "@/components/QuickActions";
import CommunityStats from "@/components/CommunityStats";
import AccessibilityBar from "@/components/AccessibilityBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-earth-gradient">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Accessibility Bar */}
        <div>
          <AccessibilityBar />
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <div className="text-center mb-2">
            <h1 className="text-community-hero mb-3 font-ubuntu">Sawubona, Nomsa! 👋</h1>
            <p className="text-accessible text-muted-foreground max-w-2xl mx-auto">
              Welcome to your Ubuntu Stokvel. Together we save, together we grow, together we prosper.
            </p>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="mb-12">
          <WalletCard />
        </div>

        {/* Community Stats */}
        <div className="mb-12">
          <CommunityStats />
        </div>

        {/* Quick Actions */}
        <div>
          <QuickActions />
        </div>

        {/* Ubuntu Message */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-3 font-ubuntu">Ubuntu Philosophy</h3>
            <p className="text-muted-foreground italic">
              "I am because we are. We are because I am."
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Your success is our success. Our prosperity is your prosperity.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
