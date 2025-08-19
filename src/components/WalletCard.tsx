import { ArrowDownLeft, ArrowUpRight, Eye, EyeOff, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const WalletCard = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const balance = 2450.75;
  const contributions = 1850.00;
  const payouts = 600.75;

  return (
    <Card className="card-community bg-community-gradient text-primary-foreground p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-primary-foreground/90">My Stokvel Balance</h2>
          <div className="flex items-center space-x-2 mt-1">
            <Shield className="h-4 w-4 text-primary-foreground/70" />
            <span className="text-sm text-primary-foreground/70">Secured with dual approval</span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsBalanceVisible(!isBalanceVisible)}
          className="h-10 w-10 rounded-2xl hover:bg-white/10 text-primary-foreground"
        >
          {isBalanceVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </Button>
      </div>

      <div className="mb-6">
        <div className="text-4xl font-bold mb-2 font-ubuntu">
          {isBalanceVisible ? `R ${balance.toFixed(2)}` : "R ••••••"}
        </div>
        <p className="text-primary-foreground/80 text-sm">Available for withdrawal</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/10 rounded-2xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <ArrowDownLeft className="h-4 w-4 text-green-300" />
            <span className="text-sm text-primary-foreground/80">Contributions</span>
          </div>
          <div className="text-xl font-semibold">R {contributions.toFixed(2)}</div>
        </div>
        <div className="bg-white/10 rounded-2xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <ArrowUpRight className="h-4 w-4 text-blue-300" />
            <span className="text-sm text-primary-foreground/80">Payouts</span>
          </div>
          <div className="text-xl font-semibold">R {payouts.toFixed(2)}</div>
        </div>
      </div>

      <div className="flex space-x-3">
        <Button className="btn-secondary-community flex-1 bg-white/20 hover:bg-white/30 text-primary-foreground border-white/30">
          Contribute
        </Button>
        <Button className="btn-secondary-community flex-1 bg-white/20 hover:bg-white/30 text-primary-foreground border-white/30">
          Request Payout
        </Button>
      </div>
    </Card>
  );
};

export default WalletCard;