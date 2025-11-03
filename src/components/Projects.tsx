import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin } from "lucide-react";

const projectsData = [
  {
    title: "Sistema de Turnos Virtual",
    description: "Agendamiento Oftalmológico Flexible con ASP.NET Core y Blazor.",
    technologies: ["ASP.NET Core", "Blazor", "SQL Server", "Azure"],
    status: "Completado",
    github: "https://github.com/tomiraspo/Sistema-Turnos",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7384221305383936000/",
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
                
                {/* 1. Botón de GitHub */}
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
                
                {/* 2. Botón de LinkedIn (Nuevo) */}
                {project.linkedin && (
                    <Button
                      variant="default" // Utiliza el estilo primario para que resalte
                      size="sm"
                      className="bg-primary/90 hover:bg-primary"
                      asChild
                    >
                        <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            Ver Demo (Video)
                        </a>
                    </Button>
                )}
                
                {/* 3. Botón de Demo (Existente) */}
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
