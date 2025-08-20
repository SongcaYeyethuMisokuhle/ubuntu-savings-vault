import { Mic, MicOff, Volume2, VolumeX, Languages, MessageCircle, Phone, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AccessibilityBar from "@/components/AccessibilityBar";

const VoiceAssistant = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("zu");
  const [volume, setVolume] = useState(0.8);
  
  const languages = [
    { code: "zu", name: "isiZulu", flag: "🇿🇦" },
    { code: "xh", name: "isiXhosa", flag: "🇿🇦" },
    { code: "st", name: "Sesotho", flag: "🇿🇦" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "af", name: "Afrikaans", flag: "🇿🇦" }
  ];

  const quickCommands = [
    { command: "Yini isamba sami?", translation: "What is my balance?", category: "Balance" },
    { command: "Ngifuna ukufaka imali", translation: "I want to contribute money", category: "Contribute" },
    { command: "Kungakanani okuphendukayo?", translation: "How much is the payout?", category: "Payout" },
    { command: "Siqhube kanjani istokvel?", translation: "How is our stokvel doing?", category: "Stats" },
    { command: "Hlela umhlangano", translation: "Schedule a meeting", category: "Meeting" },
    { command: "Sizofundani namuhla?", translation: "What can we learn today?", category: "Learn" }
  ];

  const handleStartListening = () => {
    setIsListening(true);
    // Here you would integrate with speech recognition API
    setTimeout(() => {
      setIsListening(false);
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 3000);
    }, 2000);
  };

  const handleStopListening = () => {
    setIsListening(false);
  };

  const handleQuickCommand = (command: string) => {
    setIsSpeaking(true);
    // Here you would process the command and provide audio response
    setTimeout(() => setIsSpeaking(false), 2000);
  };

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
            <h1 className="text-4xl font-bold text-primary mb-3 font-ubuntu">Ubuntu Voice Assistant</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Speak to your stokvel in your home language - Khuluma nathi!
            </p>
          </div>
        </div>

        {/* Voice Interface */}
        <div className="mb-12">
          <Card className="card-community p-8 text-center">
            <div className="space-y-6">
              {/* Status Display */}
              <div className="space-y-2">
                {isListening && (
                  <div className="flex items-center justify-center space-x-2 text-primary">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="font-medium">Ngikulalele... (Listening...)</span>
                  </div>
                )}
                {isSpeaking && (
                  <div className="flex items-center justify-center space-x-2 text-accent">
                    <Volume2 className="h-5 w-5 animate-pulse" />
                    <span className="font-medium">Ngiyakhuluma... (Speaking...)</span>
                  </div>
                )}
                {!isListening && !isSpeaking && (
                  <p className="text-muted-foreground">Press the microphone to start talking</p>
                )}
              </div>

              {/* Main Voice Button */}
              <div className="relative">
                <Button
                  size="lg"
                  onClick={isListening ? handleStopListening : handleStartListening}
                  className={`w-32 h-32 rounded-full text-2xl transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 shadow-red-500/50 animate-pulse' 
                      : 'bg-community-gradient hover:scale-110 shadow-primary/30'
                  } shadow-2xl`}
                >
                  {isListening ? (
                    <MicOff className="h-12 w-12" />
                  ) : (
                    <Mic className="h-12 w-12" />
                  )}
                </Button>
                {isListening && (
                  <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping"></div>
                )}
              </div>

              {/* Language & Volume Controls */}
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Languages className="h-5 w-5 text-muted-foreground" />
                  <select 
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="bg-transparent border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setVolume(volume > 0 ? 0 : 0.8)}
                  >
                    {volume > 0 ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                  </Button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-20"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Commands */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 font-ubuntu">Quick Voice Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((item, index) => (
              <Card 
                key={index} 
                className="card-community p-4 hover:bg-primary/5 cursor-pointer transition-all"
                onClick={() => handleQuickCommand(item.command)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="text-xs">{item.category}</Badge>
                    </div>
                    <p className="font-medium text-foreground mb-1">{item.command}</p>
                    <p className="text-sm text-muted-foreground">{item.translation}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 font-ubuntu">Voice Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-feature">
              <div className="text-center space-y-4">
                <div className="p-4 rounded-3xl bg-community-gradient mx-auto w-fit">
                  <MessageCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-ubuntu">Natural Conversations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Talk naturally in your home language. Ask questions about your stokvel, balance, or community.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-feature">
              <div className="text-center space-y-4">
                <div className="p-4 rounded-3xl bg-community-gradient mx-auto w-fit">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-ubuntu">USSD Integration</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Access voice features through *120*2345# on any phone, even without internet.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-feature">
              <div className="text-center space-y-4">
                <div className="p-4 rounded-3xl bg-community-gradient mx-auto w-fit">
                  <Settings className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-ubuntu">Smart Assistance</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get help with transactions, meeting scheduling, and financial education.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* USSD Instructions */}
        <div className="mb-12">
          <Card className="card-community p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-2xl bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 font-ubuntu">USSD Voice Access</h3>
                <p className="text-muted-foreground mb-3">
                  Access voice features on any phone by dialing *120*2345#
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Works on all phones, even without internet</li>
                  <li>• Available in all South African languages</li>
                  <li>• Free voice assistance for basic stokvel operations</li>
                  <li>• Press 1 for isiZulu, 2 for isiXhosa, 3 for Sesotho</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Ubuntu Philosophy */}
        <div className="text-center">
          <Card className="card-community p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-3 font-ubuntu">Voice of Ubuntu</h3>
            <p className="text-muted-foreground italic">
              "Every voice matters, every language is precious. We understand you in the words of your heart."
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Technology that speaks your language and understands your community.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default VoiceAssistant;