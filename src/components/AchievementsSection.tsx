import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code2, Briefcase, GraduationCap } from "lucide-react";

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      id: 1,
      title: "Bootcamp Graduate",
      description: "Completed Life Choices Academy Full-Stack Development Program",
      icon: GraduationCap,
      year: "2024",
    },
    {
      id: 2,
      title: "Professional Experience",
      description: "Successfully completed internship and web development roles",
      icon: Briefcase,
      year: "2024-2025",
    },
    {
      id: 3,
      title: "Technical Skills",
      description: "Proficient in modern web technologies and frameworks",
      icon: Code2,
      year: "Ongoing",
    },
    {
      id: 4,
      title: "Project Portfolio",
      description: "Built and deployed multiple real-world applications",
      icon: Award,
      year: "2025",
    },
  ];

  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Highlights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Key Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 card-hover"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="text-sm text-primary font-medium">
                      {achievement.year}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
