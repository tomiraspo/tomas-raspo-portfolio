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

import CertESBA from "@/assets/certificates/TecnicoAnalista.png";
import EFCore from "@/assets/certificates/EF Core.png";
import DiplomaturaEnRedesInformaticas from "@/assets/certificates/DiplomaturaEnRedesInformaticas.png";
import LeadershipPORTUGAL from "@/assets/certificates/LeadershipPORTUGAL.png";
import LeadershipITALIA from "@/assets/certificates/LeadershipITALIA.png";
import SpeakEnglish from "@/assets/certificates/SpeakEnglish.png";
import ComunicacionLaboralXXI from "@/assets/certificates/ComunicacionLaboral.png";
import InicioYPlanificacionProyectos from "@/assets/certificates/InicioYPlanificacionProyectos.png";
import InglesEmpresarial from "@/assets/certificates/InglesEmpresarial.jpg";
import HabilidadesHumanas from "@/assets/certificates/HabilidadesHumanas.png";
import NegociosInternacionales from "@/assets/certificates/NegociosInternacionales.jpg";
import TrabajarParaSerFeliz from "@/assets/certificates/TrabajarParaSerFeliz.png";
import GoogleActivatex2 from "@/assets/certificates/GoogleActivatex2.png";
import TrabajarInteligente from "@/assets/certificates/TrabajarInteligente.png";
import MiPrimerEmpleo from "@/assets/certificates/MiPrimerEmpleo.png";
import Italiano from "@/assets/certificates/Italiano.png";
import AprendiendoAAprender from "@/assets/certificates/AprendiendoAAprender.png";
import FinanzasPersonales from "@/assets/certificates/FinanzasPersonales.png";
import educacionIT from "@/assets/certificates/Java.png";
import ProgramacionPython from "@/assets/certificates/ProgramacionPython.png";

const certifications = [
  {
    date: "December 2023",
    title: "Tecnico Superior en Análisis de Sistemas",
    organization: "Esba (Instituto Superior de Buenos Aires)",
    link: "https://drive.google.com/file/d/1mx2H5mGKtQhDfCaV9dqOH127i2m53gNx/view?usp=sharing",
    image: CertESBA,
  },
  {
    date: "July 2023",
    title: "Diplomatura en Redes Informáticas",
    organization: "Esep (Escuela Superior de Estudios Profesionales)",
    link: "https://drive.google.com/file/d/1YwLhDMPC9fUXpWkAPUnxrfWYLC_Mk0LH/view?usp=sharing",
    image: DiplomaturaEnRedesInformaticas,
  },
  {
    date: "May 2024",
    title: "Leadership Development Portugal",
    organization: "AIESEC",
    link: "https://drive.google.com/file/d/1Of84sTg-LWigKpQpynb8h4-Gf6OFHtHE/view?usp=sharing",
    image: LeadershipPORTUGAL,
  },
  {
    date: "June 2025",
    title: "Leadership Development Italia",
    organization: "AIESEC",
    link: "https://drive.google.com/file/d/1tvRk9lBgdxtxt9NNoLizLNT8fo0PGEqb/view?usp=sharing",
    image: LeadershipITALIA,
  },
  {
    date: "July 2025",
    title: "EF SET English Certificate",
    organization: "EF SET",
    link: "https://drive.google.com/file/d/1SGRniIEP56btSBC6vCl6nom5nxwxoVEU/view?usp=sharing",
    image: EFCore,
  },
  {
    date: "January 2021",
    title: "Speak English Professionally: In Person, Online and on the Phone",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1SKy3A_S-Q1AyCq2XWOhBj08zm-vowESo/view?usp=sharing",
    image: SpeakEnglish,
  },
  {
    date: "January 2021",
    title: "La comunicación laboral en el siglo XXI",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1GXcw6mjqRLdUzz7Zzjavv24HdLt4zCfi/view?usp=sharing",
    image: ComunicacionLaboralXXI,
  },
  {
    date: "January 2021",
    title: "Iniciación y Planificación de Proyectos",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1cGes4AjKdGoXNpWjnNajwgsWqcTxeaSF/view?usp=sharing",
    image: InicioYPlanificacionProyectos,
  },
  {
    date: "November 2020",
    title: "Inglés Empresarial: Gestión y Liderazgo",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1cRPNqxg_BFMSjx8GwzCJCtIG_dewdqPX/view?usp=sharing",
    image: InglesEmpresarial,
  },
  {
    date: "January 2021",
    title: "Habilidades humanas y de negocios para negociar",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1q4snTdFAllmbQB_ZGg9Dg8x_slZ11XYl/view?usp=sharing",
    image: HabilidadesHumanas,
  },
  {
    date: "November 2020",
    title: "Negocios Internacionales I",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1413d4Rg2gEvgQWjAosvWKKrenncuJw7G/view?usp=sharing",
    image: NegociosInternacionales,
  },
  {
    date: "November 2020",
    title: "Trabajar para ser feliz",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1mveVxhyMTTa5sZJ66AZvLrNRjMCrv-R8/view?usp=sharing",
    image: TrabajarParaSerFeliz,
  },
  {
    date: "January 2022",
    title: "Fundamentos de Marketing Digital",
    organization: "Google Actívate",
    link: "https://drive.google.com/file/d/1nTG7Ya8bvNz-cH0uQuOdatmq8qvoEcwq/view?usp=sharing",
    image: GoogleActivatex2,
  },
  {
    date: "January 2021",
    title: "Trabaja inteligentemente, no más duro: Gestión del tiempo para la productividad personal y profesional",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1Vf2aIA16VfcRQVgzAmvwTzDAoBYms5UB/view?usp=sharing",
    image: TrabajarInteligente,
  },
  {
    date: "January 2021",
    title: "Mi Primer Empleo (MPE)",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1TLGFWf_SwYc7yMBejb2WTjdIFV6Vb3OX/view?usp=sharing",
    image: MiPrimerEmpleo,
  },
  {
    date: "January 2021",
    title: "Aprendiendo a aprender: Poderosas herramientas mentales con las que podrás dominar temas difíciles (Learning How to Learn)",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1ju00NAV-kqoOiO3_plFRYHWd6FZ4_SI2/view?usp=sharing",
    image: AprendiendoAAprender,
  },
  {
    date: "April 2025",
    title: "Corsi di Italiano",
    organization: "Scuola Senza Frontiere OdV “SANDRO SACCANI” Mantova",
    link: "https://drive.google.com/file/d/1wI0vpwymTmd1lvdkeL3sSznTDiJ8EB6l/view?usp=sharing",
    image: Italiano,
  },
  {
    date: "April 2023",
    title: "Programación en Python",
    organization: "Argentina Programa 4.0 de la Secretaría de Economía de la Nación",
    link: "https://drive.google.com/file/d/1NMybonIJ6L6l2d1NOefTTUfvLDLtZ2S5/view?usp=sharing",
    image: ProgramacionPython,
  },
  {
    date: "October 2022",
    title: "Java",
    organization: "educacion IT",
    link: "https://drive.google.com/file/d/1kaJ1hjXsD5M4r53-fgInLYFW4Z47bxmt/view?usp=sharing",
    image: educacionIT,
  },
  {
    date: "December 2020",
    title: "Finanzas personales",
    organization: "Coursera",
    link: "https://drive.google.com/file/d/1yvRJGkrtP3j2WuR4PCj4oc6wYa7sQpTw/view?usp=sharing",
    image: FinanzasPersonales,
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
