import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Settings2, BarChart3 } from "lucide-react";

const projectsData = [
  {
    id: "turnos",
    technologies: ["ASP.NET Core", "Blazor", "SQL Server", "Azure"],
    dataTools: [] as string[],
    github: "https://github.com/tomiraspo/Sistema-Turnos",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7384221305383936000/",
  },
  {
    id: "clarvision",
    technologies: ["MySQL", "n8n", "Slack", "Git"],
    dataTools: ["Power BI", "Excel"],
    github: "https://github.com/tomiraspo/ClarVision-BI",
    linkedin: "",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("projects.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.subtitle")}
        </p>

        <div className="flex flex-col gap-8">
          {projectsData.map((p) => (
            <Card key={p.id} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <CardTitle>{t(`projects.items.${p.id}.title`)}</CardTitle>
                  <Badge className="bg-primary/80">{t("projects.statusCompleted")}</Badge>
                </div>
                <CardDescription>{t(`projects.items.${p.id}.description`)}</CardDescription>
              </CardHeader>

              <div className="grid md:grid-cols-2 border-t border-primary/20">
                <div className="p-6 border-b md:border-b-0 md:border-r border-primary/20">
                  <h4 className="flex items-center gap-2 font-semibold mb-4 text-primary">
                    <Settings2 className="h-4 w-4" /> {t("projects.technical")}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.technologies.map((x) => (
                      <Badge key={x} variant="secondary" className="text-xs">{x}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    {p.linkedin && (
                      <Button size="sm" asChild>
                        <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" /> {t("projects.viewDemo")}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="flex items-center gap-2 font-semibold mb-4 text-accent">
                    <BarChart3 className="h-4 w-4" /> {t("projects.metrics")}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {[1, 2, 3].map((n) => (
                      <li key={n} className="flex gap-2">
                        <span className="text-accent">•</span>
                        {t(`projects.items.${p.id}.metric${n}`)}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {p.dataTools.map((x) => (
                      <Badge key={x} variant="outline" className="border-accent/50 text-xs">{x}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
