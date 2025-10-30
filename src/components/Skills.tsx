import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = {
  languages: ["C#", "SQL", "JavaScript", "TypeScript", "HTML/CSS, Java"],
  frameworks: ["ASP.NET Core", "Blazor", "Entity Framework", ".NET MAUI", "Bootstrap"],
  databases: ["SQL Server", "MySQL", "PostgreSQL", "Azure SQL"],
  cloud: ["Azure", "Azure DevOps", "Azure Functions", "Azure App Service"],
  tools: ["Visual Studio", "VS Code", "Docker", "Git", "Kubernetes"],
  versionControl: ["Git", "GitHub", "Azure Repos", "CI/CD"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Habilidades Técnicas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]">
            <CardHeader>
              <CardTitle className="text-primary">Lenguajes</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.languages.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]">
            <CardHeader>
              <CardTitle className="text-primary">Frameworks & Librerías</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.frameworks.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]">
            <CardHeader>
              <CardTitle className="text-primary">Bases de Datos</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.databases.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]">
            <CardHeader>
              <CardTitle className="text-primary">Cloud & DevOps</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.cloud.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]">
            <CardHeader>
              <CardTitle className="text-primary">Herramientas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]">
            <CardHeader>
              <CardTitle className="text-primary">Control de Versiones</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.versionControl.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
