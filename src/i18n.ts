import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        experience: "Experiencia",
        certifications: "Certificaciones",
        contact: "Contacto"
      },
      hero: {
        role: "Analista Funcional y Desarrollador de Sistemas",
        location: "Remoto, Argentina",
        downloadCv: "Descargar CV"
      },
      about: {
        title: "Sobre Mí",
        p1_1: "Soy ",
        p1_bold: "Analista Funcional y Desarrollador Full Stack",
        p1_2: ", con especialización en el ecosistema ",
        p1_bold2: ".NET (C#) y TypeScript",
        p1_3: ". Mi perfil se define por la intersección entre el desarrollo técnico y la gestión de la información, carrera que curso actualmente para optimizar la estructura y el flujo de datos en las organizaciones.",
        p2_1: "Cuento con experiencia en el diseño e implementación de soluciones de software de alta disponibilidad, destacando el desarrollo de un sistema de gestión de turnos virtuales. Mi rol en estos proyectos no solo ha sido técnico, sino también de ",
        p2_bold: "análisis y traducción de procesos de negocio",
        p2_2: " en arquitecturas escalables y eficientes.",
        p3_1: "Mi enfoque actual integra el ",
        p3_bold: "Análisis de Datos",
        p3_2: " para fundamentar la toma de decisiones. Me especializo en asegurar que el ciclo de vida del desarrollo esté alineado con los objetivos estratégicos, garantizando que cada funcionalidad responda a una necesidad real del negocio y del usuario final.",
        p4: "A lo largo de mi trayectoria en Argentina, Italia y Portugal, he trabajado bajo metodologías ágiles y estándares de Clean Code, priorizando siempre la entrega de software mantenible y de impacto directo en la operativa de la empresa."
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        certifications: "Certifications",
        contact: "Contact"
      },
      hero: {
        role: "Functional Analyst & Systems Developer",
        location: "Remote, Argentina",
        downloadCv: "Download CV"
      },
      about: {
        title: "About Me",
        p1_1: "I am a ",
        p1_bold: "Functional Analyst & Full Stack Developer",
        p1_2: ", specializing in the ",
        p1_bold2: ".NET (C#) and TypeScript",
        p1_3: " ecosystem. My profile is defined by the intersection of technical development and information management, a degree I am currently pursuing to optimize data structure and flow in organizations.",
        p2_1: "I have experience in designing and implementing high-availability software solutions, highlighted by the development of a virtual queue management system. My role in these projects has been not only technical, but also focused on ",
        p2_bold: "analyzing and translating business processes",
        p2_2: " into scalable and efficient architectures.",
        p3_1: "My current approach integrates ",
        p3_bold: "Data Analysis",
        p3_2: " to support decision-making. I specialize in ensuring that the development lifecycle aligns with strategic goals, guaranteeing that every feature responds to a real business and end-user need.",
        p4: "Throughout my career in Argentina, Italy, and Portugal, I have worked under agile methodologies and Clean Code standards, always prioritizing the delivery of maintainable software with a direct impact on business operations."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
