import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, Wrench } from "lucide-react";

const SkillsSection = () => {
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

const skillCategories = [
 {
 title: "Frontend",
 icon: Globe,
 skills: [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 70 },
  { name: "React", level: 60 },
  { name: "Vue.js", level: 65 },
  { name: "Flutter", level: 60 },
 ]
 },
 {
 title: "Backend & Database",
 icon: Database,
 skills: [
  { name: "Node.js", level: 85 },
  { name: "Python", level: 75 },
  { name: "Dart", level: 60 },
  { name: "PHP", level: 65 },
  { name: "PostgreSQL", level: 80 },
  { name: "Oracle", level: 55 },
 ]
 },
 {
 title: "Tools",
 icon: Wrench,
 skills: [
  { name: "Git", level: 85 },
  { name: "WordPress", level: 75 },
  { name: "VS Code", level: 90 },
 ]
 },
];

return (
 <section id="skills" className="relative py-24 px-4 bg-card/30">
 <div className="max-w-6xl mx-auto">
  <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16"
  >
  <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
   Tech Stack
  </div>
  <h2 className="text-4xl md:text-5xl font-bold">
   Skills & Technologies
  </h2>
  </motion.div>

  <div className="grid md:grid-cols-3 gap-8 items-start"> {/* FIX APPLIED HERE: Added items-start */}
  {skillCategories.map((category, categoryIndex) => {
   const Icon = category.icon;
   return (
   <motion.div
    key={category.title}
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
    className="bg-card border border-border rounded-2xl p-8 card-hover h-full flex flex-col"
   >
    <div className="flex items-center gap-3 mb-6">
    <div className="p-3 bg-primary/10 rounded-xl">
     <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold">{category.title}</h3>
    </div>

    <div className="space-y-6">
    {category.skills.map((skill, skillIndex) => (
     <div key={skill.name} className="space-y-2">
     <div className="flex items-center justify-between">
      <span className="font-medium text-foreground">{skill.name}</span>
      <span className="text-sm text-muted-foreground">{skill.level}%</span>
     </div>
     <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
      initial={{ width: 0 }}
      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
      transition={{ 
       duration: 1, 
       delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.1,
       ease: "easeOut" 
      }}
      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-[hsl(var(--accent-gradient-end))]"
      />
     </div>
     </div>
    ))}
    </div>
   </motion.div>
   );
  })}
  </div>
 </div>
 </section>
);
};

export default SkillsSection;