const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Sobre Mí
        </h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Soy <strong>Analista Funcional y Desarrollador Full Stack</strong>, con especialización en el ecosistema <strong>.NET (C#) y TypeScript</strong>. Mi perfil se define por la intersección entre el desarrollo técnico y la gestión de la información, carrera que curso actualmente para optimizar la estructura y el flujo de datos en las organizaciones.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Cuento con experiencia en el diseño e implementación de soluciones de software de alta disponibilidad, destacando el desarrollo de un sistema de gestión de turnos virtuales. Mi rol en estos proyectos no solo ha sido técnico, sino también de <strong>análisis y traducción de procesos de negocio</strong> en arquitecturas escalables y eficientes.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Mi enfoque actual integra el <strong>Análisis de Datos</strong> para fundamentar la toma de decisiones. Me especializo en asegurar que el ciclo de vida del desarrollo esté alineado con los objetivos estratégicos, garantizando que cada funcionalidad responda a una necesidad real del negocio y del usuario final.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            A lo largo de mi trayectoria en Argentina, Italia y Portugal, he trabajado bajo metodologías ágiles y estándares de Clean Code, priorizando siempre la entrega de software mantenible y de impacto directo en la operativa de la empresa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
