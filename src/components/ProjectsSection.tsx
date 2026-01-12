import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import modernTechImg from "@/assets/ModernTech-Homepage.png";
import ilisoImg from "@/assets/iliso-dark.jpg";
import pricePulseImg from "@/assets/pricepulse-dark.jpg";

const ProjectsSection = () => {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-100px" });

 const projects = [
  {
   id: 1,
   title: "HR Management Dashboard (ModernTech Solutions)",
   description: "The HR Management system offers an easy-to-use solution for HR personnel to manage employee data, payroll, performance reviews and time tracking efficiently.",
   image: modernTechImg,
   tech: ["HTML", "JavaScript", "CSS"],
   demoLink: "https://moderntechsolutions.co.za",
   codeLink: "#",
  },
  {
   id: 2,
   title: "Digital Tracking System (Iliso)",
   description: "A real-time attendance management solution built using Python, Mysql, and Google Sheets integration. This system uses NFC technology to allow employees to clock in and out seamlessly, while automatically updating a live dashboard that tracks on-site and off-site staff. The management at LC Studio decided to implement our tracking system to track the attendance of their staff.",
   image: ilisoImg,
   tech: ["Python", "JavaScript", "MySQL", "PHP", "HTML", "Raspberry Pi"],
   demoLink: "#",
   codeLink: "https://github.com/surur-samaai/iliso_digital_tracking_system/tree/main",
  },
  {
   id: 3,
   title: "Android Data Aggregation App (Price Pulse)",
   description: "A flutter-based mobile application that scrapes from major South African retailers including Pick n Pay, Woolworths, Checkers, and Game/Makro. The app allows users to instantly compare prices across stores through a clean, responsive interface. Built using FLutterr and Python for scraping, the project also explores the ethical and legal aspects of web data extraction, delivering a fully functional and research-backed MVP.",
   image: pricePulseImg,
   tech: ["Dart", "Flutter", "Python"],
   demoLink: "#",
   codeLink: "https://github.com/keanan557/Price-Pulse/tree/main",
  }
 ];

 return (
  <section id="projects" className="relative py-24 px-4 bg-card/30">
   <div className="max-w-6xl mx-auto">
    <motion.div
     ref={ref}
     initial={{ opacity: 0, y: 20 }}
     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
     transition={{ duration: 0.6 }}
     className="text-center mb-16"
    >
     <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
      Portfolio
     </div>
     <h2 className="text-4xl md:text-5xl font-bold">
      Featured Projects
     </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
     {projects.map((project, index) => (
      <motion.div
       key={project.id}
       initial={{ opacity: 0, y: 30 }}
       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
       transition={{ duration: 0.6, delay: index * 0.1 }}
       className="group bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col h-full" // ADDED: flex flex-col h-full
      >
       <div className="relative overflow-hidden aspect-video">
        <img
         src={project.image}
         alt={project.title}
         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
       </div>

       <div className="p-6 flex flex-col justify-between h-full"> {/* MODIFIED: p-6 space-y-4 -> p-6 flex flex-col justify-between h-full */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
         {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-4 flex-grow"> {/* MODIFIED: Added flex-grow, and adjusted margin */}
         {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
         {project.tech.map((tech) => (
          <span
           key={tech}
           className="px-3 py-1 text-xs bg-secondary text-foreground rounded-lg font-medium"
          >
           {tech}
          </span>
         ))}
        </div>

        <div className="flex gap-3 pt-4"> {/* MODIFIED: pt-2 -> pt-4 to provide consistent spacing above buttons */}
         <Button
          variant="default"
          size="sm"
          className="flex-1"
          onClick={() => window.open(project.demoLink, '_blank')}
         >
          <ExternalLink className="mr-2 h-4 w-4" />
          Demo
         </Button>
         <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => window.open(project.codeLink, '_blank')}
         >
          <Github className="mr-2 h-4 w-4" />
          Code
         </Button>
        </div>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default ProjectsSection;