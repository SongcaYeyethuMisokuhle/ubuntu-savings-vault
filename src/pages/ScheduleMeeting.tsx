import { ArrowLeft, Calendar, Clock, MapPin, Users, Bell, Plus, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { useState } from "react";

const ScheduleMeeting = () => {
  const navigate = useNavigate();
  const [meetingTitle, setMeetingTitle] = useState("");

  const upcomingMeetings = [
    {
      id: 1,
      title: "December Planning Meeting",
      date: "Saturday, Dec 16, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Gogo Mampintsha's Home",
      address: "123 Ubuntu Street, Soweto",
      attendees: 12,
      type: "Monthly Planning"
    },
    {
      id: 2,
      title: "Year-End Payout Meeting",
      date: "Saturday, Dec 30, 2023", 
      time: "10:00 AM - 12:00 PM",
      location: "Community Hall",
      address: "Orlando Community Center",
      attendees: 12,
      type: "Payout Meeting"
    }
  ];

  const meetingTemplates = [
    { title: "Monthly Contribution Meeting", duration: "2 hours", description: "Regular savings and updates" },
    { title: "Emergency Payout Meeting", duration: "1 hour", description: "Urgent member support" },
    { title: "Year-End Planning", duration: "3 hours", description: "Annual review and planning" },
    { title: "New Member Welcome", duration: "1.5 hours", description: "Introduce new members" }
  ];

  return (
    <div className="min-h-screen bg-earth-gradient">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
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
              <Calendar className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground font-ubuntu">Schedule Meeting</h1>
              <p className="text-muted-foreground text-sm">Plan your stokvel gatherings with Ubuntu spirit</p>
            </div>
          </div>
        </div>

        {/* AI Assistant */}
        <Card className="card-community p-6 mb-8 bg-gradient-to-r from-accent/10 to-primary/10">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-community-gradient rounded-full flex items-center justify-center flex-shrink-0">
              <Mic className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2 font-ubuntu">AI Meeting Assistant</h3>
              <p className="text-muted-foreground mb-4">
                "Sawubona! I can help you schedule meetings in isiZulu, isiXhosa, or English. Just tell me when and where you'd like to meet."
              </p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-2xl">
                  "Schedule for next Saturday"
                </Button>
                <Button variant="outline" size="sm" className="rounded-2xl">
                  "Find best time for everyone"
                </Button>
                <Button variant="outline" size="sm" className="rounded-2xl">
                  "Send SMS invites"
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Create New Meeting */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground font-ubuntu">Create New Meeting</h2>
            
            <Card className="card-community p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Meeting Title</label>
                  <Input
                    placeholder="e.g., November Contributions Meeting"
                    value={meetingTitle}
                    onChange={(e) => setMeetingTitle(e.target.value)}
                    className="rounded-2xl border-border/50 focus:border-primary/50 focus:ring-primary/30 min-h-[44px]"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                    <Input
                      type="date"
                      className="rounded-2xl border-border/50 focus:border-primary/50 focus:ring-primary/30 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Time</label>
                    <Input
                      type="time"
                      className="rounded-2xl border-border/50 focus:border-primary/50 focus:ring-primary/30 min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                  <Input
                    placeholder="e.g., Community Hall or Member's Home"
                    className="rounded-2xl border-border/50 focus:border-primary/50 focus:ring-primary/30 min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Meeting Templates</label>
                  <div className="grid grid-cols-1 gap-2">
                    {meetingTemplates.map((template, index) => (
                      <div
                        key={index}
                        className="p-3 border border-border/50 rounded-xl hover:bg-primary/5 cursor-pointer transition-colors"
                        onClick={() => setMeetingTitle(template.title)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-foreground text-sm">{template.title}</p>
                            <p className="text-xs text-muted-foreground">{template.description}</p>
                          </div>
                          <span className="text-xs text-primary font-medium">{template.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="btn-community w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Meeting & Send Invites
                </Button>
              </div>
            </Card>
          </div>

          {/* Upcoming Meetings */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground font-ubuntu">Upcoming Meetings</h2>
            
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <Card key={meeting.id} className="card-community p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-foreground font-ubuntu mb-1">{meeting.title}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {meeting.type}
                      </span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl">
                      <Bell className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{meeting.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{meeting.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-foreground">{meeting.location}</p>
                        <p className="text-muted-foreground text-xs">{meeting.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{meeting.attendees} members invited</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="rounded-2xl flex-1">
                      View Details
                    </Button>
                    <Button size="sm" className="btn-community flex-1">
                      Send Reminder
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Ubuntu Message */}
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border border-border/50">
              <div className="text-center">
                <h3 className="font-bold text-foreground mb-2 font-ubuntu">Ubuntu Meetings</h3>
                <p className="text-sm text-muted-foreground italic mb-2">
                  "When we gather, we are stronger. When we plan together, we prosper together."
                </p>
                <p className="text-xs text-muted-foreground">
                  All meetings support voice notes, SMS reminders, and USSD access for every member.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScheduleMeeting;