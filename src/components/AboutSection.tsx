import { Palette, Brain, Crosshair } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { name: "Creativity", value: 88, icon: Palette, label: "Artistic & Drawing" },
    { name: "Intellect", value: 90, icon: Brain, label: "Anime & Lore" },
    { name: "Precision", value: 95, icon: Crosshair, label: "FPS Gaming" },
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 hud-corner p-6">
          <div className="inline-block glass-panel px-4 py-2 mb-4 text-sm uppercase tracking-widest border-l-2 border-tactical-blue">
            Classified Information
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            THE <span className="text-tactical-blue">DOSSIER</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio Text */}
          <div className="glass-panel hud-corner p-8 space-y-6 scan-line">
            <div className="flex items-center gap-2 text-tactical-gold uppercase tracking-wider text-sm font-semibold mb-4">
              <div className="w-8 h-px bg-tactical-gold" />
              <span>Personnel File</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a <span className="text-foreground font-semibold">Full-Stack Developer</span> with a tactical approach. 
              I view every project as a mission that requires strategy, precision, and continuous learning.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              Just as in a Battle Royale, I analyze the environment, adapt to new challenges, and work towards the objective. 
              I'm building my skills through real-world projects and staying sharp by learning new technologies.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              When I'm off-duty, I recharge by exploring my artistic side through drawing, analyzing anime storylines, 
              or grinding rank in competitive FPS games. I'm always up for an adventure and eager to take on new challenges.
            </p>

            <div className="pt-4 border-t border-tactical-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground uppercase tracking-wider">Clearance Level</span>
                <span className="text-tactical-blue font-semibold">MAXIMUM</span>
              </div>
            </div>
          </div>

          {/* Stats HUD */}
          <div className="space-y-6">
            <div className="glass-panel hud-corner p-8 scan-line">
              <div className="flex items-center gap-2 text-tactical-gold uppercase tracking-wider text-sm font-semibold mb-6">
                <div className="w-8 h-px bg-tactical-gold" />
                <span>Attribute Analysis</span>
              </div>

              <div className="space-y-8">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 glass-panel rounded-sm border border-tactical-blue/50">
                            <Icon className="w-4 h-4 text-tactical-blue" />
                          </div>
                          <div>
                            <div className="font-semibold uppercase tracking-wide text-sm">
                              {stat.name}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-tactical-blue">
                          {stat.value}%
                        </div>
                      </div>
                      
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-tactical-blue to-tactical-gold transition-all duration-1000 ease-out"
                          style={{ width: `${stat.value}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </div>
                        
                        {/* Progress indicators */}
                        <div className="absolute inset-0 flex justify-between px-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-px h-full bg-background/50"
                              style={{ opacity: i * 20 < stat.value ? 0.5 : 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
