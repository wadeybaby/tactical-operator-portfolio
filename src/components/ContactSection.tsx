import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Transmission Failed",
        description: "All fields are required for secure transmission.",
        variant: "destructive",
      });
      return;
    }

    // Simulate sending
    toast({
      title: "Intel Received",
      description: "Your message has been transmitted successfully. Stand by for response.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 hud-corner p-6">
          <div className="inline-block glass-panel px-4 py-2 mb-4 text-sm uppercase tracking-widest border-l-2 border-tactical-gold">
            Encrypted Channel
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            FIELD <span className="text-tactical-gold">COMMS</span>
          </h2>
          <p className="text-muted-foreground mt-4 uppercase tracking-wider text-sm">
            Secure Communication Protocol Active
          </p>
        </div>

        {/* Contact Form */}
        <div className="glass-panel hud-corner p-8 scan-line">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Transmission Header */}
            <div className="flex items-center justify-between pb-4 border-b border-tactical-border">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tactical-gold animate-pulse" />
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  Channel Status: Online
                </span>
              </div>
              <span className="text-xs text-tactical-gold uppercase tracking-wider font-semibold">
                Encrypted
              </span>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                  Operator Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your callsign"
                  className="glass-panel border-tactical-border focus:border-tactical-blue transition-colors uppercase tracking-wide"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                  Communication Line
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@domain.com"
                  className="glass-panel border-tactical-border focus:border-tactical-blue transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                  Message Content
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your encrypted message here..."
                  rows={6}
                  className="glass-panel border-tactical-border focus:border-tactical-blue transition-colors resize-none"
                />
              </div>
            </div>

            {/* Transmission Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-tactical-border">
              <div className="text-center">
                <div className="text-tactical-blue text-lg font-bold">
                  {formData.message.length}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Characters
                </div>
              </div>
              <div className="text-center">
                <div className="text-tactical-gold text-lg font-bold">256-bit</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Encryption
                </div>
              </div>
              <div className="text-center">
                <div className="text-tactical-blue text-lg font-bold">&lt;1s</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Latency
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full uppercase tracking-wider font-semibold text-base py-6 bg-gradient-to-r from-tactical-gold to-tactical-blue hover:scale-105 transition-all duration-300 group"
            >
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Send Intel
            </Button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground uppercase tracking-wider">
          <p>Response Time: 24-48 Hours</p>
          <p className="mt-2">All communications are monitored and encrypted</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
