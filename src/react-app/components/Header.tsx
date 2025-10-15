import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Instagram, User, LogOut } from "lucide-react";
import LogoIcon from "./LogoIcon";
import { useAuth } from "@getmocha/users-service/react";
import LoginModal from "./LoginModal";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { name: "Contato", href: "/contato" },
  { name: "Orçamento", href: "/orcamento" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover-glow">
              <LogoIcon size="md" />
              <span className="text-white font-bold text-lg hidden sm:block hover:text-orange-400 transition-colors duration-300">
                Alicerce Serviços MG
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-orange-400 hover:scale-105 ${
                    location.pathname === item.href
                      ? "text-orange-400 border-b-2 border-orange-400 pb-1"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/alicerce_servicos/?__pwa=1#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300 hover-scale"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* User Menu */}
              {user ? (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/perfil"
                    className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors duration-300 hover-scale"
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden sm:block text-sm">{user.google_user_data.given_name || "Perfil"}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-orange-400 transition-colors duration-300 hover-scale"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-500 transition-all duration-300 hover-glow hover-scale"
                >
                  Login
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white hover:text-orange-400 transition-colors duration-300 hover-scale"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-white/10 shadow-lg backdrop-blur-sm">
            <div className="px-4 py-3 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.href
                      ? "text-orange-400"
                      : "text-white hover:text-orange-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
}
