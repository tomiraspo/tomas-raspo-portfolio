import { Mail, MapPin, Briefcase, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  // El código está limpio: Se eliminó la función handleSubmit.

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Contacto
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría escuchar de ti! Envíame un mensaje y te responderé pronto.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Información de Contacto</h3>
            
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Mail className="h-5 w-5" />
                  Email
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
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Remote, Argentina</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Briefcase className="h-5 w-5" />
                  Disponibilidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Proyectos freelance, oportunidades de colaboración y contratación directa</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <FileDown className="h-5 w-5" />
                  Descarga mi CV
                </CardTitle>
                <CardDescription>Conoce más sobre mi experiencia y habilidades</CardDescription>
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
                        Descargar CV (PDF)
                    </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground">Envíame un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                  action="https://formspree.io/f/mgvpjowq" // Endpoint de Formspree
                  method="POST"
                  className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre *</Label>
                  <Input
                    id="name"
                    name="name" // Agregado el atributo 'name' para Formspree
                    placeholder="Tu nombre"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email" // Agregado el atributo 'name' para Formspree
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto *</Label>
                  <Input
                    id="subject"
                    name="subject" // Agregado el atributo 'name' para Formspree
                    placeholder="Asunto del mensaje"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message" // Agregado el atributo 'name' para Formspree
                    placeholder="Escribe tu mensaje aquí..."
                    required
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.5)]"
                >
                  Enviar Mensaje
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
