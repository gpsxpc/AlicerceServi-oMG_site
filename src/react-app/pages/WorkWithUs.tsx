import { useState } from "react";
import { Send, CheckCircle, Users, Award, Clock, Heart } from "lucide-react";

export default function WorkWithUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "job_application"
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Ambiente Profissional",
      description: "Trabalhe em uma empresa consolidada com mais de 20 anos no mercado"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipe Unida",
      description: "Faça parte de um time experiente e colaborativo"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Estabilidade",
      description: "Oportunidade de crescimento em uma empresa sólida"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Valorização",
      description: "Reconhecimento pelo seu trabalho e dedicação"
    }
  ];

  const positions = [
    {
      title: "Pedreiro",
      description: "Profissional experiente em alvenaria e acabamentos",
      requirements: ["Experiência comprovada", "Conhecimento em leitura de plantas", "Disponibilidade de horário"]
    },
    {
      title: "Eletricista",
      description: "Especialista em instalações elétricas residenciais e comerciais",
      requirements: ["Curso técnico ou experiência", "Conhecimento em NR-10", "Responsabilidade e pontualidade"]
    },
    {
      title: "Encanador",
      description: "Profissional em instalações hidráulicas e sanitárias",
      requirements: ["Experiência em hidráulica", "Conhecimento em soldas", "Disponibilidade para viagens"]
    },
    {
      title: "Auxiliar de Obras",
      description: "Suporte geral nas atividades de construção",
      requirements: ["Disposição para aprender", "Força física", "Compromisso com segurança"]
    },
    {
      title: "Mestre de Obras",
      description: "Coordenação e supervisão de equipes de trabalho",
      requirements: ["Experiência em liderança", "Conhecimento técnico amplo", "Capacidade de organização"]
    },
    {
      title: "Engenheiro Civil",
      description: "Gestão técnica e acompanhamento de projetos",
      requirements: ["Graduação em Eng. Civil", "CREA ativo", "Experiência em obras"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Trabalhe Conosco
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Junte-se à nossa equipe e faça parte de uma empresa consolidada no mercado de construção civil. 
            Oferecemos oportunidades de crescimento em um ambiente profissional e colaborativo.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Por que trabalhar na Alicerce?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos mais que um emprego, oferecemos uma carreira sólida e oportunidades de desenvolvimento profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Vagas Disponíveis
            </h2>
            <p className="text-xl text-gray-600">
              Confira as oportunidades atuais em nossa empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {position.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {position.description}
                </p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Requisitos:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Candidate-se Agora
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário abaixo e entraremos em contato
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Candidatura Enviada!
              </h3>
              <p className="text-gray-600">
                Obrigado pelo seu interesse. Analisaremos seu perfil e entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="(31) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Apresentação e Experiência *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none"
                  placeholder="Conte-nos sobre sua experiência profissional, principais habilidades e por que gostaria de trabalhar conosco..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Candidatura</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Processo de Seleção
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise do Currículo</h3>
              <p className="text-blue-200 text-sm">
                Avaliação da experiência e adequação ao perfil da vaga
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrevista</h3>
              <p className="text-blue-200 text-sm">
                Conversa para conhecer melhor seu perfil e motivações
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Integração</h3>
              <p className="text-blue-200 text-sm">
                Treinamento e integração à equipe da Alicerce
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
