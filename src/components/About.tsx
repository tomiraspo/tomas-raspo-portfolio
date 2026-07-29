import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("about.title")}
        </h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t("about.p1_1")}<strong>{t("about.p1_bold")}</strong>{t("about.p1_2")}<strong>{t("about.p1_bold2")}</strong>{t("about.p1_3")}
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t("about.p2_1")}<strong>{t("about.p2_bold")}</strong>{t("about.p2_2")}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t("about.p3_1")}<strong>{t("about.p3_bold")}</strong>{t("about.p3_2")}
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("about.p4")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
