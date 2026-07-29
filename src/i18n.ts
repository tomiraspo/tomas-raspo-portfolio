import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      nav: {
        about: "Sobre mí",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto"
      },
      hero: {
        title: "Analista Funcional y Desarrollador Full Stack",
        subtitle: "Bienvenido a mi portafolio personal",
        cta: "Ver proyectos"
      }
      // Agrega aquí el resto de tus textos en español
    }
  },
  en: {
    translation: {
      nav: {
        about: "About me",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact"
      },
      hero: {
        title: "Functional Analyst & Full Stack Developer",
        subtitle: "Welcome to my personal portfolio",
        cta: "View projects"
      }
      // Agrega aquí las traducciones al inglés
    }
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador automáticamente
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si no detecta otro
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
