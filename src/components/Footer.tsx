import { Heart, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da EdyCosmetics.");
    window.open(`https://wa.me/244955201504?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-gradient-luxury text-luxury-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl lg:text-3xl font-bold text-gradient mb-4">
              EdyCosmetics
            </h3>
            <p className="text-luxury-foreground/80 leading-relaxed mb-6 max-w-md">
              A sua marca angolana de confiança para perfumes de luxo, 
              perfumes árabes de nicho e produtos de skin care premium. 
              Beleza e qualidade que transforma.
            </p>
            <div className="flex items-center space-x-2 text-luxury-foreground/60">
              <span className="text-sm">Feito com</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">em Angola</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-luxury-foreground/80 hover:text-luxury-foreground transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-luxury-foreground/80 hover:text-luxury-foreground transition-colors duration-200"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-luxury-foreground/80 hover:text-luxury-foreground transition-colors duration-200"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contactos")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-luxury-foreground/80 hover:text-luxury-foreground transition-colors duration-200"
                >
                  Contactos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-luxury-foreground/60 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+244955201504"
                    className="text-luxury-foreground/80 hover:text-luxury-foreground transition-colors duration-200"
                  >
                    +244 955 201 504
                  </a>
                  <p className="text-sm text-luxury-foreground/60">Segunda a Sábado</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-foreground/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-luxury-foreground/80">Luanda</p>
                  <p className="text-sm text-luxury-foreground/60">Todas as zonas</p>
                </div>
              </div>

              <button
                onClick={openWhatsApp}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200 flex items-center space-x-2"
              >
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Products Categories */}
        <div className="border-t border-luxury-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <h5 className="font-semibold text-luxury-foreground mb-2">Perfumes de Luxo</h5>
              <p className="text-sm text-luxury-foreground/70">Fragrâncias das melhores marcas mundiais</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <h5 className="font-semibold text-luxury-foreground mb-2">Perfumes Árabes</h5>
              <p className="text-sm text-luxury-foreground/70">Fragrâncias orientais de nicho exclusivas</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <h5 className="font-semibold text-luxury-foreground mb-2">Skin Care</h5>
              <p className="text-sm text-luxury-foreground/70">Cuidados premium para todos os tipos de pele</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-luxury-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-luxury-foreground/60 text-sm">
                © {currentYear} EdyCosmetics. Todos os direitos reservados.
              </p>
              <p className="text-luxury-foreground/60 text-sm">
                Marca Angolana • +244 955 201 504
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-luxury-foreground/60 text-sm">
                Entregas apenas em Luanda
              </p>
              <p className="text-luxury-foreground/60 text-sm">
                Segunda a Sábado • 08:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;