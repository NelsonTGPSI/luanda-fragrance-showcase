import { Sparkles, Heart, Star } from "lucide-react";
import perfumesImage from "@/assets/perfumes-collection.jpg";
import skincareImage from "@/assets/skincare-collection.jpg";
import arabicPerfumesImage from "@/assets/arabic-perfumes.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Perfumes de Luxo",
      description: "Fragrâncias exclusivas das melhores marcas internacionais. Para homem e mulher.",
      image: perfumesImage,
      icon: Sparkles,
      features: ["Marcas Premium", "Longa Duração", "Fragrâncias Únicas"]
    },
    {
      id: 2,
      title: "Produtos Skin Care",
      description: "Cuidados premium para a pele com ingredientes de alta qualidade e tecnologia avançada.",
      image: skincareImage,
      icon: Heart,
      features: ["Anti-idade", "Hidratação Profunda", "Resultados Visíveis"]
    },
    {
      id: 3,
      title: "Perfumes Árabes de Nicho",
      description: "Fragrâncias orientais sofisticadas e intensas, masculinas e femininas.",
      image: arabicPerfumesImage,
      icon: Star,
      features: ["Fragrâncias Orientais", "Alta Concentração", "Exclusividade"]
    }
  ];

  const scrollToGallery = () => {
    const element = document.getElementById("galeria");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="produtos" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-gradient mb-4">
            Os Nossos Produtos
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra a nossa coleção exclusiva de produtos de beleza e cuidados pessoais
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`card-elegant group cursor-pointer ${
                index === 1 ? "lg:transform lg:-translate-y-4" : ""
              }`}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-luxury transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <div className="pt-2">
                  <span className="text-primary font-semibold group-hover:text-luxury transition-colors duration-300 cursor-pointer">
                    Ver Mais →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={scrollToGallery}
            className="btn-luxury inline-flex items-center space-x-2"
          >
            <span>Ver Catálogo Completo</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;