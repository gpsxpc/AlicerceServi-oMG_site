import { Link } from "react-router";
import { Wrench, ArrowRight, CheckCircle, Paintbrush, Home, Zap } from "lucide-react";

export default function Renovations() {
  const benefits = [
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Modernização",
      description: "Transformamos espaços antigos em ambientes modernos e funcionais"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Ampliações",
      description: "Expandimos sua casa mantendo harmonia arquitetônica"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instalações Novas",
      description: "Atualização de sistemas elétricos e hidráulicos"
    }
  ];

  const services = [
    "Reforma completa de ambientes",
    "Ampliação de casas e apartamentos",
    "Modernização de banheiros e cozinhas",
    "Troca de pisos e revestimentos",
    "Atualização de instalações elétricas",
    "Sistemas hidráulicos modernos"
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
                <Wrench className="w-8 h-8 text-orange-400" />
                <span className="text-orange-400 font-medium">Reformas e Ampliações</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
                Renove seu Espaço
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed animate-fade-in-delay">
                Modernizamos e expandimos imóveis existentes, respeitando a estrutura original 
                e criando novos ambientes funcionais. Transformamos sua casa ou escritório 
                em um espaço mais confortável e moderno.
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
                backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
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
              Serviços de Reforma
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas para modernizar e ampliar seu imóvel
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
              Especialidades em Reforma
            </h2>
            <p className="text-xl text-gray-300">
              Transformamos espaços com criatividade e funcionalidade
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

      {/* Before/After Gallery */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Transformações Realizadas
            </h2>
            <p className="text-xl text-gray-300">
              Veja como transformamos espaços através de reformas e ampliações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1560449752-c6ac8c7aee6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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

      {/* Process */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-300">
              Processo organizado para minimizar transtornos durante a reforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Avaliação", description: "Análise detalhada do imóvel e necessidades" },
              { step: "02", title: "Projeto", description: "Desenvolvimento de projeto personalizado" },
              { step: "03", title: "Execução", description: "Reforma com mínimo transtorno possível" },
              { step: "04", title: "Entrega", description: "Finalização e entrega do ambiente renovado" }
            ].map((item, index) => (
              <div key={index} className="text-center card-tech rounded-xl p-6 hover-lift hover-glow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 hover-glow">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para Renovar seu Espaço?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Solicite uma avaliação gratuita e descubra como podemos transformar seu ambiente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/orcamento"
              className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover-glow hover-scale"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 hover-scale"
            >
              <span>Ver Portfólio</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
