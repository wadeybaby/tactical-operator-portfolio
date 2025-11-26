import { Award, Trophy, Shield, Star } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Bootcamp Survivor",
      description: "Life Choices Academy Graduate",
      icon: Shield,
      color: "tactical-blue",
      rarity: "Legendary",
    },
    {
      id: 2,
      title: "Python Prestige",
      description: "Python Logic Mastery",
      icon: Trophy,
      color: "tactical-gold",
      rarity: "Epic",
    },
    {
      id: 3,
      title: "CMS Commander",
      description: "WordPress Deployment",
      icon: Star,
      color: "tactical-blue",
      rarity: "Epic",
    },
    {
      id: 4,
      title: "UI Tactician",
      description: "Web Design Excellence",
      icon: Award,
      color: "tactical-gold",
      rarity: "Legendary",
    },
  ];

  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 hud-corner p-6">
          <div className="inline-block glass-panel px-4 py-2 mb-4 text-sm uppercase tracking-widest border-l-2 border-tactical-gold">
            Service Record
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            MEDAL <span className="text-tactical-gold">CASE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.id}
                className="group glass-panel hud-corner p-8 hover:border-tactical-gold transition-all duration-300 cursor-pointer scan-line"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  {/* Medal Icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-20 h-20 glass-panel rounded-sm border-2 border-${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-10 h-10 text-${achievement.color}`} />
                    </div>
                    
                    {/* Rarity indicator */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full glass-panel border border-tactical-gold flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-tactical-gold animate-pulse" />
                    </div>
                  </div>

                  {/* Medal Info */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className={`text-xs uppercase tracking-widest text-${achievement.color} font-semibold mb-1`}>
                        {achievement.rarity}
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-tactical-gold transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Progress bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground uppercase tracking-wider">Achievement Progress</span>
                        <span className="text-tactical-gold font-semibold">100%</span>
                      </div>
                      <div className="h-1 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-${achievement.color} to-tactical-gold w-full`}>
                          <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </div>
                      </div>
                    </div>

                    {/* Unlock date */}
                    <div className="pt-3 border-t border-tactical-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Status</span>
                      <span className={`text-xs text-${achievement.color} uppercase tracking-wider font-semibold`}>
                        Unlocked
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats summary */}
        <div className="mt-12 glass-panel hud-corner p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-tactical-blue mb-2">4</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Total Medals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tactical-gold mb-2">2</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Legendary</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tactical-blue mb-2">2</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Epic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tactical-gold mb-2">100%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Completion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
