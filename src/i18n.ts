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
      },
      certifications: {
        title: "Certificaciones",
        subtitle: "Credenciales profesionales que validan mi experiencia y conocimientos técnicos"
      },
      contact: {
        title: "Contacto",
        subtitle: "¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría escuchar de ti! Envíame un mensaje y te responderé pronto.",
        infoTitle: "Información de Contacto",
        email: "Email",
        location: "Ubicación",
        locationValue: "Remoto, Argentina",
        availability: "Disponibilidad",
        availabilityValue: "Proyectos freelance, oportunidades de colaboración y contratación directa",
        downloadCvTitle: "Descarga mi CV",
        downloadCvDesc: "Conoce más sobre mi experiencia y habilidades",
        downloadCvBtn: "Descargar CV (PDF)",
        formTitle: "Envíame un Mensaje",
        nameLabel: "Nombre *",
        namePlaceholder: "Tu nombre",
        emailLabel: "Email *",
        emailPlaceholder: "tu@email.com",
        subjectLabel: "Asunto *",
        subjectPlaceholder: "Asunto del mensaje",
        messageLabel: "Mensaje *",
        messagePlaceholder: "Escribe tu mensaje aquí...",
        sendBtn: "Enviar Mensaje"
      },
      experience: {
        title: "Experiencia",
        subtitle: "Mi trayectoria profesional en desarrollo de software y transformación digital",
        visitWebsite: "Visitar sitio web",
        items: {
          pitentino: {
            title: "Ayudante de maestros",
            description: "Representante Argentino de clases impartidas sobre Prompts, Sustentabilidad y cultura en escuela económica con integración de Programación."
          },
          wildsmile: {
            title: "Software Developer",
            description: "Análisis y soporte de sistemas empresariales en el mercado europeo utilizando Java (Play Framework / MVC). Participación activa en el relevamiento funcional de lógica comercial y en la transición tecnológica de control de versiones desde TortoiseSVN hacia Git con flujos de CI/CD."
          },
          ioba: {
            title: "Analista en Sistemas - Backend",
            description: "Co-diseño y desarrollo en equipo de un sistema integral de turnos virtuales enfocado en clínicas oftalmológicas, aplicando Clean Architecture y DDD para optimizar los procesos de agendamiento."
          },
          esba: {
            title: "Prácticas Profesionalizantes",
            description: "Integracion de Sistemas y Programacion de Servidores"
          }
        }
      },
      projects: {
        title: "Mis Proyectos",
        subtitle: "Explora una selección de proyectos que demuestran mis habilidades en desarrollo Full Stack con .NET, Azure y tecnologías modernas",
        statusCompleted: "Completado",
        viewDemo: "Ver Demo (Video)",
        items: {
          turnos: {
            title: "Sistema de Turnos Virtual",
            description: "Agendamiento Oftalmológico Flexible con ASP.NET Core y Blazor."
          },
          clarvision: {
            title: "ClarVision BI",
            description: "Sistema de inteligencia operacional para clínica oftalmológica. Pipeline completo de datos con alertas automáticas de ausentismo crítico y reportes semanales vía Slack."
          }
        }
      },
      footer: {
        rights: "© 2025 Creado por Tomás Raspo. Todos los derechos reservados."
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
      },
      certifications: {
        title: "Certifications",
        subtitle: "Professional credentials validating my technical expertise and skills"
      },
      contact: {
        title: "Contact",
        subtitle: "Have a project in mind or want to collaborate? I'd love to hear from you! Send me a message and I'll reply soon.",
        infoTitle: "Contact Information",
        email: "Email",
        location: "Location",
        locationValue: "Remote, Argentina",
        availability: "Availability",
        availabilityValue: "Freelance projects, collaboration opportunities, and direct hiring",
        downloadCvTitle: "Download my CV",
        downloadCvDesc: "Learn more about my experience and skills",
        downloadCvBtn: "Download CV (PDF)",
        formTitle: "Send Me a Message",
        nameLabel: "Name *",
        namePlaceholder: "Your name",
        emailLabel: "Email *",
        emailPlaceholder: "your@email.com",
        subjectLabel: "Subject *",
        subjectPlaceholder: "Message subject",
        messageLabel: "Message *",
        messagePlaceholder: "Write your message here...",
        sendBtn: "Send Message"
      },
      experience: {
        title: "Experience",
        subtitle: "My professional journey in software development and digital transformation",
        visitWebsite: "Visit website",
        items: {
          pitentino: {
            title: "Teacher Assistant",
            description: "Argentine representative teaching classes on Prompts, Sustainability, and culture in an economics school with programming integration."
          },
          wildsmile: {
            title: "Software Developer",
            description: "Analysis and support of enterprise systems in the European market using Java (Play Framework / MVC). Active participation in functional requirements gathering for commercial logic and tech transition from TortoiseSVN to Git with CI/CD pipelines."
          },
          ioba: {
            title: "Systems Analyst - Backend",
            description: "Co-design and team development of a comprehensive virtual appointment system focused on ophthalmology clinics, applying Clean Architecture and DDD to optimize scheduling processes."
          },
          esba: {
            title: "Professional Internship",
            description: "Systems Integration and Server Programming"
          }
        }
      },
      projects: {
        title: "My Projects",
        subtitle: "Explore a selection of projects showcasing my Full Stack development skills with .NET, Azure, and modern technologies",
        statusCompleted: "Completed",
        viewDemo: "Watch Demo (Video)",
        items: {
          turnos: {
            title: "Virtual Appointment System",
            description: "Flexible Ophthalmological Scheduling with ASP.NET Core and Blazor."
          },
          clarvision: {
            title: "ClarVision BI",
            description: "Operational intelligence system for ophthalmology clinic. Full data pipeline with automatic alerts for critical absenteeism and weekly reports via Slack."
          }
        }
      },
      footer: {
        rights: "© 2025 Created by Tomás Raspo. All rights reserved."
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
