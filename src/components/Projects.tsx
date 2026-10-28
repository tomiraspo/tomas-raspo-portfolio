import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin } from "lucide-react";

type Project = {
  titleKey?: string;
  descKey?: string;
  title?: string;
  description?: { es: string; en: string };
  technologies: string[];
  statusKey: string;
  github: string;
  linkedin: string;
  demo?: string;
};

const Projects = () => {
  const { t, i18n } = useTranslation();

  const lang = i18n.language?.slice(0, 2) === "es" ? "es" : "en";

  const projectsData: Project[] = [
    {
      titleKey: "projects.items.turnos.title",
      descKey: "projects.items.turnos.description",
      technologies: ["ASP.NET Core", "Blazor", "SQL Server", "Docker", "DigitalOcean"],
      statusKey: "projects.statusCompleted",
      github: "https://github.com/tomiraspo/Sistema-Turnos",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7384221305383936000/",
    },
    {
      titleKey: "projects.items.clarvision.title",
      descKey: "projects.items.clarvision.description",
      technologies: ["MySQL", "Power BI", "n8n", "Slack", "Excel", "Git"],
      statusKey: "projects.statusCompleted",
      github: "https://github.com/tomiraspo/ClarVision-BI",
      linkedin: "",
    },
    {
      title: "Mochila y Código",
      description: {
                es: "Sitio web personal desarrollado en React y TypeScript, con diseño propio y contenido sobre mis experiencias viviendo y viajando por España, Argentina e Italia.",
        en: "Personal website built with React and TypeScript, with a custom design and content about my experiences living and traveling across Spain, Argentina and Italy.",
      },
      technologies: ["React", "TypeScript", "Vite", "Vercel"],
      statusKey: "projects.statusCompleted",
      github: "",
      linkedin: "",
      demo: "https://mochila-y-codigo.vercel.app/",
    },
  ];

  // Textos del bloque Sistema / Métricas (no toca tus archivos de traducción)
  const copy = {
    es: {
      system: "Sistema",
      systemHint: "Sistema de turnos virtual funcionando en producción",
      metrics: "Métricas",
      metricsHint: "Indicadores y análisis de ClarVision BI",
      cta: "Ver proyecto",
    },
    en: {
      system: "System",
      systemHint: "Virtual appointment system running in production",
      metrics: "Metrics",
      metricsHint: "KPIs and analytics from ClarVision BI",
      cta: "View project",
    },
  }[lang];

  const showcase = [
    {
      title: copy.system,
      hint: copy.systemHint,
      href: "https://161-35-93-46.sslip.io",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7384221305383936000/",
      img: "/turnos.png",
      alt: copy.system,
    },
    {
      title: copy.metrics,
      hint: copy.metricsHint,
      href: "https://github.com/tomiraspo/ClarVision-BI",
      demo: "",
      img: "/metricas.png",
      alt: copy.metrics,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("projects.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)] flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-foreground">
                  {project.titleKey ? t(project.titleKey) : project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.descKey ? t(project.descKey) : project.description?.[lang]}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Badge
                  variant="default"
                  className="bg-primary/80"
                >
                  {t(project.statusKey)}
                </Badge>
              </CardContent>
              <CardFooter className="gap-2">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.linkedin && (
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-primary/90 hover:bg-primary"
                    asChild
                  >
                    <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      {t("projects.viewDemo")}
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pantalla dividida en dos mitades iguales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {showcase.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-xl border border-primary/20 bg-card/50 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]"
            >
              <div className="p-5 pb-3">
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.hint}</p>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden bg-background/40"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </a>
              <div className="flex flex-wrap gap-3 p-4">
                <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {copy.cta}
                  </a>
                </Button>
                {item.demo && (
                  <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                    <a href={item.demo} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      {t("projects.viewDemo")}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
