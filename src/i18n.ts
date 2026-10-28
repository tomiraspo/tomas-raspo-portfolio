import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
        contact: "Contacto",
      },
      hero: {
        role: "Analista Funcional y de Sistemas · Datos y Automatización",
        location: "Remoto, Argentina",
        downloadCv: "Descargar CV",
      },
      about: {
        title: "Sobre Mí",
        subtitle: "Conoce más sobre mi trayectoria y habilidades",
        p1_1: "Soy ",
        p1_bold: "Analista Funcional y de Sistemas",
        p1_2: ". Traduzco las necesidades del negocio en requerimientos claros y, cuando hace falta, las convierto en software con ",
        p1_bold2: ".NET (C#) y TypeScript.",
        p1_3: " Eso me permite acompañar un proyecto desde el relevamiento hasta que está funcionando.",
        p2_1: "Uso datos y automatización para resolver problemas concretos de operación. En ",
        p2_bold: "ClarVision BI",
        p2_2: " armé el circuito completo para detectar el ausentismo de una clínica: base de datos en MySQL, dashboard en Power BI y alertas automáticas con n8n.",
        p3_1: "Además de analizar, construyo: mi ",
        p3_bold: "Sistema de Turnos",
        p3_2: " (C#, .NET y Docker) funciona en producción y puede probarse con una cuenta demo.",
        p4: "He trabajado en Argentina, Italia y Portugal bajo metodologías ágiles, priorizando documentación clara y software mantenible.",
      },
      skills: {
        title: "Habilidades Técnicas",
        languages: "Lenguajes",
        frameworks: "Frameworks & Librerías",
        databases: "Bases de Datos",
        cloud: "Cloud & DevOps",
        tools: "Herramientas",
        versionControl: "Control de Versiones",
      },
      projects: {
        title: "Proyectos Destacados",
        subtitle: "Algunos de los trabajos más relevantes que he desarrollado",
        statusCompleted: "Completado",
        viewDemo: "Ver Demo (Video)",
        items: {
          turnos: {
            title: "Sistema de Turnos Virtual",
            description: "Sistema de turnos online para clínicas oftalmológicas: agenda flexible para el paciente y gestión centralizada para la clínica. Hecho con ASP.NET Core y Blazor, en producción con cuenta demo.",
          },
          clarvision: {
            title: "ClarVision BI",
            description: "Sistema de inteligencia operacional para una clínica oftalmológica (proyecto demo con datos de ejemplo). Dashboard en Power BI, alertas automáticas de ausentismo crítico y reporte semanal por Slack con n8n.",
          },
        },
      },
      experience: {
        title: "Experiencia Laboral",
        subtitle: "Mi trayectoria profesional y proyectos previos",
        visitWebsite: "Visitar sitio web",
        viewReference: "Ver constancia",
        items: {  
          odesur: {
            title: "Auxiliar Informático",
            description: "Gestión logística de infraestructura IT, control de inventarios, coordinación de proveedores y seguimiento de incidencias.",
          },
          pitentino: {
            title: "IT Educador",
            description: "Representante Argentino de clases impartidas sobre Prompts, Sustentabilidad y cultura en escuela económica con integración de Programación.",
          },
          wildsmile: {
            title: "Analista Funcional y de sistemas",
            description: "Análisis y soporte de sistemas empresariales en el mercado europeo utilizando Java (Play Framework / MVC). Participación activa en el relevamiento funcional de lógica comercial y migración SVN a Git.",
          },
          ioba: {
            title: "Analista de Sistemas",
            description: "Co-diseño y desarrollo en equipo de un sistema integral de turnos virtuales enfocado en clínicas oftalmológicas, aplicando Clean Architecture y DDD.",
          },
          esba: {
            title: "Prácticas Profesionalizantes",
            description: "Integración de Sistemas y Programación de Servidores.",
          },
        },
      },
      certifications: {
        title: "Certificaciones y Cursos",
        subtitle: "Formación continua y certificaciones obtenidas a lo largo de mi carrera",
      },
      contact: {
        title: "Contacto",
        subtitle: "¿Tienes algún proyecto en mente o consulta? No dudes en escribirme",
        infoTitle: "Información de Contacto",
        email: "Correo Electrónico",
        location: "Ubicación",
        locationValue: "Santa Fe, Argentina",
        availability: "Disponibilidad",
        availabilityValue: "Disponible para proyectos freelance y oportunidades laborales",
        downloadCvTitle: "Currículum Vitae",
        downloadCvDesc: "Descarga mi CV en formato PDF",
        downloadCvBtn: "Descargar CV",
        formTitle: "Envíame un Mensaje",
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "tu@email.com",
        subjectLabel: "Asunto",
        subjectPlaceholder: "Asunto del mensaje",
        messageLabel: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje aquí...",
        sendBtn: "Enviar Mensaje",
      },
      footer: {
        createdBy: "Creado por Tomás Raspo.",
        rights: "Todos los derechos reservados.",
      },
    },
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
        contact: "Contact",
      },
      hero: {
        role: "Functional & Systems Analyst · Data & Automation",
        location: "Remote, Argentina",
        downloadCv: "Download CV",
      },
      about: {
        title: "About Me",
        subtitle: "Learn more about my background and skills",
        p1_1: "I am a ",
        p1_bold: "Functional & Systems Analyst",
        p1_2: ". I turn business needs into clear requirements and, when needed, build them into software with ",
        p1_bold2: ".NET (C#) and TypeScript.",
        p1_3: " That lets me support a project from requirements gathering until it is up and running.",
        p2_1: "I use data and automation to solve concrete operational problems. In ",
        p2_bold: "ClarVision BI",
        p2_2: " I built the full cycle to detect absenteeism in a clinic: a MySQL database, a Power BI dashboard and automatic alerts with n8n.",
        p3_1: "Beyond analysis, I build: my ",
        p3_bold: "Appointment System",
        p3_2: " (C#, .NET and Docker) runs in production and can be tried with a demo account.",
        p4: "I have worked in Argentina, Italy and Portugal under agile methodologies, prioritizing clear documentation and maintainable software.",
      },
      skills: {
        title: "Technical Skills",
        languages: "Languages",
        frameworks: "Frameworks & Libraries",
        databases: "Databases",
        cloud: "Cloud & DevOps",
        tools: "Tools",
        versionControl: "Version Control",
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Some of the most relevant projects I have developed",
        statusCompleted: "Completed",
        viewDemo: "Watch Demo (Video)",
        items: {
          turnos: {
            title: "Virtual Appointment System",
            description: "Online appointment system for ophthalmology clinics: flexible scheduling for patients and centralized management for the clinic. Built with ASP.NET Core and Blazor, running in production with a demo account.",
          },
          clarvision: {
            title: "ClarVision BI",
            description: "Operational intelligence system for an ophthalmology clinic (demo project with sample data). Power BI dashboard, automatic alerts for critical absenteeism and a weekly Slack report with n8n.",
          },
        },
      },
      experience: {
        title: "Work Experience",
        subtitle: "My professional journey and previous projects",
        visitWebsite: "Visit website",
        viewReference: "View certificate",
        items: {
          odesur: {
            title: "IT Assistant",
            description: "Logistics management of IT infrastructure, inventory tracking, vendor coordination, and incident resolution.",
          },
          pitentino: {
            title: "IT Educator",
            description: "Argentine representative teaching classes on Prompts, Sustainability, and culture in an economics school with programming integration.",
          },
          wildsmile: {
            title: "Systems & Functional Analyst",
            description: "Enterprise systems analysis and support for the European market using Java (Play Framework / MVC). Active participation in functional requirements gathering for business logic and SVN to Git migration.",
          },
          ioba: {
            title: "Systems Analyst",
            description: "Co-design and team development of a comprehensive virtual appointment system focused on ophthalmology clinics, applying Clean Architecture and DDD.",
          },
          esba: {
            title: "Professional Internship",
            description: "Systems Integration and Server Programming.",
          },
        },
      },
      certifications: {
        title: "Certifications & Courses",
        subtitle: "Continuous training and certifications earned throughout my career",
      },
      contact: {
        title: "Contact",
        subtitle: "Have a project in mind or a question? Feel free to write to me",
        infoTitle: "Contact Information",
        email: "Email",
        location: "Location",
        locationValue: "Santa Fe, Argentina",
        availability: "Availability",
        availabilityValue: "Available for freelance projects and job opportunities",
        downloadCvTitle: "Curriculum Vitae",
        downloadCvDesc: "Download my CV in PDF format",
        downloadCvBtn: "Download CV",
        formTitle: "Send Me a Message",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Message subject",
        messageLabel: "Message",
        messagePlaceholder: "Write your message here...",
        sendBtn: "Send Message",
      },
      footer: {
        createdBy: "Created by Tomás Raspo.",
        rights: "All rights reserved.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
