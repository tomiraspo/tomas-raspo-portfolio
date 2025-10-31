import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import certEsba from "@/assets/certificates/cert-esba.jpg";
import certAspnet from "@/assets/certificates/cert-aspnet.jpg";
import certAzure from "@/assets/certificates/cert-azure.jpg";
import certDocker from "@/assets/certificates/cert-docker.jpg";
import certBlazo from "@/assets/certificates/cert-blazor.jpg";
import certCleanArch from "@/assets/certificates/cert-clean-arch.jpg";
import certEfCore from "@/assets/certificates/cert-ef-core.jpg";
import certSql from "@/assets/certificates/cert-sql.jpg";

const certifications = [
  {
    date: "Diciembre 2023",
    title: "Tecnico Superior en Análisis de Sistemas",
    organization: "Esba (Instituto Superior de Buenos Aires)",
    link: "https://drive.google.com/file/d/1mx2H5mGKtQhDfCaV9dqOH127i2m53gNx/view?usp=sharing",
    image: certEsba,
  },
  {
    date: "Enero 20025",
    title: "ASP.NET Core Web API Development",
    organization: "Udemy",
    link: "#",
    image: certAspnet,
  },
  {
    date: "Noviembre 2024",
    title: "Microsoft Certified: Azure Fundamentals",
    organization: "Microsoft",
    link: "#",
    image: certAzure,
  },
  {
    date: "Septiembre 2024",
    title: "Docker & Kubernetes: The Complete Guide",
    organization: "Udemy",
    link: "#",
    image: certDocker,
  },
  {
    date: "Julio 2024",
    title: "Blazor WebAssembly Advanced",
    organization: "Pluralsight",
    link: "#",
    image: certBlazo,
  },
  {
    date: "Mayo 2024",
    title: "Clean Architecture with .NET",
    organization: "Udemy",
    link: "#",
    image: certCleanArch,
  },
  {
    date: "Marzo 2024",
    title: "Entity Framework Core - The Complete Guide",
    organization: "Udemy",
    link: "#",
    image: certEfCore,
  },
  {
    date: "Enero 2024",
    title: "SQL Server Advanced Queries",
    organization: "LinkedIn Learning",
    link: "#",
    image: certSql,
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {certifications.map((cert, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)] h-full">
                  <CardHeader className="pb-3">
                    <div className="aspect-video mb-3 rounded-md overflow-hidden bg-muted">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge variant="secondary" className="w-fit mb-2 bg-secondary/50">
                      {cert.date}
                    </Badge>
                    <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <p className="text-muted-foreground text-sm">{cert.organization}</p>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Certifications;
