import { Bell, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border/50 px-4 py-3 shadow-card">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-community-gradient rounded-2xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">AV</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground font-ubuntu">AzaniaVault</h1>
            <p className="text-sm text-muted-foreground">Ubuntu Stokvel</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-2xl hover:bg-primary/10 focus-visible-community"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-2xl hover:bg-primary/10 focus-visible-community"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-2xl hover:bg-primary/10 focus-visible-community md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;