import { useTranslation } from "react-i18next";
import { Mail, MapPin, Briefcase, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("contact.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {t("contact.infoTitle")}
            </h3>
            
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Mail className="h-5 w-5" />
                  {t("contact.email")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:tomiraspo@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  tomiraspo@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  {t("contact.location")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("contact.locationValue")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Briefcase className="h-5 w-5" />
                  {t("contact.availability")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("contact.availabilityValue")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <FileDown className="h-5 w-5" />
                  {t("contact.downloadCvTitle")}
                </CardTitle>
                <CardDescription>{t("contact.downloadCvDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a
                    href="/Tomas Raspo CV.pdf" 
                    download="Tomas_Raspo_CV.pdf"
                    target="_blank"
                  >
                    {t("contact.downloadCvBtn")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground">{t("contact.formTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                action="https://formspree.io/f/mgvpjowq"
                method="POST"
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">{t("contact.nameLabel")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("contact.namePlaceholder")}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.emailLabel")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contact.emailPlaceholder")}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t("contact.subjectLabel")}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder={t("contact.subjectPlaceholder")}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.messageLabel")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.messagePlaceholder")}
                    required
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.5)]"
                >
                  {t("contact.sendBtn")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
