const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Sobre Mí
        </h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Dessarollador Software Full Stack especializado en la arquitectura .NET C#, ASP.NET Core y Blazor, con dominio del ecosistema Azure para soluciones escalables.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Experiencia internacional en Argentina, Italia y Portugal, impulsando la transformación digital y la optimización de procesos. Logros destacados incluyen el diseño e implementación de un sistema de gestión de turnos virtuales de alto rendimiento (web y API RESTful), mejorando significativamente la eficiencia operativa.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experiencia práctica con Docker para containerización, Bootstrap para interfaces responsivas, y herramientas como Visual Studio. Cuento con conocimientos en el manejo de bases de datos como SQL Server y MySQL. Comprometido con el Clean Code, las metodologías ágiles y la entrega de soluciones robustas y seguras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
