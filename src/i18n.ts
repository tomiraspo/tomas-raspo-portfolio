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
