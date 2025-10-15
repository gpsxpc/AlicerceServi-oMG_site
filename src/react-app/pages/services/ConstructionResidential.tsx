import { Link } from "react-router";
import { Home, ArrowRight, CheckCircle, Users, Clock, Shield } from "lucide-react";

export default function ConstructionResidential() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Qualidade Garantida",
      description: "Materiais de primeira linha e acabamentos superiores"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Prazo Cumprido",
      description: "Cronograma rigoroso e entrega dentro do prazo"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipe Especializada", 
      description: "Profissionais qualificados e experientes"
    }
  ];

  const services = [
    "Projetos arquitetônicos personalizados",
    "Fundações e estruturas de concreto",
    "Alvenaria estrutural e convencional",
    "Sistemas elétricos e hidráulicos",
    "Acabamentos em geral",
    "Paisagismo e áreas externas"
  ];

  return (
    <div className="pt-16 bg-black min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="w-8 h-8 text-orange-400" />
                <span className="text-orange-400 font-medium">Construção Residencial</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
                Sua Casa dos Sonhos
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed animate-fade-in-delay">
                Construímos residências completas com qualidade superior, desde o projeto 
                arquitetônico até os acabamentos finais. Transformamos sua visão em realidade 
                com tecnologia moderna e acabamentos de primeira qualidade.
              </p>
              <Link
                to="/orcamento"
                className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-500 transition-all duration-300 hover-glow hover-scale"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div 
              className="h-96 rounded-2xl bg-cover bg-center shadow-2xl hover-lift animate-fade-in-delay"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              O que Oferecemos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serviços completos para construção da sua residência ideal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-tech rounded-xl p-6 hover-lift hover-glow">
                <CheckCircle className="w-8 h-8 text-orange-400 mb-4" />
                <p className="text-white font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Por que Escolher a Alicerce?
            </h2>
            <p className="text-xl text-gray-300">
              Diferenciais que fazem toda a diferença no seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center card-tech rounded-xl p-8 hover-lift hover-glow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4 hover-glow">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Projetos Realizados
            </h2>
            <p className="text-xl text-gray-300">
              Alguns exemplos do nosso trabalho em construção residencial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            ].map((image, index) => (
              <div key={index} className="h-64 rounded-xl overflow-hidden hover-lift">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${image}')` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para Construir sua Casa?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Entre em contato conosco e receba um orçamento personalizado para sua residência
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/orcamento"
              className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover-glow hover-scale"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 hover-scale"
            >
              <span>Ver Portfólio</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
