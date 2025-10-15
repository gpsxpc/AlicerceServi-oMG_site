import { Users, Target, Eye, Heart, Clock, Shield, CheckCircle } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Qualidade",
      description: "Comprometimento com a excelência em cada detalhe do projeto"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Pontualidade",
      description: "Cumprimento rigoroso de prazos estabelecidos"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Transparência",
      description: "Comunicação clara e honesta em todas as etapas"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Parceria",
      description: "Relacionamento duradouro baseado na confiança mútua"
    }
  ];

  const achievements = [
    { number: "20+", label: "Anos de Experiência" },
    { number: "500+", label: "Projetos Concluídos" },
    { number: "100%", label: "Clientes Satisfeitos" },
    { number: "24/7", label: "Suporte Técnico" }
  ];

  return (
    <div className="pt-16 bg-black min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
                Sobre a Alicerce Serviços MG
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed animate-fade-in-delay">
                Há mais de 20 anos construindo sonhos e transformando projetos em realidade, 
                a Alicerce Serviços MG é sinônimo de qualidade, confiança e excelência na construção civil.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed animate-fade-in-delay-2">
                Nossa trajetória é marcada pelo compromisso com a satisfação do cliente, 
                inovação constante e respeito ao meio ambiente, sempre utilizando as melhores 
                práticas e tecnologias do mercado.
              </p>
            </div>
            <div 
              className="h-96 rounded-2xl bg-cover bg-center shadow-2xl hover-lift animate-fade-in-delay"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
              }}
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center p-8 card-tech rounded-2xl hover-lift hover-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 hover-glow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Missão</h2>
              <p className="text-gray-300 leading-relaxed">
                Oferecer soluções completas em construção civil com qualidade superior, 
                cumprindo prazos e superando expectativas, construindo relacionamentos duradouros 
                baseados na confiança e transparência.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center p-8 card-tech rounded-2xl hover-lift hover-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 hover-glow">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Visão</h2>
              <p className="text-gray-300 leading-relaxed">
                Ser reconhecida como a empresa líder em construção civil em Minas Gerais, 
                referência em inovação, sustentabilidade e excelência no atendimento, 
                contribuindo para o desenvolvimento urbano responsável.
              </p>
            </div>

            {/* Values Preview */}
            <div className="text-center p-8 card-tech rounded-2xl hover-lift hover-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 hover-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Valores</h2>
              <p className="text-gray-300 leading-relaxed">
                Nossos valores fundamentais guiam cada decisão e ação: qualidade inquestionável, 
                pontualidade rigorosa, transparência total e parceria verdadeira com nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nossos Valores em Ação
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada valor é vivido diariamente em nossa rotina de trabalho, 
              refletindo em cada projeto que realizamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 card-tech rounded-xl hover-lift hover-glow transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4 hover-glow">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossos Números
            </h2>
            <p className="text-xl text-blue-200">
              Resultados que falam por si só
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center hover-scale transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold text-orange-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-200 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Nossos Diferenciais
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                O que nos torna únicos no mercado de construção civil
              </p>
              
              <div className="space-y-6">
                {[
                  "Equipe altamente qualificada e certificada",
                  "Uso de materiais de primeira qualidade",
                  "Tecnologia avançada em gestão de projetos",
                  "Acompanhamento técnico especializado",
                  "Garantia estendida em todos os serviços",
                  "Atendimento personalizado 24/7"
                ].map((differential, index) => (
                  <div key={index} className="flex items-center space-x-3 hover-scale">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{differential}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div 
                className="h-48 rounded-xl bg-cover bg-center shadow-lg hover-lift"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"
                }}
              />
              <div 
                className="h-48 rounded-xl bg-cover bg-center shadow-lg mt-8 hover-lift"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"
                }}
              />
              <div 
                className="h-48 rounded-xl bg-cover bg-center shadow-lg -mt-8 hover-lift"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"
                }}
              />
              <div 
                className="h-48 rounded-xl bg-cover bg-center shadow-lg hover-lift"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Informações da Empresa
          </h2>
          
          <div className="card-tech rounded-2xl p-8 md:p-12 hover-lift hover-glow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Dados Corporativos</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-orange-400">Razão Social:</strong> Alicerce Serviços MG Ltda.</p>
                  <p><strong className="text-orange-400">CNPJ:</strong> 62.804.670/0001-18</p>
                  <p><strong className="text-orange-400">Fundação:</strong> 2004</p>
                  <p><strong className="text-orange-400">Sede:</strong> Belo Horizonte, MG</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contato</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-orange-400">Telefone:</strong> (31) 97254-3306</p>
                  <p><strong className="text-orange-400">WhatsApp:</strong> (31) 97339-0442</p>
                  <p><strong className="text-orange-400">E-mail:</strong> alicerceservicosmg@gmail.com</p>
                  <p><strong className="text-orange-400">Atendimento:</strong> Segunda a Sexta, 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
