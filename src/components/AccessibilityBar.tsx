import { Volume2, Languages, Phone, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AccessibilityBar = () => {
  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "zu", name: "Zulu", native: "isiZulu" },
    { code: "xh", name: "Xhosa", native: "isiXhosa" },
    { code: "st", name: "Sotho", native: "Sesotho" },
    { code: "af", name: "Afrikaans", native: "Afrikaans" }
  ];

  return (
    <Card className="card-community p-4 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <h3 className="font-semibold text-foreground font-ubuntu">Accessibility</h3>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="h-10 px-4 rounded-2xl border-primary/30 hover:bg-primary/10 focus-visible-community"
            >
              <Volume2 className="h-4 w-4 mr-2" />
              Voice Help
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-10 px-4 rounded-2xl border-primary/30 hover:bg-primary/10 focus-visible-community"
            >
              <Type className="h-4 w-4 mr-2" />
              Large Text
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-10 px-4 rounded-2xl border-primary/30 hover:bg-primary/10 focus-visible-community"
            >
              <Phone className="h-4 w-4 mr-2" />
              *120*2345#
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Languages className="h-4 w-4 text-muted-foreground" />
          <select className="bg-transparent border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.native}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Card>
  );
};

export default AccessibilityBar;