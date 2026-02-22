const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Sobre Mí
        </h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Full Stack Developer specialized in .NET, C# and TypeScript, with real experience building complex systems including a high-performance virtual appointment management system.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Currently transitioning into Data Analytics, combining my solid technical background in software development with data analysis to generate insights that support business decisions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            International experience across Argentina, Italy and Portugal. Committed to Clean Code, agile methodologies and delivering robust, scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
