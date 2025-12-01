import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const resumeContent = `
WADE BRITZ
Full-Stack Developer

CONTACT:
Email: wade.britz@example.com
LinkedIn: linkedin.com/in/wade-britz
GitHub: github.com/wadebritz

EXPERIENCE:
- LC Studio (Intern) - June 2024 to Present
- Cock N Bull - December 2023 to February 2024

EDUCATION:
- Life Choices Academy - September 2023 to Present
- Claremont High School - National Senior Certificate

SKILLS:
Python, JavaScript, HTML, CSS, Node.js, Vue.js, PHP, WordPress
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Wade_Britz_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-xl">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Download Resume
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get the full details of my experience and skills
                </p>
              </div>
            </div>

            <Button
              onClick={handleDownload}
              size="lg"
              className="group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
