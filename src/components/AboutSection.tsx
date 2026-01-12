import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Introduction
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a <span className="text-foreground font-semibold">Full-Stack Developer</span> with a passion for creating modern, 
            responsive web applications. I approach every project with dedication, precision, and a commitment to continuous learning.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I built my skills through hands-on experience at LC Studio, I focused on writing clean, 
            maintainable code and staying current with the latest web technologies. I thrive on challenges and 
            am always eager to take on new projects that push my abilities.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Outside of coding, I enjoy exploring my creative side through drawing, diving into compelling anime storylines, 
            and staying sharp with competitive gaming. I'm always up for an adventure and eager to take on new challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
