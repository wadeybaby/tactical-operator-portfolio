import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-primary font-medium"
              >
                Full-Stack Developer
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Wade Britz
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Building modern web applications with precision and passion. 
                Specialized in creating responsive, user-friendly experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
              <Button 
                onClick={scrollToAbout}
                size="lg"
                className="group"
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/wadebritz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/wade-britz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:wade.britz@example.com"
                  className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-2">
              <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
                <img 
                  src={heroPortrait} 
                  alt="Wade Britz - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
