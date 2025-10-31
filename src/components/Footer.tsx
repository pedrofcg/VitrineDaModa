import { Instagram, MessageCircle, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Vitrine Da Moda
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Vista sua melhor versão. Roupas de academia femininas com estilo, conforto e qualidade para empoderar mulheres todos os dias.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all"
                aria-label="TikTok"
              >
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/colecoes" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Coleções
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Atendimento</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/trocas" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to="/envio" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Política de Envio
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-secondary-foreground/80 text-sm">
            © 2025 Vitrine Da Moda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
