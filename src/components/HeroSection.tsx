import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Animated scan lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-tactical-blue to-transparent animate-pulse" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-tactical-gold to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div className="space-y-8 hud-corner p-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-wider">
                <div className="w-2 h-2 rounded-full bg-tactical-blue animate-pulse" />
                <span>Status: Online</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tight text-foreground">
                WADE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-blue to-tactical-gold">
                  BRITZ
                </span>
              </h1>
              
              <div className="flex items-center gap-3 text-lg md:text-xl text-muted-foreground uppercase tracking-wide">
                <div className="h-px w-12 bg-tactical-blue" />
                <span>Class: Full-Stack Developer</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Tactical approach to modern web development. Precision-driven code. Strategic problem solving.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="relative group uppercase tracking-wider font-semibold text-base px-8 py-6 overflow-hidden bg-gradient-to-r from-tactical-blue to-tactical-gold hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-tactical-gold to-tactical-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/wadebritz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-3 border border-tactical-border hover:border-tactical-blue transition-all hover:scale-110 group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-tactical-blue transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/wade-britz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-3 border border-tactical-border hover:border-tactical-blue transition-all hover:scale-110 group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-tactical-blue transition-colors" />
                </a>
                <a
                  href="mailto:wade.britz@example.com"
                  className="glass-panel p-3 border border-tactical-border hover:border-tactical-gold transition-all hover:scale-110 group"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-tactical-gold transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Character Portrait */}
          <div className="relative">
            <div className="relative glass-panel hud-corner p-6 scan-line">
              <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
                <img 
                  src={heroPortrait} 
                  alt="Wade Britz - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
                
                {/* HUD overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Status indicators */}
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="glass-panel px-3 py-1 text-xs uppercase tracking-wider border-l-2 border-tactical-blue">
                    In Training
                  </div>
                  <div className="glass-panel px-3 py-1 text-xs uppercase tracking-wider border-l-2 border-tactical-gold">
                    Rising Dev
                  </div>
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 glass-panel p-4 border-t-2 border-tactical-blue">
                  <div className="flex justify-between items-center text-xs uppercase tracking-wider">
                    <span>Operator: Wade Britz</span>
                    <span className="text-tactical-blue">Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-tactical-blue/30 rotate-45" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-tactical-gold/30 rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
