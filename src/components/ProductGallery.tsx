import { useState } from "react";
import { Eye, Heart, Star } from "lucide-react";

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos os Produtos" },
    { id: "perfumes", name: "Perfumes de Luxo" },
    { id: "skincare", name: "Skin Care" },
    { id: "arabicos", name: "Perfumes Árabes" }
  ];

  // Produtos de exemplo - em produção viriam de uma API ou base de dados
  const products = [
    {
      id: 1,
      name: "Dior Sauvage",
      category: "perfumes",
      type: "Perfume Masculino",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center",
      rating: 5,
      popular: true
    },
    {
      id: 2,
      name: "Chanel No. 5",
      category: "perfumes",
      type: "Perfume Feminino",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop&crop=center",
      rating: 5,
      popular: true
    },
    {
      id: 3,
      name: "The Ordinary Retinol",
      category: "skincare",
      type: "Sérum Anti-idade",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1620916297067-e4282e972c9b?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      popular: false
    },
    {
      id: 4,
      name: "Oud Royal",
      category: "arabicos",
      type: "Perfume Árabe Unissex",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop&crop=center",
      rating: 5,
      popular: true
    },
    {
      id: 5,
      name: "La Mer Creme",
      category: "skincare",
      type: "Creme Hidratante",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      rating: 5,
      popular: false
    },
    {
      id: 6,
      name: "Rose Taif Attar",
      category: "arabicos",
      type: "Óleo Perfumado",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      popular: false
    },
    {
      id: 7,
      name: "Tom Ford Black Orchid",
      category: "perfumes",
      type: "Perfume Unissex",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop&crop=center",
      rating: 5,
      popular: true
    },
    {
      id: 8,
      name: "Vitamin C Serum",
      category: "skincare",
      type: "Sérum Antioxidante",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      popular: false
    }
  ];

  const filteredProducts = activeCategory === "todos" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const openWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto: ${productName}`);
    window.open(`https://wa.me/244955201504?text=${message}`, "_blank");
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-accent text-accent" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 text-accent" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-muted-foreground/30" />);
    }

    return stars;
  };

  return (
    <section id="galeria" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-gradient mb-4">
            Catálogo de Produtos
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore a nossa seleção cuidadosamente curada de produtos premium
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card-elegant group relative overflow-hidden"
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-accent to-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </span>
                </div>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <button
                    onClick={() => openWhatsApp(product.name)}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                  >
                    <Eye className="w-5 h-5 text-foreground" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                    <Heart className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-luxury transition-colors duration-300 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.type}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                  <span className="text-sm text-muted-foreground ml-1">
                    ({product.rating})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{product.price}</span>
                  <button
                    onClick={() => openWhatsApp(product.name)}
                    className="text-xs text-luxury hover:text-primary transition-colors duration-200 font-medium"
                  >
                    Consultar →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Não encontrou o que procurava? Entre em contacto connosco!
          </p>
          <button
            onClick={() => openWhatsApp("Gostaria de ver mais produtos disponíveis")}
            className="btn-elegant"
          >
            Ver Mais Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;