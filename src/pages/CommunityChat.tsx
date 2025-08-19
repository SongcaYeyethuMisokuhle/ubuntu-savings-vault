import { ArrowLeft, Send, Mic, Paperclip, Users, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { useState } from "react";

const CommunityChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      sender: "Nomsa Mthembu",
      role: "Treasurer",
      message: "Sawubona! Our November contributions are due this Friday. Please remember R200 each.",
      time: "10:30 AM",
      isMe: false
    },
    {
      id: 2,
      sender: "Thembi Ndlovu", 
      role: "Member",
      message: "Yebo, Nomsa. I will transfer my contribution today. Thank you for the reminder!",
      time: "10:45 AM", 
      isMe: false
    },
    {
      id: 3,
      sender: "You",
      role: "Member",
      message: "Perfect timing! I was just about to ask about the deadline. Will send mine tomorrow morning.",
      time: "11:00 AM",
      isMe: true
    },
    {
      id: 4,
      sender: "Gogo Mampintsha",
      role: "Chairperson",
      message: "🙏 Ubuntu spirit! We are stronger together. Remember our December planning meeting on Saturday.",
      time: "11:15 AM",
      isMe: false
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-earth-gradient">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="h-10 w-10 rounded-2xl hover:bg-primary/10 focus-visible-community"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-community-gradient rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground font-ubuntu">Khanyisa Stokvel Chat</h1>
              <p className="text-muted-foreground text-sm">12 members • Ubuntu Community</p>
            </div>
          </div>
        </div>

        {/* Voice Assistant Bar */}
        <Card className="card-community p-4 mb-6 bg-gradient-to-r from-accent/10 to-primary/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Volume2 className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Voice Assistant Active</p>
                <p className="text-sm text-muted-foreground">Say "Sawubona AzaniaVault" to start speaking in isiZulu</p>
              </div>
            </div>
            <Button className="btn-community">
              Try Voice Chat
            </Button>
          </div>
        </Card>

        {/* Messages */}
        <Card className="card-community p-6 mb-6 min-h-[500px]">
          <div className="space-y-4 mb-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  msg.isMe 
                    ? 'bg-community-gradient text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  {!msg.isMe && (
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-sm">{msg.sender}</span>
                      <span className="text-xs opacity-70">• {msg.role}</span>
                    </div>
                  )}
                  <p className="text-sm mb-1">{msg.message}</p>
                  <p className={`text-xs opacity-70 ${msg.isMe ? 'text-right' : 'text-left'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ubuntu Philosophy Message */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-4 text-center mb-4">
            <p className="text-sm text-muted-foreground italic">
              "Umuntu ngumuntu ngabantu" - A person is a person through other people
            </p>
          </div>
        </Card>

        {/* Message Input */}
        <Card className="card-community p-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-2xl hover:bg-primary/10 focus-visible-community"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-2xl hover:bg-primary/10 focus-visible-community"
            >
              <Mic className="h-5 w-5 text-primary" />
            </Button>
            <Input
              placeholder="Type your message in English, isiZulu, or isiXhosa..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 rounded-2xl border-border/50 focus:border-primary/50 focus:ring-primary/30 min-h-[44px]"
            />
            <Button
              onClick={handleSendMessage}
              className="btn-community h-12 w-12 p-0"
              disabled={!message.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center justify-center mt-2">
            <p className="text-xs text-muted-foreground">Messages are encrypted • USSD: *120*2345*2#</p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default CommunityChat;