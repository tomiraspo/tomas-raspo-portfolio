import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      nav: {
        about: "Sobre Mí",
        experience: "Experiencia",
        projects: "Proyectos",
        certifications: "Certificaciones",
        contact: "Contacto",
      },
      hero: {
        title: "Analista de Sistemas & Desarrollador Web",
        subtitle: "Especializado en crear aplicaciones web modernas, funcionales y adaptadas a las necesidades del cliente.",
        viewWork: "Ver Mi Trabajo",
        contactMe: "Contáctame",
      },
      about: {
        title: "Sobre Mí",
        subtitle: "Conoce más sobre mi trayectoria y habilidades",
        description1: "Soy un apasionado Analista de Sistemas con sólida formación en desarrollo web y gestión de proyectos tecnológicos.",
        description2: "Mi objetivo es aportar soluciones innovadoras que optimicen procesos y generen un impacto positivo en las organizaciones.",
        skills: "Habilidades Técnicas",
      },
      experience: {
        title: "Experiencia Laboral",
        subtitle: "Mi trayectoria profesional y proyectos previos",
        items: [
          {
            period: "2024 - Presente",
            role: "Administrador / Recepcionista",
            company: "Ostello Bello Mantova - Italia",
            description: "Atención al cliente multilingüe, gestión de reservas, control de caja y resolución de incidencias en un entorno dinámico e internacional.",
          },
          {
            period: "2023 - 2024",
            role: "Atención al Cliente y Logística",
            company: "Pizzería e Restaurante 'Doce Peixe' - Portugal",
            description: "Atención al cliente en mesa y caja, gestión de pedidos y apoyo en tareas logísticas del establecimiento.",
          },
          {
            period: "2021 - 2023",
            role: "Técnico de Soporte e Infraestructura",
            company: "Servicios Informáticos Independientes",
            description: "Mantenimiento preventivo y correctivo de hardware/software, configuración de redes y asistencia técnica personalizada a clientes.",
          },
        ],
      },
      projects: {
        title: "Proyectos Destacados",
        subtitle: "Algunos de los trabajos más relevantes que he desarrollado",
        demoBtn: "Ver Demo",
        githubBtn: "Código Fuente",
        items: [
          {
            title: "Página Web para Psicóloga y Profesora de Yoga",
            description: "Sitio web completo desarrollado para conectar servicios de psicología y yoga con clientes. Incluye secciones sobre la profesional, detalles de servicios, recursos, blog y formulario de contacto. Totalmente responsivo y optimizado.",
          },
          {
            title: "Controlador de Pedidos para Gastronomía",
            description: "Sistema web enfocado en la gestión eficiente de comandas y pedidos para locales gastronómicos. Permite registrar, actualizar y visualizar en tiempo real el estado de cada pedido, mejorando la organización del personal.",
          },
          {
            title: "Página Web para Complejo de Departamentos de Alquiler",
            description: "Plataforma web diseñada para exhibir departamentos en alquiler temporario. Ofrece galerías de fotos por unidad, detalle de comodidades, ubicación y un canal de contacto directo para consultas y reservas.",
          },
        ],
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
        about: "About Me",
        experience: "Experience",
        projects: "Projects",
        certifications: "Certifications",
        contact: "Contact",
      },
      hero: {
        title: "Systems Analyst & Web Developer",
        subtitle: "Specialized in creating modern, functional web applications tailored to client needs.",
        viewWork: "View My Work",
        contactMe: "Contact Me",
      },
      about: {
        title: "About Me",
        subtitle: "Learn more about my background and skills",
        description1: "I am a passionate Systems Analyst with a solid background in web development and tech project management.",
        description2: "My goal is to provide innovative solutions that optimize processes and deliver a positive impact on organizations.",
        skills: "Technical Skills",
      },
      experience: {
        title: "Work Experience",
        subtitle: "My professional journey and previous roles",
        items: [
          {
            period: "2024 - Present",
            role: "Administrator / Front Desk",
            company: "Ostello Bello Mantova - Italy",
            description: "Multilingual customer support, reservation management, cash flow handling, and issue resolution in a dynamic international environment.",
          },
          {
            period: "2023 - 2024",
            role: "Customer Service & Logistics",
            company: "Pizzeria & Restaurant 'Doce Peixe' - Portugal",
            description: "Dine-in and checkout customer service, order management, and logistical support for daily restaurant operations.",
          },
          {
            period: "2021 - 2023",
            role: "IT Support & Infrastructure Specialist",
            company: "Freelance IT Services",
            description: "Preventive and corrective hardware/software maintenance, network configuration, and personalized technical assistance for clients.",
          },
        ],
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Some of the most relevant projects I've built",
        demoBtn: "Live Demo",
        githubBtn: "Source Code",
        items: [
          {
            title: "Psychologist & Yoga Instructor Website",
            description: "Complete website created to connect psychology and yoga services with clients. Features professional background, service details, resources, blog, and contact form. Fully responsive and optimized.",
          },
          {
            title: "Gastronomy Order Management System",
            description: "Web system designed for efficient order tracking in restaurants and food venues. Enables real-time order status updates, streamlining staff coordination and service flow.",
          },
          {
            title: "Apartment Rental Complex Website",
            description: "Web platform designed to showcase temporary rental apartments. Features photo galleries for each unit, amenities list, location details, and direct contact options for inquiries and bookings.",
          },
        ],
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

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
