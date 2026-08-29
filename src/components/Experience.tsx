import { useTranslation } from "react-i18next";
import { Building2, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

interface ExperienceItem {
  titleKey: string;
  company: string;
  period: string;
  location: string;
  descriptionKey: string;
  logo?: string;
  website: string;
}

const Experience = () => {
  const { t } = useTranslation();

  const experiences: ExperienceItem[] = [
    {
      titleKey: "experience.items.odesur.title",
      company: "Organización Deportiva Suramericana (ODESUR)",
      period: "ago. 2026 - actualidad",
      location: "Rafaela, Santa Fe, Argentina",
      descriptionKey: "experience.items.odesur.description",
      website: "https://odesur.org/",
      logo: "/odesur.png",
    },
    {
      titleKey: "experience.items.pitentino.title",
      company: "ITES Alberto Pitentino",
      period: "2025",
      location: "Mantova, Italia",
      descriptionKey: "experience.items.pitentino.description",
      website: "https://www.pitentino.edu.it/",
      logo: "/EscuelaItalia.jpg",
    },
    {
      titleKey: "experience.items.wildsmile.title",
      company: "Wildsmile",
      period: "2023 - 2025",
      location: "Portugal / Portalegre",
      descriptionKey: "experience.items.wildsmile.description",
      website: "https://wildsmile.com/pt/pt-PT?_gl=1*1shswgx*_up*MQ..*_ga*NjU3NjEzOTk1LjE3NjIxMzAyNDc.*_ga_FZVN1D8Y4J*czE3NjIxMzAyNDYkbzEkZzEkdDE3NjIxMzAyNjEkajQ1JGwwJGgw",
      logo: "/Empresa.png",
    },
    {
      titleKey: "experience.items.ioba.title",
      company: "IOBA",
      period: "2021 - 2023",
      location: "Banfield, Argentina",
      descriptionKey: "experience.items.ioba.description",
      website: "https://www.institutoioba.com/",
      logo: "/IOBAfoto.png",
    },
    {
      titleKey: "experience.items.esba.title",
      company: "ESBA",
      period: "2021 - 2023",
      location: "Buenos Aires, Argentina",
      descriptionKey: "experience.items.esba.description",
      website: "https://esba.edu.ar/tecnicaturas/analisis-de-sistemas-a-distancia/",
      logo: "/Esbafoto.png",
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12"> 
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("experience.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("experience.subtitle")}
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
                        {t(exp.titleKey)}
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
                    {t(exp.descriptionKey)}
                  </p>

                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 group-hover:gap-3"
                  >
                    <span>{t("experience.visitWebsite")}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="md:w-24 md:h-24 w-full h-20 flex items-center justify-center bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
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
