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
        title: "Analista Funcional y Desarrollador Full Stack",
        subtitle: "Bienvenido a mi portafolio personal",
        cta: "Ver proyectos",
        contact: "Contactar"
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
        title: "Functional Analyst & Full Stack Developer",
        subtitle: "Welcome to my personal portfolio",
        cta: "View projects",
        contact: "Contact me"
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
