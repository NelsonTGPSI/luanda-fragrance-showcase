import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-gradient">
              EdyCosmetics
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("contactos")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contactos
            </button>
          </nav>

          {/* Contact Phone - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 text-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <a
              href="tel:+244955201504"
              className="text-sm font-medium hover:text-primary transition-colors duration-200"
            >
              +244 955 201 504
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md font-medium transition-all duration-200"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md font-medium transition-all duration-200"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md font-medium transition-all duration-200"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("contactos")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md font-medium transition-all duration-200"
              >
                Contactos
              </button>
              <div className="px-3 py-2 border-t border-border mt-2">
                <div className="flex items-center space-x-2 text-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <a
                    href="tel:+244955201504"
                    className="text-sm font-medium hover:text-primary transition-colors duration-200"
                  >
                    +244 955 201 504
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;