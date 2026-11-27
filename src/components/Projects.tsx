import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Linkedin } from "lucide-react";

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

  // Carrusel del bloque Sistema
  const [systemSlide, setSystemSlide] = useState(0);
  const [systemPaused, setSystemPaused] = useState(false);

  // Carrusel del bloque Métricas
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const projectsData: Project[] = [
    {
      titleKey: "projects.items.turnos.title",
      descKey: "projects.items.turnos.description",
      technologies: ["ASP.NET Core", "Blazor", "SQL Server", "Docker", "DigitalOcean"],
      statusKey: "projects.statusCompleted",
      github: "",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7384221305383936000/",
    },
    {
      titleKey: "projects.items.financial.title",
      descKey: "projects.items.financial.description",
      technologies: ["MySQL", "Power BI", "n8n", "Slack", "AR/AP"],
      statusKey: "projects.statusCompleted",
      github: "https://github.com/tomiraspo/financial-control-tower",
      linkedin: "",
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
    {
      title: "Hotel Reserva & Automatización MVP",
      description: {
        es: "MVP de reservas de alojamientos con React y Vite en el frontend, FastAPI y MySQL en el backend, y modo demo interactivo con localStorage en Vercel.",
        en: "Accommodation booking MVP with React and Vite on the frontend, FastAPI and MySQL on the backend, and an interactive localStorage demo mode on Vercel.",
      },
      technologies: ["React", "Vite", "FastAPI", "MySQL", "n8n", "Vercel"],
      statusKey: "projects.statusInProgress",
      github: "https://github.com/tomiraspo/hotel-reserva-mvp",
      linkedin: "",
      demo: "https://hotel-reserva-mvp.vercel.app/",
    },
  ];

  // Textos del bloque Sistema / Métricas (no toca tus archivos de traducción)
  const copy = {
    es: {
      system: "Sistema",
      systemHint: "Sistema de turnos virtual funcionando en producción",
      hotelHint: "MVP de reservas con demo interactiva en Vercel",
      metrics: "Métricas",
      metricsHint: "Indicadores y análisis de ClarVision BI",
      financialHint: "Antigüedad de deuda, riesgo y flujo de caja",
      cta: "Ver proyecto",
      prev: "Anterior",
      next: "Siguiente",
    },
    en: {
      system: "System",
      systemHint: "Virtual appointment system running in production",
      hotelHint: "Booking MVP with interactive demo on Vercel",
      metrics: "Metrics",
      metricsHint: "KPIs and analytics from ClarVision BI",
      financialHint: "Debt aging, risk and cash flow",
      cta: "View project",
      prev: "Previous",
      next: "Next",
    },
  }[lang];

  const systemSlides = [
    {
      name: "Sistema de Turnos Virtual",
      hint: copy.systemHint,
      href: "https://161-35-93-46.sslip.io",
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7384221305383936000/",
      img: "/turnos.png",
    },
    {
      name: "Hotel Reserva MVP",
      hint: copy.hotelHint,
      href: "https://hotel-reserva-mvp.vercel.app/",
      demo: "",
      img: "/hotel-reserva.png",
    },
  ];

  const currentSystem = systemSlides[systemSlide];

  const goSystemPrev = () => setSystemSlide((s) => (s - 1 + systemSlides.length) % systemSlides.length);
  const goSystemNext = () => setSystemSlide((s) => (s + 1) % systemSlides.length);

  useEffect(() => {
    if (systemPaused) return;
    const id = setInterval(() => {
      setSystemSlide((s) => (s + 1) % systemSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [systemPaused, systemSlides.length]);

  const metricsSlides = [
    {
      name: "ClarVision BI",
      hint: copy.metricsHint,
      href: "https://github.com/tomiraspo/ClarVision-BI",
      img: "/metricas.png",
    },
    {
      name: "Financial Control Tower",
      hint: copy.financialHint,
      href: "https://github.com/tomiraspo/financial-control-tower",
      img: "/financial-tower.svg",
    },
  ];

  const current = metricsSlides[slide];

  const goPrev = () => setSlide((s) => (s - 1 + metricsSlides.length) % metricsSlides.length);
  const goNext = () => setSlide((s) => (s + 1) % metricsSlides.length);

  // Cambia sola cada 6 segundos, y se frena si pasás el mouse por encima
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % metricsSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, metricsSlides.length]);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("projects.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
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
                      {lang === "es" ? "Sitio web" : "Website"}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pantalla dividida en dos mitades iguales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Sistema: carrusel con Sistema de Turnos Virtual y Hotel Reserva MVP */}
          <div
            className="group overflow-hidden rounded-xl border border-primary/20 bg-card/50 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]"
            onMouseEnter={() => setSystemPaused(true)}
            onMouseLeave={() => setSystemPaused(false)}
          >
            <div className="p-5 pb-3">
              <h3 className="text-2xl font-bold text-foreground">{copy.system}</h3>
              <p className="text-sm text-muted-foreground">{currentSystem.hint}</p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-background/40">
              {systemSlides.map((s, i) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-hidden={i !== systemSlide}
                  tabIndex={i === systemSlide ? 0 : -1}
                  className={`absolute inset-0 block transition-opacity duration-700 ${
                    i === systemSlide ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    {s.name}
                  </span>
                </a>
              ))}

              <button
                type="button"
                onClick={goSystemPrev}
                aria-label={copy.prev}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-primary/30 bg-background/70 p-2 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goSystemNext}
                aria-label={copy.next}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-primary/30 bg-background/70 p-2 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 p-4">
              <div className="flex flex-wrap gap-3">
                <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                  <a href={currentSystem.href} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {copy.cta}
                  </a>
                </Button>
                {currentSystem.demo && (
                  <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                    <a href={currentSystem.demo} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      {t("projects.viewDemo")}
                    </a>
                  </Button>
                )}
              </div>
              <div className="flex items-center gap-2">
                {systemSlides.map((s, i) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setSystemSlide(i)}
                    aria-label={s.name}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === systemSlide ? "w-6 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Métricas: carrusel con ClarVision BI y Financial Control Tower */}
          <div
            className="group overflow-hidden rounded-xl border border-primary/20 bg-card/50 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="p-5 pb-3">
              <h3 className="text-2xl font-bold text-foreground">{copy.metrics}</h3>
              <p className="text-sm text-muted-foreground">{current.hint}</p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-background/40">
              {metricsSlides.map((s, i) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-hidden={i !== slide}
                  tabIndex={i === slide ? 0 : -1}
                  className={`absolute inset-0 block transition-opacity duration-700 ${
                    i === slide ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    {s.name}
                  </span>
                </a>
              ))}

              <button
                type="button"
                onClick={goPrev}
                aria-label={copy.prev}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-primary/30 bg-background/70 p-2 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label={copy.next}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-primary/30 bg-background/70 p-2 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 p-4">
              <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                <a href={current.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {copy.cta}
                </a>
              </Button>
              <div className="flex items-center gap-2">
                {metricsSlides.map((s, i) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setSlide(i)}
                    aria-label={s.name}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === slide ? "w-6 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
