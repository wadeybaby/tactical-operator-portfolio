import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ResumeSection from "@/components/ResumeSection";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <AchievementsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-tactical-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="glass-panel px-6 py-3">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Wade Britz © 2024 | Full-Stack Developer | All Systems Operational
              </p>
            </div>
            
            {/* Social Links in Footer */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/wadebritz"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-2 border border-tactical-border hover:border-tactical-blue transition-all hover:scale-110 group"
              >
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-tactical-blue transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/wade-britz"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-2 border border-tactical-border hover:border-tactical-blue transition-all hover:scale-110 group"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-tactical-blue transition-colors" />
              </a>
              <a
                href="mailto:wade.britz@example.com"
                className="glass-panel p-2 border border-tactical-border hover:border-tactical-gold transition-all hover:scale-110 group"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-tactical-gold transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
