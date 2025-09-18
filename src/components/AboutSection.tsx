import { Award, Heart, MapPin, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Selecionamos apenas produtos de alta qualidade das melhores marcas"
    },
    {
      icon: Heart,
      title: "Paixão pela Beleza",
      description: "Acreditamos que cada pessoa merece se sentir especial e confiante"
    },
    {
      icon: MapPin,
      title: "Marca Angolana",
      description: "Orgulhosamente angolana, servindo Luanda com dedicação"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único e merece um atendimento especial"
    }
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 lg:space-y-8">
              {/* Header */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-gradient mb-4">
                  Sobre a EdyCosmetics
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
              </div>

              {/* Main Description */}
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  A <span className="text-luxury font-semibold">EdyCosmetics</span> é uma marca 
                  angolana especializada em produtos de beleza premium. Nascemos da paixão por 
                  proporcionar experiências únicas através de fragrâncias exclusivas e cuidados 
                  de pele de alta qualidade.
                </p>
                
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Com uma curadoria cuidadosa, oferecemos perfumes de luxo, perfumes árabes de 
                  nicho e produtos de skin care que atendem aos mais exigentes padrões de qualidade. 
                  Servimos orgulhosamente todas as zonas de Luanda.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                <p className="text-foreground font-medium italic">
                  "A nossa missão é democratizar o acesso à beleza premium em Angola, 
                  oferecendo produtos excepcionais com atendimento personalizado."
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="card-elegant text-center group hover:bg-gradient-subtle"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-luxury transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-gradient-luxury rounded-2xl p-8 lg:p-12 text-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-luxury-foreground mb-2">100+</div>
                <div className="text-luxury-foreground/80 text-sm lg:text-base">Produtos Premium</div>
              </div>
              
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-luxury-foreground mb-2">500+</div>
                <div className="text-luxury-foreground/80 text-sm lg:text-base">Clientes Satisfeitos</div>
              </div>
              
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-luxury-foreground mb-2">24h</div>
                <div className="text-luxury-foreground/80 text-sm lg:text-base">Entrega Rápida</div>
              </div>
              
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-luxury-foreground mb-2">100%</div>
                <div className="text-luxury-foreground/80 text-sm lg:text-base">Angola</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;