import { Code2, Wrench } from "lucide-react";

const SkillsSection = () => {
  const primaryWeapons = [
    { name: "Python", level: "Expert", color: "tactical-blue" },
    { name: "JavaScript", level: "Expert", color: "tactical-gold" },
    { name: "HTML", level: "Expert", color: "tactical-blue" },
    { name: "CSS", level: "Expert", color: "tactical-gold" },
  ];

  const tacticalGear = [
    { name: "Node.js", type: "Runtime", color: "tactical-blue" },
    { name: "Vue.js", type: "Framework", color: "tactical-gold" },
    { name: "PHP", type: "Backend", color: "tactical-blue" },
    { name: "WordPress", type: "CMS", color: "tactical-gold" },
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 hud-corner p-6">
          <div className="inline-block glass-panel px-4 py-2 mb-4 text-sm uppercase tracking-widest border-l-2 border-tactical-gold">
            Arsenal Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            THE <span className="text-tactical-gold">LOADOUT</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Primary Weapons */}
          <div className="glass-panel hud-corner p-8 scan-line">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 glass-panel rounded-sm border border-tactical-blue">
                <Code2 className="w-6 h-6 text-tactical-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wide">Primary Weapons</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Main Languages</p>
              </div>
            </div>

            <div className="space-y-4">
              {primaryWeapons.map((weapon, index) => (
                <div 
                  key={weapon.name}
                  className="group glass-panel p-4 hover:border-tactical-blue transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-tactical-blue animate-pulse" />
                      <span className="font-semibold uppercase tracking-wide">{weapon.name}</span>
                    </div>
                    <span className={`text-${weapon.color} text-sm font-semibold uppercase tracking-wider`}>
                      {weapon.level}
                    </span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-${weapon.color} to-tactical-gold w-full transition-all duration-1000 group-hover:animate-pulse`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-tactical-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground uppercase tracking-wider">Weapons Status</span>
                <span className="text-tactical-blue font-semibold">All Systems Go</span>
              </div>
            </div>
          </div>

          {/* Tactical Gear */}
          <div className="glass-panel hud-corner p-8 scan-line">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 glass-panel rounded-sm border border-tactical-gold">
                <Wrench className="w-6 h-6 text-tactical-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wide">Tactical Gear</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Frameworks & Tools</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {tacticalGear.map((gear, index) => (
                <div 
                  key={gear.name}
                  className="group glass-panel p-4 hover:border-tactical-gold transition-all duration-300 cursor-pointer text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-2">
                    <div className="w-12 h-12 mx-auto glass-panel rounded-sm border border-tactical-border group-hover:border-tactical-gold transition-colors duration-300 flex items-center justify-center">
                      <div className={`w-6 h-6 rounded-full bg-${gear.color}/20 group-hover:bg-${gear.color}/40 transition-colors duration-300`} />
                    </div>
                    <div>
                      <div className="font-semibold uppercase tracking-wide text-sm">
                        {gear.name}
                      </div>
                      <div className={`text-xs text-${gear.color} uppercase tracking-wider font-semibold`}>
                        {gear.type}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-tactical-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground uppercase tracking-wider">Equipment Status</span>
                <span className="text-tactical-gold font-semibold">Combat Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
