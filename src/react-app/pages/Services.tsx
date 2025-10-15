import { Link } from "react-router";
import { ArrowRight, Home, Building, Wrench, Hammer, PaintBucket, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Construção Residencial",
      description: "Construção completa de casas, sobrados e edifícios residenciais com os mais altos padrões de qualidade e segurança.",
      features: ["Projeto arquitetônico", "Fundação e estrutura", "Acabamentos de qualidade", "Entrega no prazo"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/servicos/construcao-residencial"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Construção Comercial",
      description: "Desenvolvimento de projetos comerciais e industriais, incluindo escritórios, lojas, galpões e fábricas.",
      features: ["Projetos corporativos", "Galpões industriais", "Centros comerciais", "Infraestrutura completa"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/servicos/construcao-comercial"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Reformas e Ampliações",
      description: "Modernização e expansão de imóveis existentes, respeitando a estrutura original e criando novos ambientes.",
      features: ["Reforma completa", "Ampliação de ambientes", "Modernização", "Restauração"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/servicos/reformas-ampliacoes"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Alvenaria e Estruturas",
      description: "Serviços especializados em alvenaria estrutural, concreto armado e estruturas metálicas para qualquer tipo de obra.",
      features: ["Fundações profundas", "Estruturas de concreto", "Alvenaria estrutural", "Estruturas metálicas"],
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/orcamento"
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: "Acabamentos",
      description: "Serviços completos de acabamento, incluindo pintura, revestimentos, pisos e instalações finais.",
      features: ["Pintura interna e externa", "Revestimentos cerâmicos", "Pisos e laminados", "Acabamentos finos"],
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/orcamento"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instalações",
      description: "Instalações elétricas, hidráulicas e de gás, seguindo todas as normas técnicas e de segurança vigentes.",
      features: ["Instalações elétricas", "Sistemas hidráulicos", "Instalações de gás", "Sistemas de segurança"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/orcamento"
    }
  ];

  return (
    <div className="pt-16 bg-black min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
            Nossos Serviços
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in-delay">
            Oferecemos soluções completas em construção civil com mais de 20 anos de experiência, 
            garantindo qualidade e excelência em cada projeto
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="card-tech rounded-2xl overflow-hidden hover-lift hover-glow transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row">
                  <div 
                    className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="w-full md:w-1/2 p-8 bg-black/40 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mb-4 hover-glow">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors duration-200">
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nosso processo garante transparência, qualidade e pontualidade em cada etapa do projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consulta Inicial", description: "Análise detalhada das suas necessidades e elaboração de proposta personalizada" },
              { step: "02", title: "Projeto e Planejamento", description: "Desenvolvimento do projeto técnico e cronograma de execução detalhado" },
              { step: "03", title: "Execução", description: "Realização da obra com acompanhamento técnico constante e relatórios de progresso" },
              { step: "04", title: "Entrega", description: "Finalização com vistoria completa e entrega da obra dentro do prazo acordado" }
            ].map((item, index) => (
              <div key={index} className="text-center card-tech rounded-xl p-6 hover-lift hover-glow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 hover-glow">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Entre em contato conosco e receba um orçamento detalhado para o seu projeto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/orcamento"
              className="inline-flex items-center justify-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>Fale Conosco</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
