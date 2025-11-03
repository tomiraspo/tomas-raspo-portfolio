import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-primary/20 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Creado por Tomás Raspo. Todos los derechos reservados.
              <span className="mx-2">|</span> 
            <a 
            href="https://wa.me/543492656199" // Usar formato sin guiones para el tel:
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            >
            +54 3492 656199
            </a>        
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tomiraspo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://ar.linkedin.com/in/tomás-raspo-b03028214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:tomiraspo@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
