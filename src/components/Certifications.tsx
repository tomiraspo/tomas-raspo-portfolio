import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, GraduationCap, Laptop, Network } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import EFCore from "@/assets/certificates/EF Core.png";
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

const education = [
  {
    icon: GraduationCap,
    title: {
      es: "Licenciatura en Administración y Gestión de la Información",
      en: "Bachelor's in Administration and Information Management",
    },
    organization: {
      es: "UNRaf · a distancia",
      en: "UNRaf · distance learning",
    },
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
    organization: {
      es: "ESBA · Instituto Superior de Buenos Aires",
      en: "ESBA · Instituto Superior de Buenos Aires",
    },
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
    organization: {
      es: "ESEP · Escuela Superior de Estudios Profesionales",
      en: "ESEP · Escuela Superior de Estudios Profesionales",
    },
    date: { es: "Julio 2023", en: "July 2023" },
    progress: 0,
    link: "https://drive.google.com/file/d/1YwLhDMPC9fUXpWkAPUnxrfWYLC_Mk0LH/view?usp=sharing",
  },
];

const certifications = [
  {
    date: "June 2025",
    title: "Leadership Development Italia",
    organization: "AIESEC",
    link: "https://drive.google.com/file/d/1tvRk9lBgdxtxt9NNoLizLNT8fo0PGEqb/view?usp=sharing",
    image: LeadershipITALIA,
  },
  {
    date: "May 2024",
    title: "Leadership Development Portugal",
    organization: "AIESEC",
    link: "https://drive.google.com/file/d/1Of84sTg-LWigKpQpynb8h4-Gf6OFHtHE/view?usp=sharing",
    image: LeadershipPORTUGAL,
  },
  {
    date: "July 2025",
    title: "EF SET English Certificate",
    organization: "EF SET",
    link: "https://drive.google.com/file/d/1SGRniIEP56btSBC6vCl6nom5nxwxoVEU/view?usp=sharing",
    image: EFCore,
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
    organization:
