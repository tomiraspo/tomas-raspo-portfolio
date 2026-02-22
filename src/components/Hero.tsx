import { Mail, Linkedin, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/FotoPortafolio.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse-glow" />
            <img
              src={profileImage}
              alt="Tomás Raspo"
              className="relative w-40 h-40 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Tomás Raspo
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-foreground/90 font-semibold mb-3">
          Systems Analyst & Data Analytics Specialist
        </p>

        {/* Skills Badges */}
        <div className="flex flex-wrap gap-2 justify-center mb-6 max-w-3xl mx-auto">
          {['Blazor', 'ASP.NET Core', 'C#', 'SQL Server', 'Backend Development', 'Full Stack Development', 'REST API', 'Git', 'Agile Methodologies'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Remoto, Argentina
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.5)]"
            asChild
          >
            <a href="mailto:tomiraspo@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 transition-all hover:border-primary"
            asChild
          >
            <a href="https://ar.linkedin.com/in/tomás-raspo-b03028214" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 transition-all hover:border-primary"
            asChild 
          >
            <a 
                href="/__CV Tomas Raspo Argentina .pdf" 
                download="Tomas_Raspo_CV.pdf" 
                target="_blank" 
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
