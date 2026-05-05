const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Sobre Mí
        </h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            <strong>Analista Funcional y Desarrollador Full Stack</strong> con sólida experiencia técnica en <strong>.NET, C# y TypeScript</strong>. Mi perfil combina la capacidad de construir sistemas complejos con una visión estratégica para relevar requerimientos y transformarlos en soluciones tecnológicas escalables.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Me especializo en optimizar la dinámica entre el negocio y el desarrollo. Cuento con experiencia real gestionando sistemas de alta criticidad, como plataformas de gestión de turnos virtuales, donde mi enfoque fue <strong>alinear los procesos operativos con la arquitectura del software</strong> para maximizar el rendimiento.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Actualmente integro el <strong>Análisis de Datos</strong> como pieza clave de mi metodología, permitiéndome no solo proponer funcionalidades, sino también validar su impacto mediante métricas reales que apoyan la toma de decisiones empresariales.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Con trayectoria internacional en Argentina, Italia y Portugal, aplico metodologías ágiles y principios de Clean Code para asegurar que cada proyecto sea robusto, funcional y fácil de evolucionar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
