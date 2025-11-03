import { Mail, MapPin, Briefcase, FileDown } from "lucide-react";
import { useState } from 'react'; // Necesitas este import para el estado
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// URL de Formspree. ¡Asegúrate de que este sea tu endpoint!
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvpjowq";

const Contact = () => {
    // Estado para manejar el envío del formulario
    const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('submitted');
                form.reset(); // Limpia los campos del formulario
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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
                    {/* Contact Information (Mantenido igual) */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-foreground mb-6">Información de Contacto</h3>
                        
                        {/* Tarjetas de Email, Ubicación, Disponibilidad (Mantenidas) */}
                        <Card className="bg-card/50 border-primary/20">
                            <CardHeader><CardTitle className="flex items-center gap-2 text-primary"><Mail className="h-5 w-5" />Email</CardTitle></CardHeader>
                            <CardContent><a href="mailto:tomiraspo@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">tomiraspo@gmail.com</a></CardContent>
                        </Card>
                        <Card className="bg-card/50 border-primary/20">
                            <CardHeader><CardTitle className="flex items-center gap-2 text-primary"><MapPin className="h-5 w-5" />Ubicación</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">Remote, Argentina</p></CardContent>
                        </Card>
                        <Card className="bg-card/50 border-primary/20">
                            <CardHeader><CardTitle className="flex items-center gap-2 text-primary"><Briefcase className="h-5 w-5" />Disponibilidad</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">Proyectos freelance, oportunidades de colaboración y contratación directa</p></CardContent>
                        </Card>

                        {/* Tarjeta CV */}
                        <Card className="bg-card/50 border-primary/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-primary"><FileDown className="h-5 w-5" />Descarga mi CV</CardTitle>
                                <CardDescription>Conoce más sobre mi experiencia y habilidades</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                                    <a href="/__CV Tomas Raspo Argentina .pdf" download="Tomas_Raspo_CV.pdf" target="_blank">Descargar CV (PDF)</a>
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
                            
                            {/* 1. MOSTRAR MENSAJE DE ÉXITO */}
                            {status === 'submitted' ? (
                                <div className="p-4 bg-green-500/10 border border-green-500 text-green-700 rounded-lg text-center">
                                    <p className="font-semibold text-lg">✅ ¡Mensaje Enviado!</p>
                                    <p>Gracias por contactarme, te responderé pronto.</p>
                                    <Button 
                                        onClick={() => setStatus('idle')} 
                                        variant="link" 
                                        className="mt-2 text-green-700 hover:text-green-800"
                                    >
                                        Enviar otro mensaje
                                    </Button>
                                </div>
                            ) : (
                                
                                {/* 2. MOSTRAR FORMULARIO O ERROR */}
                                <form onSubmit={handleSubmit} method="POST" className="space-y-4">
                                    <input type="hidden" name="_next" value="false" /> {/* Indica a Formspree que NO redirija */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Nombre *</Label>
                                        <Input id="name" name="name" placeholder="Tu nombre" required className="bg-background/50 border-primary/20 focus:border-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input id="email" name="_replyto" type="email" placeholder="tu@email.com" required className="bg-background/50 border-primary/20 focus:border-primary" /> {/* Usar _replyto para Formspree */}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Asunto *</Label>
                                        <Input id="subject" name="_subject" placeholder="Asunto del mensaje" required className="bg-background/50 border-primary/20 focus:border-primary" /> {/* Usar _subject para Formspree */}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Mensaje *</Label>
                                        <Textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." required rows={5} className="bg-background/50 border-primary/20 focus:border-primary" />
                                    </div>
                                    
                                    {status === 'error' && (
                                        <p className="text-red-500">Hubo un error al enviar el mensaje. Intenta de nuevo.</p>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_hsl(180,80%,50%,0.5)]"
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                                    </Button>
                                </form>
                            )}

                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;