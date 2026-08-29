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
        role: "Analista Funcional y Desarrollador de Sistemas",
        location: "Remoto, Argentina",
        downloadCv: "Descargar CV",
      },
      about: {
        title: "Sobre Mí",
        subtitle: "Conoce más sobre mi trayectoria y habilidades",
        p1_1: "Soy ",
        p1_bold: "Analista Funcional y Desarrollador Full Stack",
        p1_2: ", con especialización en el ecosistema ",
        p1_bold2: ".NET (C#) y TypeScript",
        p1_3: ". Mi perfil se define por la intersección entre el desarrollo técnico y la gestión de la información.",
        p2_1: "Cuento con experiencia en el diseño e implementación de soluciones de software de alta disponibilidad, destacando el desarrollo de un sistema de gestión de turnos virtuales. Mi rol ha sido de ",
        p2_bold: "análisis y traducción de procesos de negocio",
        p2_2: " en arquitecturas escalables y eficientes.",
        p3_1: "Mi enfoque actual integra el ",
        p3_bold: "Análisis de Datos",
        p3_2: " para fundamentar la toma de decisiones. Me especializo en asegurar que el ciclo de vida del desarrollo esté alineado con los objetivos estratégicos.",
        p4: "A lo largo de mi trayectoria en Argentina, Italia y Portugal, he trabajado bajo metodologías ágiles y estándares de Clean Code, priorizando la entrega de software mantenible.",
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
            description: "Agendamiento Oftalmológico Flexible con ASP.NET Core y Blazor.",
          },
          clarvision: {
            title: "ClarVision BI",
            description: "Sistema de inteligencia operacional para clínica oftalmológica. Pipeline completo de datos con alertas automáticas de ausentismo crítico y reportes semanales vía Slack.",
          },
        },
      },
      experience: {
        title: "Experiencia Laboral",
        subtitle: "Mi trayectoria profesional y proyectos previos",
        visitWebsite: "Visitar sitio web",
        items: {  
          odesur: {
           title: "Auxiliar Informático",
           description: "Brindar soporte logístico y operativo para garantizar que la infraestructura tecnológica y los contratistas se desplieguen sin contratiempos. Colaboración en el plan de montaje de cableados, canalizaciones, switches, puntos de acceso y estaciones de trabajo según las planimetrías definidas para la sede. Gestión de inventario: recepción, registro, custodia y entrega formal de insumos y consumibles tecnológicos. Acompañamiento a proveedores en campo, facilitando su movilidad y verificando accesos y acreditaciones. Seguimiento continuo al estado de las incidencias reportadas.",
          },
          pitentino: {
            title: "Ayudante de maestros",
            description: "Representante Argentino de clases impartidas sobre Prompts, Sustentabilidad y cultura en escuela económica con integración de Programación.",
          },
          wildsmile: {
            title: "Software Developer",
            description: "Análisis y soporte de sistemas empresariales en el mercado europeo utilizando Java (Play Framework / MVC). Participación activa en el relevamiento funcional de lógica comercial y migración SVN a Git.",
          },
          ioba: {
            title: "Analista en Sistemas - Backend",
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
        role: "Functional Analyst & Systems Developer",
        location: "Remote, Argentina",
        downloadCv: "Download CV",
      },
      about: {
        title: "About Me",
        subtitle: "Learn more about my background and skills",
        p1_1: "I am a ",
        p1_bold: "Functional Analyst & Full Stack Developer",
        p1_2: ", specializing in the ",
        p1_bold2: ".NET (C#) and TypeScript",
        p1_3: " ecosystem. My profile is defined by the intersection of technical development and information management.",
        p2_1: "I have experience in designing and implementing high-availability software solutions, highlighted by a virtual queue management system. My role was focused on ",
        p2_bold: "analyzing and translating business processes",
        p2_2: " into scalable and efficient architectures.",
        p3_1: "My current approach integrates ",
        p3_bold: "Data Analysis",
        p3_2: " to support decision-making. I specialize in ensuring the development lifecycle aligns with strategic goals.",
        p4: "Throughout my career in Argentina, Italy, and Portugal, I have worked under agile methodologies and Clean Code standards, always prioritizing deliverable, maintainable software.",
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
        subtitle: "Some of the most relevant projects I've built",
        statusCompleted: "Completed",
        viewDemo: "Watch Demo (Video)",
        items: {
          turnos: {
            title: "Virtual Appointment System",
            description: "Flexible Ophthalmological Scheduling with ASP.NET Core and Blazor.",
          },
          clarvision: {
            title: "ClarVision BI",
            description: "Operational intelligence system for ophthalmology clinic. Full data pipeline with automatic alerts for critical absenteeism and weekly reports via Slack.",
          },
        },
      },
      experience: {
        title: "Work Experience",
        subtitle: "My professional journey and previous roles",
        visitWebsite: "Visit website",
        items: {
          pitentino: {
            title: "Teacher Assistant",
            description: "Argentine representative teaching classes on Prompts, Sustainability, and culture in an economics school with programming integration.",
          },
          wildsmile: {
            title: "Software Developer",
            description: "Analysis and support of enterprise systems in the European market using Java (Play Framework / MVC). Active participation in functional requirements gathering and SVN to Git migration.",
          },
          ioba: {
            title: "Systems Analyst - Backend",
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
        subtitle: "Continuous learning and certifications achieved throughout my career",
      },
      contact: {
        title: "Contact",
        subtitle: "Have a project in mind or a question? Feel free to reach out",
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
