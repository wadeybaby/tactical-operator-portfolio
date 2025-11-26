import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  const handleDownload = () => {
    // In a real implementation, this would download an actual PDF file
    // For now, we'll create a simple text file as a placeholder
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
- Claremon High School - NCC Certificate

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
        <div className="glass-panel hud-corner p-8 scan-line">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side - Info */}
            <div className="flex items-center gap-4">
              <div className="glass-panel p-4 border-2 border-tactical-gold">
                <FileText className="w-8 h-8 text-tactical-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-1">
                  Classified <span className="text-tactical-gold">Intel</span>
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Download Full Dossier & Credentials
                </p>
              </div>
            </div>

            {/* Right side - Download Button */}
            <Button
              onClick={handleDownload}
              size="lg"
              className="uppercase tracking-wider font-semibold text-base px-8 py-6 bg-gradient-to-r from-tactical-gold to-tactical-blue hover:scale-105 transition-all duration-300 group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Extract Intel
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="mt-6 pt-6 border-t border-tactical-border">
            <div className="grid grid-cols-3 gap-4 text-center text-xs uppercase tracking-wider">
              <div>
                <div className="text-tactical-blue font-bold text-lg">PDF</div>
                <div className="text-muted-foreground">Format</div>
              </div>
              <div>
                <div className="text-tactical-gold font-bold text-lg">2 Pages</div>
                <div className="text-muted-foreground">Length</div>
              </div>
              <div>
                <div className="text-tactical-blue font-bold text-lg">Updated</div>
                <div className="text-muted-foreground">2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
