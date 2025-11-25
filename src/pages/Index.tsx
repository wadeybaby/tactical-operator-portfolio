import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <AchievementsSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-tactical-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass-panel inline-block px-6 py-3">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Wade Britz © 2024 | Full-Stack Developer | All Systems Operational
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
