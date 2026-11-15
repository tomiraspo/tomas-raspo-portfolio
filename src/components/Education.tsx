import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, GraduationCap, Laptop, Network } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: {
      es: "Licenciatura en Administración y Gestión de la Información",
      en: "Bachelor's in Administration and Information Management",
    },
    organization: "UNRaf · a distancia / distance learning",
    date: { es: "En curso", en: "In progress" },
    progress: 50,
    link: "",
  },
  {
    icon: Laptop,
    title: {
      es: "Técnico Superior en Análisis de Sistemas",
      en: "Higher Technician in Systems Analysis",
    },
    organization: "ESBA · Instituto Superior de Buenos Aires",
    date: { es: "Diciembre 2023", en: "December 2023" },
    progress: 0,
    link: "https://drive.google.com/file/d/1mx2H5mGKtQhDfCaV9dqOH127i2m53gNx/view?usp=sharing",
  },
  {
    icon: Network,
    title: {
      es: "Diplomatura en Redes Informáticas",
      en: "Diploma in Computer Networks",
    },
    organization: "ESEP · Escuela Superior de Estudios Profesionales",
    date: { es: "Julio 2023", en: "July 2023" },
    progress: 0,
    link: "https://drive.google.com/file/d/1YwLhDMPC9fUXpWkAPUnxrfWYLC_Mk0LH/view?usp=sharing",
  },
];

const Education = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("es") ? "es" : "en";

  return (
    <section id="education" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {lang === "es" ? "Formación académica" : "Education"}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {lang === "es"
            ? "Mi base en análisis de sistemas y gestión de la información"
            : "My foundation in systems analysis and information management"}
        </p>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all h-full"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2 bg-secondary/50">
                    {item.date[lang]}
                  </Badge>
                  <CardTitle className="text-lg text-foreground">
                    {item.title[lang]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-sm">{item.organization}</p>
                    {item.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  {item.progress > 0 && (
                    <div className="mt-4">
                      <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                        <span>{lang === "es" ? "Avance" : "Progress"}</span>
                        <span>~{item.progress}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
