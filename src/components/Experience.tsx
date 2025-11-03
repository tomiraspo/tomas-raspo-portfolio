import { Building2, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  logo?: string;
  website: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Desarrollador Full Stack .NET",
    company: "Tu Empresa Principal",
    period: "2023 - Presente",
    location: "Remoto, Argentina",
    description: "Desarrollo de aplicaciones web con ASP.NET Core y Blazor, implementación de arquitecturas escalables en Azure.",
    website: "https://example.com",
  },
  {
    title: "Ingeniero de Software",
    company: "Empresa Internacional",
    period: "2021 - 2023",
    location: "Italia / Portugal",
    description: "Trabajo en proyectos de transformación digital, optimización de procesos y desarrollo de APIs RESTful.",
    website: "https://example.com",
  },
  {
    title: "Desarrollador Backend",
    company: "Startup Tecnológica",
    period: "2019 - 2021",
    location: "Buenos Aires, Argentina",
    description: "Desarrollo de microservicios con .NET Core, implementación de CI/CD y trabajo con bases de datos SQL Server.",
    website: "https://example.com",
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12"> 
  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
    Experiencia
  </h2>
  <p className="text-muted-foreground text-lg max-w-2xl">
    Mi trayectoria profesional en desarrollo de software y transformación digital
  </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Building2 size={16} />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-foreground mb-4">
                    {exp.description}
                  </p>

                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 group-hover:gap-3"
                  >
                    <span>Visitar sitio web</span>
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Company Logo Placeholder */}
                <div className="md:w-24 md:h-24 w-full h-20 flex items-center justify-center bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Building2 size={32} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
