import { Link } from "react-router";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <LogoIcon size="md" />
              <span className="font-bold text-lg">Alicerce Serviços MG</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mais de 20 anos de experiência em construção civil, oferecendo qualidade 
              e confiança em cada projeto realizado.
            </p>
            <p className="text-gray-400 text-xs">
              CNPJ: 62.804.670/0001-18
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <div className="text-sm text-gray-300">
                  <p>(31) 97254-3306</p>
                  <p>(31) 97339-0442</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <a 
                  href="mailto:alicerceservicosmg@gmail.com"
                  className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  alicerceservicosmg@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">Belo Horizonte, MG</span>
              </div>
            </div>
          </div>

          {/* Navigation & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Início
              </Link>
              <Link to="/servicos" className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Serviços
              </Link>
              <Link to="/sobre" className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Sobre
              </Link>
              <Link to="/portfolio" className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Portfólio
              </Link>
              <Link to="/contato" className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Contato
              </Link>
              <Link to="/orcamento" className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Orçamento
              </Link>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-3">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/alicerce_servicos/?__pwa=1#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover-scale"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@alicerceservicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover-scale"
                  title="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Alicerce Serviços MG. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
