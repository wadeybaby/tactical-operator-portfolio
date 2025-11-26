import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";
import weatherImg from "@/assets/project-weather.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A responsive online store with product catalog, shopping cart, and checkout functionality. Built with HTML, CSS, and JavaScript.",
      image: ecommerceImg,
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      demoLink: "#",
      codeLink: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Manager Pro",
      description: "A kanban-style task management application with drag-and-drop functionality and local storage persistence.",
      image: taskManagerImg,
      tech: ["Vue.js", "Node.js", "CSS"],
      demoLink: "#",
      codeLink: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather forecast application integrating external APIs to display current conditions and 7-day forecasts.",
      image: weatherImg,
      tech: ["JavaScript", "API Integration", "CSS"],
      demoLink: "#",
      codeLink: "#",
      status: "In Progress"
    }
  ];

  return (
    <section className="relative py-20 px-4 border-t border-tactical-border">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-tactical-dark/50 to-background pointer-events-none" />
      <div className="scan-line" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block glass-panel px-4 py-2 mb-4">
            <p className="text-xs text-tactical-accent uppercase tracking-widest font-bold">
              // COMPLETED OPERATIONS
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            <span className="text-gradient">Mission Archive</span>
          </h2>
          <div className="hud-corners mx-auto" style={{ width: '200px', height: '2px' }}>
            <div className="w-full h-full bg-gradient-to-r from-transparent via-tactical-accent to-transparent opacity-50" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-panel group hover:border-tactical-accent transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tactical-dark via-tactical-dark/50 to-transparent opacity-60" />
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <div className={`glass-panel px-3 py-1 ${
                    project.status === "Completed" 
                      ? "border-tactical-gold" 
                      : "border-tactical-accent animate-pulse-border"
                  }`}>
                    <p className={`text-xs font-bold uppercase tracking-wider ${
                      project.status === "Completed" 
                        ? "text-tactical-gold" 
                        : "text-tactical-accent"
                    }`}>
                      {project.status}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-2 group-hover:text-tactical-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-bold uppercase tracking-wider border border-tactical-border bg-tactical-dark/30 text-tactical-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 uppercase tracking-wider font-bold"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 uppercase tracking-wider font-bold border-tactical-border hover:border-tactical-accent hover:bg-tactical-accent/10"
                    onClick={() => window.open(project.codeLink, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-16 glass-panel text-center py-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-tactical-accent">3</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                Missions Complete
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-tactical-gold">8+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                Technologies Used
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-tactical-accent">100%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                Mission Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
