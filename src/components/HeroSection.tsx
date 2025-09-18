import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-cosmetics.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("produtos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de conhecer os produtos da EdyCosmetics.");
    window.open(`https://wa.me/244955201504?text=${message}`, "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="EdyCosmetics - Cosméticos de Luxo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <div className="space-y-6 lg:space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white block">Beleza &amp; Elegância</span>
              <span className="text-gradient block mt-2">EdyCosmetics</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Perfumes de luxo, perfumes árabes de nicho e produtos de skin care 
              de alta qualidade para quem valoriza a sofisticação.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-2xl mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-white font-semibold text-sm lg:text-base">Perfumes de Luxo</h3>
                <p className="text-white/80 text-xs lg:text-sm">Fragrâncias exclusivas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-white font-semibold text-sm lg:text-base">Perfumes Árabes</h3>
                <p className="text-white/80 text-xs lg:text-sm">Nicho masculino/feminino</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-white font-semibold text-sm lg:text-base">Skin Care</h3>
                <p className="text-white/80 text-xs lg:text-sm">Cuidados premium</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={scrollToProducts}
                className="btn-hero group flex items-center space-x-2"
              >
                <span>Ver Produtos</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={openWhatsApp}
                className="btn-elegant bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-secondary group flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+244 955 201 504</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
              <span className="text-sm">Entregas apenas em Luanda</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;