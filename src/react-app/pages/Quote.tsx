import { useState } from "react";
import { Send, CheckCircle, FileText, Clock, Phone, MessageCircle } from "lucide-react";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      number: "01",
      title: "Solicitação",
      description: "Preencha o formulário com detalhes do seu projeto",
      icon: <FileText className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Análise",
      description: "Nossa equipe técnica analisa as informações fornecidas",
      icon: <Clock className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Contato",
      description: "Entramos em contato em até 24 horas para esclarecimentos",
      icon: <Phone className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Orçamento",
      description: "Enviamos orçamento detalhado em até 72 horas",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-16 bg-black min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
            Solicitar Orçamento
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto animate-fade-in-delay">
            Receba um orçamento detalhado e personalizado para seu projeto. 
            Nossa equipe especializada está pronta para transformar seus sonhos em realidade.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Como Funciona o Processo
            </h2>
            <p className="text-xl text-gray-300">
              Processo simples e transparente para seu orçamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative hover-scale">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-blue-300 transform -translate-y-1/2 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg hover-glow">
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold text-orange-400 mb-2">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-tech rounded-2xl overflow-hidden hover-lift hover-glow">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Formulário de Orçamento
              </h2>
              <p className="text-blue-200 text-center mt-2">
                Preencha todos os campos para um orçamento mais preciso
              </p>
            </div>

            <div className="p-8 bg-black/40 backdrop-blur-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Solicitação Enviada com Sucesso!
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">
                    Recebemos sua solicitação de orçamento e entraremos em contato em breve.
                  </p>
                  <div className="card-tech rounded-xl p-6 hover-glow">
                    <h4 className="font-semibold text-white mb-3">Próximos Passos:</h4>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <p>✓ Análise técnica do seu projeto</p>
                      <p>✓ Contato em até 24 horas para esclarecimentos</p>
                      <p>✓ Orçamento detalhado em até 72 horas</p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.me/5531973390442"
                      className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 hover-scale hover-glow"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="tel:+5531972543306"
                      className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 hover-scale hover-glow"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Telefone</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-white placeholder-gray-400"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-white placeholder-gray-400"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-white placeholder-gray-400"
                      placeholder="(31) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                      Descrição do Projeto *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={8}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none text-white placeholder-gray-400"
                      placeholder="Descreva detalhadamente seu projeto:
• Tipo de construção (casa, prédio, reforma, etc.)
• Tamanho aproximado (m² ou número de cômodos)
• Localização da obra
• Prazo desejado
• Materiais de preferência
• Orçamento estimado (opcional)
• Outras informações importantes"
                    />
                  </div>

                  <div className="card-tech rounded-xl p-6 hover-glow">
                    <h3 className="font-semibold text-white mb-3">Informações Importantes:</h3>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <p>• Quanto mais detalhes fornecer, mais preciso será seu orçamento</p>
                      <p>• Orçamentos são gratuitos e sem compromisso</p>
                      <p>• Garantimos total sigilo das informações</p>
                      <p>• Prazo de resposta: até 72 horas</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-700 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover-glow hover-scale flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Solicitar Orçamento Gratuito</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prefere falar diretamente conosco?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Nossa equipe está disponível para esclarecer dúvidas e fornecer informações
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://wa.me/5531973390442"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover-glow hover-scale flex items-center justify-center space-x-3"
            >
              <MessageCircle className="w-6 h-6" />
              <div>
                <div className="text-lg">WhatsApp</div>
                <div className="text-sm opacity-90">(31) 97339-0442</div>
              </div>
            </a>
            <a
              href="tel:+5531972543306"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover-glow hover-scale flex items-center justify-center space-x-3"
            >
              <Phone className="w-6 h-6" />
              <div>
                <div className="text-lg">Telefone</div>
                <div className="text-sm opacity-90">(31) 97254-3306</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
