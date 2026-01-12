import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      company: "LC Studio",
      role: "Full-Stack Developer Intern",
      period: "April 2025 - Present",
      type: "work",
      description: "Developing modern web applications using React and Node.js. Building responsive user interfaces and working with backend systems. Collaborating with the team on client projects and learning industry best practices.",
      technologies: ["React", "Node.js", "JavaScript", "HTML/CSS"],
    },
    {
      id: 2,
      company: "Life Choices Academy",
      role: "Full-Stack Development",
      period: "September 2024 - April 2025",
      type: "education",
      description: "Completed intensive coding bootcamp focused on full-stack web development. Gained foundational knowledge in programming logic, web technologies, and modern development practices.",
      technologies: ["Python", "HTML", "CSS", "JavaScript", "PHP", "Vue.js"],
    },
    {
      id: 3,
      company: "Cock N Bull",
      role: "Sales Assistant",
      period: "February 2024 - September 2024",
      type: "work",
      description: "Worked full-time in a retail environment, gaining valuable experience in customer service, sales and store operations, teamwork and communication as well as problem solving.",
      technologies: [],
    },
    {
      id: 4,
      company: "Peninsula Hotel",
      role: "Part-Time Child Minder",
      period: "December 2022 - January 2023",
      type: "work",
      description: "Managed a safe and engaging environment for the children of tourists by facilitating creative activities and maintaining strong professional connections with families.",
      technologies: [],
    },
    {
      id: 5,
      company: "Claremont High School",
      role: "National Senior Certificate",
      period: "Completed",
      type: "education",
      description: "Achieved National Senior Certificate, building a strong educational foundation and developing problem-solving skills that translate well into programming.",
      technologies: [],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="md:ml-20 bg-card border border-border rounded-2xl p-8 card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      {exp.type === "work" ? (
                        <Briefcase className="w-6 h-6 text-primary" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.company}
                      </h3>
                      <div className="text-primary font-medium mb-2">
                        {exp.role}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
