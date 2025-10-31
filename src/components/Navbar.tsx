import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/colecoes", label: "Coleções" },
    { to: "/sobre", label: "Sobre Nós" },
    { to: "/depoimentos", label: "Depoimentos" },
    { to: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Vitrine Da Moda
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${
                    isActive(link.to) ? "text-primary bg-accent" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
