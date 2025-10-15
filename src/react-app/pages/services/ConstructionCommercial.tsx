import { Link } from "react-router";
import { Building, ArrowRight, CheckCircle, Briefcase, Clock, Users } from "lucide-react";

export default function ConstructionCommercial() {
  const benefits = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Projetos Corporativos",
      description: "Especialistas em construção comercial e industrial"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Entrega Pontual",
      description: "Cumprimos rigorosamente os prazos estabelecidos"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestão Profissional",
      description: "Acompanhamento especializado durante toda a obra"
    }
  ];

  const services = [
    "Escritórios e edifícios corporativos",
    "Centros comerciais e shopping centers",
    "Galpões industriais e fábricas",
    "Lojas e estabelecimentos comerciais",
    "Infraestrutura completa",
    "Sistemas de segurança e automação"
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
                <Building className="w-8 h-8 text-orange-400" />
                <span className="text-orange-400 font-medium">Construção Comercial</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
                Projetos Corporativos
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed animate-fade-in-delay">
                Desenvolvemos projetos comerciais e industriais de grande porte, 
                incluindo escritórios, lojas, galpões e centros comerciais. 
                Nossa experiência garante eficiência e funcionalidade para seu negócio.
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
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
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
              Serviços Especializados
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas para seu empreendimento comercial ou industrial
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
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-300">
              Expertise em projetos comerciais e industriais de grande escala
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
              Projetos Executados
            </h2>
            <p className="text-xl text-gray-300">
              Exemplos de nossos trabalhos em construção comercial e industrial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1567958911519-f0345db2bd2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Vamos Desenvolver seu Projeto Comercial?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato e receba uma proposta especializada para seu empreendimento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/orcamento"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover-glow hover-scale"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover-scale"
            >
              <span>Ver Portfólio</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
