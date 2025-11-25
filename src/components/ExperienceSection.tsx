import { CheckCircle2, Radio } from "lucide-react";

const ExperienceSection = () => {
  const missions = [
    {
      id: 1,
      company: "LC Studio",
      role: "Full-Stack Developer Intern",
      period: "June 2024 - Present",
      status: "active",
      description: "Developing modern web applications using React and Node.js. Learning to build responsive UIs and work with backend systems. Collaborating with the team on real client projects.",
      technologies: ["React", "Node.js", "JavaScript", "HTML/CSS"],
    },
    {
      id: 2,
      company: "Cock N Bull",
      role: "Web Developer (Full-Time)",
      period: "December 2023 - February 2024",
      status: "complete",
      description: "Worked on e-commerce website maintenance and updates. Gained hands-on experience with WordPress, PHP, and front-end development. Learned to troubleshoot and implement client requirements.",
      technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
    },
    {
      id: 3,
      company: "Life Choices Academy",
      role: "Full-Stack Development Student",
      period: "September 2023 - Present",
      status: "complete",
      description: "Completed intensive coding bootcamp focused on full-stack web development. Gained foundational knowledge in programming logic, web technologies, and modern development practices.",
      technologies: ["Python", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      company: "Claremon High School",
      role: "NCC Certificate",
      period: "Completed",
      status: "complete",
      description: "Achieved National Senior Certificate, building a strong educational foundation and developing problem-solving skills that translate well into programming and logical thinking.",
      technologies: ["Academic Foundation"],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 hud-corner p-6">
          <div className="inline-block glass-panel px-4 py-2 mb-4 text-sm uppercase tracking-widest border-l-2 border-tactical-blue">
            Mission History
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            CAMPAIGN <span className="text-tactical-blue">PROGRESS</span>
          </h2>
        </div>

        <div className="space-y-8">
          {missions.map((mission, index) => (
            <div
              key={mission.id}
              className="glass-panel hud-corner p-8 scan-line"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Status Indicator */}
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 glass-panel rounded-sm border-2 ${
                    mission.status === 'active' 
                      ? 'border-tactical-gold animate-pulse-border' 
                      : 'border-tactical-blue'
                  } flex items-center justify-center`}>
                    {mission.status === 'active' ? (
                      <Radio className="w-12 h-12 text-tactical-gold animate-pulse" />
                    ) : (
                      <CheckCircle2 className="w-12 h-12 text-tactical-blue" />
                    )}
                  </div>
                </div>

                {/* Mission Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <h3 className="text-2xl font-bold uppercase tracking-wide">
                        {mission.company}
                      </h3>
                      <div className={`glass-panel px-3 py-1 text-xs uppercase tracking-wider border-l-2 ${
                        mission.status === 'active' 
                          ? 'border-tactical-gold text-tactical-gold' 
                          : 'border-tactical-blue text-tactical-blue'
                      }`}>
                        {mission.status === 'active' ? (
                          <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-tactical-gold animate-pulse" />
                            In Progress
                          </span>
                        ) : (
                          'Mission Complete'
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="uppercase tracking-wide font-semibold">{mission.role}</span>
                      <span className="text-tactical-gold">•</span>
                      <span className="text-sm uppercase tracking-wider">{mission.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      Technologies Deployed
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {mission.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="glass-panel px-3 py-1 text-xs uppercase tracking-wider border border-tactical-border hover:border-tactical-blue transition-colors duration-300"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mission Stats */}
                  <div className="pt-4 border-t border-tactical-border">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className={`text-2xl font-bold ${
                          mission.status === 'active' ? 'text-tactical-gold' : 'text-tactical-blue'
                        }`}>
                          {mission.status === 'active' ? '75%' : '100%'}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          Progress
                        </div>
                      </div>
                      <div>
                        <div className={`text-2xl font-bold ${
                          mission.status === 'active' ? 'text-tactical-gold' : 'text-tactical-blue'
                        }`}>
                          {mission.technologies.length}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          Tech Used
                        </div>
                      </div>
                      <div>
                        <div className={`text-2xl font-bold ${
                          mission.status === 'active' ? 'text-tactical-gold' : 'text-tactical-blue'
                        }`}>
                          {mission.status === 'active' ? 'A' : 'A+'}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
