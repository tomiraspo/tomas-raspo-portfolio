const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Sobre Mí
        </h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Analista de Sistemas con diplomado en Redes Informáticas, especializado en desarrollo Full Stack con fuerte énfasis en tecnologías .NET y Azure. 
            Experiencia en diseño y desarrollo de aplicaciones web escalables utilizando C#, ASP.NET Core y Blazor, con sólido conocimiento en bases de datos SQL Server y MySQL.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Capacidad demostrada en implementación de arquitecturas modernas, desarrollo de APIs RESTful, y despliegue de aplicaciones en la nube con Azure. 
            Experiencia práctica con Docker para containerización de aplicaciones y Bootstrap para desarrollo de interfaces responsivas. 
            Comprometido con las mejores prácticas de desarrollo, clean code, y mejora continua de procesos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
