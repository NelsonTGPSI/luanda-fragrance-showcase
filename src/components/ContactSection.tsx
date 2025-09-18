import { Phone, MessageCircle, MapPin, Clock, Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da EdyCosmetics.");
    window.open(`https://wa.me/244955201504?text=${message}`, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "+244 955 201 504",
      action: () => window.open("tel:+244955201504"),
      description: "Ligue-nos para atendimento direto"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+244 955 201 504",
      action: openWhatsApp,
      description: "Fale connosco via WhatsApp"
    },
    {
      icon: MapPin,
      title: "Zona de Entrega",
      info: "Luanda - Todas as Zonas",
      action: null,
      description: "Entregamos em toda Luanda"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda a Sábado",
      action: null,
      description: "08:00 às 18:00"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Phone,
      name: "WhatsApp",
      action: openWhatsApp,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="contactos" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-gradient mb-4">
            Entre em Contacto
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contacto connosco para mais informações 
            sobre os nossos produtos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Como nos Contactar
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A EdyCosmetics está sempre disponível para atendê-lo. Escolha a forma 
                mais conveniente para entrar em contacto connosco.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`card-elegant group ${contact.action ? 'cursor-pointer hover:shadow-lg' : ''}`}
                  onClick={contact.action || undefined}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {contact.info}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Siga-nos nas Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={social.action}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-background rounded-2xl p-8 border border-border shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Mensagem Rápida
            </h3>
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Para um atendimento mais rápido e personalizado, recomendamos que 
                entre em contacto connosco através do WhatsApp:
              </p>

              <div className="bg-gradient-luxury rounded-lg p-6 text-center">
                <Phone className="w-12 h-12 text-luxury-foreground mx-auto mb-4" />
                <h4 className="text-xl font-bold text-luxury-foreground mb-2">
                  +244 955 201 504
                </h4>
                <p className="text-luxury-foreground/80 mb-6">
                  Disponível de Segunda a Sábado das 08:00 às 18:00
                </p>
                <button
                  onClick={openWhatsApp}
                  className="btn-hero bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-luxury"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar via WhatsApp
                </button>
              </div>

              {/* Delivery Info */}
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">
                      Zona de Entrega
                    </h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Entregamos em todas as zonas de Luanda. O tempo de entrega varia 
                      entre 24h a 48h, dependendo da localização e disponibilidade do produto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;