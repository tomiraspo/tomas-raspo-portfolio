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
    title: "Voluntario y Ayudante de maestros",
    company: "ITES Alberto Pitentino",
    period: "2025",
    location: "Mantova, Italia",
    description: "Representante Argentino de clases impartidas sobre Prompts, Sustentabilidad y cultura en escuela económica con integración de Programación.",
    website: "https://www.pitentino.edu.it/",
    logo: "/EscuelaItalia.jpg",
  },
  {
    title: "Software Developer",
    company: "Wildsmile",
    period: "2024 - 2025",
    location: "Portugal / Portalegre",
    description: "Trabajo en proyectos en sector DevOps, conocimiento interno de una empresa, Java con Spring y utilización de git con despliegue.",
    website: "https://wildsmile.com/pt/pt-PT?_gl=1*1shswgx*_up*MQ..*_ga*NjU3NjEzOTk1LjE3NjIxMzAyNDc.*_ga_FZVN1D8Y4J*czE3NjIxMzAyNDYkbzEkZzEkdDE3NjIxMzAyNjEkajQ1JGwwJGgw",
    logo: "/Empresa.png",
  },
  {
    title: "Analista en Sistemas - Backend",
    company: "IOBA",
    period: "2022 - 2023",
    location: "Banfield, Argentina",
    description: "Desarrollo y creación de Sistema de Turnos virtuales utilizado como base",
    website: "https://www.institutoioba.com/",
    logo: "/IOBAfoto.png",
  },
  {
    title: "Prácticas Profesionalizantes",
    company: "ESBA",
    period: "2021 - 2023",
    location: "Buenos Aires, Argentina",
    description: "Integracion de Sistemas y Programacion de Servidores",
    website: "https://esba.edu.ar/",
    logo: "/Esbafoto.png",
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
  {exp.logo ? (
    <img
      src={exp.logo}
      alt={`${exp.company} Logo`}
      className="h-full w-full object-contain p-2"
    />
  ) : (
    // Si el campo 'logo' está vacío, muestra el icono genérico
    <Building2 size={32} className="text-muted-foreground group-hover:text-primary transition-colors" />
  )}
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
