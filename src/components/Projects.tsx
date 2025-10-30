import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Sistema de Turnos Virtual",
    description: "Agendamiento Oftalmológico Flexible con ASP.NET Core y Blazor.",
    technologies: ["ASP.NET Core", "Blazor", "SQL Server", "Azure"],
    status: "Completado",
    github: "https://github.com/tomiraspo/Sistema-Turnos",
  },
  {
    title: "API RESTful E-Commerce",
    description: "API escalable para plataforma de e-commerce con autenticación JWT y integración con pasarelas de pago",
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server"],
    status: "Completado",
    github: "https://github.com/tomiraspo/Sistema-Turnos",
    demo: "#",
  },
  {
    title: "Sistema de Gestión de Inventario",
    description: "Aplicación desktop multiplataforma para control de inventario y facturación",
    technologies: [".NET MAUI", "SQLite", "Azure Functions"],
    status: "En Progreso",
    github: "#",
  },
  {
    title: "Portal Web Corporativo",
    description: "Portal web responsive con panel de administración y sistema de autenticación",
    technologies: ["Blazor", "Bootstrap", "Azure App Service"],
    status: "Completado",
    github: "#",
    demo: "#",
  },
  {
    title: "Microservicios con Docker",
    description: "Arquitectura de microservicios containerizada con Docker y comunicación mediante RabbitMQ",
    technologies: ["Docker", "ASP.NET Core", "RabbitMQ", "Azure"],
    status: "En Progreso",
    github: "#",
  },
  {
    title: "Dashboard Analítico",
    description: "Dashboard interactivo para visualización de métricas y KPIs en tiempo real",
    technologies: ["Blazor", "SignalR", "Azure SQL", "Chart.js"],
    status: "Completado",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Mis Proyectos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explora una selección de proyectos que demuestran mis habilidades en desarrollo Full Stack con .NET, Azure y tecnologías modernas
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)] flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
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
                  variant={project.status === "Completado" ? "default" : "secondary"}
                  className={project.status === "Completado" ? "bg-primary/80" : ""}
                >
                  {project.status}
                </Badge>
              </CardContent>
              <CardFooter className="gap-2">
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
      </div>
    </section>
  );
};

export default Projects;
