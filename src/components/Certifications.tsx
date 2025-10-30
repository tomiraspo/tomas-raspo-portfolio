import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    date: "Diciembre 2023",
    title: "Tecnico Superior en Análisis de Sistemas",
    organization: "Esba (Instituto Superior de Buenos Aires)",
    link: "https://drive.google.com/file/d/1mx2H5mGKtQhDfCaV9dqOH127i2m53gNx/view?usp=sharing",
  },
  {
    date: "Enero 2025",
    title: "ASP.NET Core Web API Development",
    organization: "Udemy",
    link: "#",
  },
  {
    date: "Noviembre 2024",
    title: "Microsoft Certified: Azure Fundamentals",
    organization: "Microsoft",
    link: "#",
  },
  {
    date: "Septiembre 2024",
    title: "Docker & Kubernetes: The Complete Guide",
    organization: "Udemy",
    link: "#",
  },
  {
    date: "Julio 2024",
    title: "Blazor WebAssembly Advanced",
    organization: "Pluralsight",
    link: "#",
  },
  {
    date: "Mayo 2024",
    title: "Clean Architecture with .NET",
    organization: "Udemy",
    link: "#",
  },
  {
    date: "Marzo 2024",
    title: "Entity Framework Core - The Complete Guide",
    organization: "Udemy",
    link: "#",
  },
  {
    date: "Enero 2024",
    title: "SQL Server Advanced Queries",
    organization: "LinkedIn Learning",
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Certificaciones
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Credenciales profesionales que validan mi experiencia y conocimientos técnicos
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]"
            >
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="w-fit mb-2 bg-secondary/50">
                  {cert.date}
                </Badge>
                <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <p className="text-muted-foreground">{cert.organization}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
