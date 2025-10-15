import { Link } from "react-router";
import { ArrowRight, CheckCircle, Users, Award, Clock } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Mais de 20 Anos",
      description: "Experiência consolidada no mercado de construção civil"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Qualidade Garantida",
      description: "Projetos executados com os mais altos padrões de qualidade"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipe Especializada",
      description: "Profissionais qualificados e experientes"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Confiança",
      description: "Milhares de clientes satisfeitos ao longo dos anos"
    }
  ];

  return (
    <div className="pt-16 relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 tech-gradient z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
          }}
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="block">Alicerce Serviços MG</span>
            <span className="block text-orange-400 mt-2">Construção Civil em Geral</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
            Mais de 20 anos construindo sonhos com qualidade, confiança e excelência
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              to="/orcamento"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-500 transition-all duration-300 hover-glow hover-lift flex items-center justify-center space-x-2"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover-lift"
            >
              Ver Portfólio
            </Link>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Por que escolher a Alicerce?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nosso compromisso é entregar obras de qualidade superior, respeitando prazos e oferecendo o melhor custo-benefício
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl card-tech hover-lift hover-glow transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-black relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-300">
              Soluções completas em construção civil para residências e empresas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card-tech rounded-xl overflow-hidden hover-lift hover-glow transition-all duration-300">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Construção Residencial</h3>
                <p className="text-gray-300">Casas, sobrados e edifícios residenciais com qualidade superior</p>
              </div>
            </div>

            <div className="card-tech rounded-xl overflow-hidden hover-lift hover-glow transition-all duration-300">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Reformas e Ampliações</h3>
                <p className="text-gray-300">Modernize e expanda seu imóvel com nossa expertise</p>
              </div>
            </div>

            <div className="card-tech rounded-xl overflow-hidden hover-lift hover-glow transition-all duration-300">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Construção Comercial</h3>
                <p className="text-gray-300">Projetos comerciais e industriais de grande porte</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center space-x-2 bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all duration-300 hover-glow hover-lift"
            >
              <span>Ver Todos os Serviços</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Entre em contato conosco e receba um orçamento personalizado sem compromisso
          </p>
          <Link
            to="/orcamento"
            className="inline-flex items-center space-x-2 bg-orange-600 text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-orange-500 transition-all duration-300 hover-glow hover-lift"
          >
            <span>Solicitar Orçamento Grátis</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
