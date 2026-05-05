const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Sobre Mí
        </h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Soy <strong>Desarrollador Full Stack (.NET / C# / TypeScript)</strong> y estoy cursando la carrera de <strong>Administración y Gestión de la Información</strong>. Mi enfoque hoy es el Análisis Funcional: me ocupo de que lo que se programa tenga sentido real para el negocio.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Tengo experiencia práctica en el desarrollo de sistemas complejos, como una plataforma de gestión de turnos virtuales de alto rendimiento. Ese proyecto me enseñó que un buen software no solo necesita código limpio, sino una arquitectura que resuelva procesos operativos reales sin vueltas.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Actualmente combino mi base técnica con el Análisis de Datos y la gestión de la información. Mi objetivo es claro: <strong>ser el puente que traduce las necesidades de la empresa en requerimientos técnicos precisos</strong>, evitando errores de comunicación entre el cliente y el equipo de desarrollo.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            He trabajado en proyectos de Argentina, Italia y Portugal, lo que me dio flexibilidad para adaptarme a distintos equipos y metodologías ágiles. Busco soluciones que sean escalables, fáciles de mantener y, sobre todo, útiles para quien las usa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
