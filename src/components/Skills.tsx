import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = {
  businessBI: ["Power BI", "Excel", "Odoo", "n8n"],
  databases: ["MySQL", "SQL Server", "PostgreSQL"],
  languages: ["SQL", "C#", "TypeScript", "JavaScript", "Java", "HTML/CSS"],
  frameworks: ["ASP.NET Core", "Blazor", "React", "Entity Framework", "Bootstrap"],
  cloud: ["Azure", "Azure DevOps", "Azure Functions", "Azure App Service", "DigitalOcean", "Docker"],
  tools: ["Visual Studio", "VS Code", "Git"],
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("skills.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]">
            <CardHeader>
              <CardTitle className="text-primary">Análisis de Negocio y BI</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.businessBI.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.2)]">
            <CardHeader>
              <CardTitle className="text-primary">{t("skills.databases")}</CardTitle>
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
              <CardTitle className="text-primary">{t("skills.languages")}</CardTitle>
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
              <CardTitle className="text-primary">{t("skills.frameworks")}</CardTitle>
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
              <CardTitle className="text-primary">{t("skills.cloud")}</CardTitle>
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
              <CardTitle className="text-primary">{t("skills.tools")}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill) => (
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
