import { useState } from "react";
import { Send, CheckCircle, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "contact"
        }),
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

  return (
    <div className="pt-16 bg-black min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
            Entre em Contato
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in-delay">
            Estamos prontos para atender você. Entre em contato conosco através dos canais abaixo 
            ou preencha o formulário e retornaremos em breve.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 hover-scale">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 hover-glow">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Telefones</h3>
                    <div className="space-y-1 text-gray-300">
                      <p className="flex items-center">
                        <span className="mr-2">📞</span>
                        <a href="tel:+5531972543306" className="hover:text-orange-400 transition-colors duration-200">
                          (31) 97254-3306
                        </a>
                      </p>
                      <p className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        <a href="https://wa.me/5531973390442" className="hover:text-orange-400 transition-colors duration-200">
                          (31) 97339-0442 (WhatsApp)
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-scale">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 hover-glow">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">E-mail</h3>
                    <a 
                      href="mailto:alicerceservicosmg@gmail.com"
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      alicerceservicosmg@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-scale">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 hover-glow">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Localização</h3>
                    <p className="text-gray-300">
                      Belo Horizonte, Minas Gerais<br />
                      Atendemos toda a região metropolitana
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-scale">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 hover-glow">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Horário de Atendimento</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Plantão para emergências</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="mt-12 p-6 card-tech rounded-2xl hover-lift hover-glow">
                <h3 className="text-xl font-semibold text-white mb-4">Dados da Empresa</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-orange-400">Razão Social:</strong> Alicerce Serviços MG Ltda.</p>
                  <p><strong className="text-orange-400">CNPJ:</strong> 62.804.670/0001-18</p>
                  <p><strong className="text-orange-400">Experiência:</strong> Mais de 20 anos no mercado</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Envie sua Mensagem
              </h2>

              {submitted ? (
                <div className="text-center py-12 card-tech rounded-2xl">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-300">
                    Obrigado pelo contato. Retornaremos em breve através dos dados informados.
                  </p>
                </div>
              ) : (
                <div className="card-tech rounded-2xl p-8 hover-lift hover-glow">
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
                        Telefone/WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-white placeholder-gray-400"
                        placeholder="(31) 99999-9999"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none text-white placeholder-gray-400"
                        placeholder="Como podemos ajudá-lo? Conte-nos sobre seu projeto ou dúvida..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover-glow hover-scale flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nossa Área de Atuação
            </h2>
            <p className="text-xl text-gray-300">
              Atendemos Belo Horizonte e toda a região metropolitana
            </p>
          </div>

          <div className="card-tech rounded-2xl overflow-hidden hover-lift hover-glow">
            <div className="h-96 bg-gradient-to-br from-blue-900/20 to-orange-900/20 flex items-center justify-center border border-white/10">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Belo Horizonte e Região</h3>
                <p className="text-gray-300">
                  Atendemos toda a região metropolitana de Belo Horizonte<br />
                  Entre em contato para verificar disponibilidade na sua região
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-20 bg-black border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-gray-300">
              Respostas para as perguntas mais comuns
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Quanto tempo demora para receber um orçamento?",
                answer: "Normalmente retornamos em até 24 horas com um orçamento preliminar. Para orçamentos detalhados, pode levar de 2 a 3 dias úteis."
              },
              {
                question: "Vocês trabalham com que tipos de projetos?",
                answer: "Atendemos desde pequenas reformas residenciais até grandes obras comerciais e industriais. Nossa experiência abrange todos os segmentos da construção civil."
              },
              {
                question: "Oferecem garantia nos serviços?",
                answer: "Sim, oferecemos garantia em todos os nossos serviços. O prazo varia conforme o tipo de serviço, sempre seguindo as normas técnicas e legais."
              },
              {
                question: "Como funciona o acompanhamento da obra?",
                answer: "Fornecemos relatórios regulares de progresso, fotos da evolução da obra e mantemos comunicação constante com o cliente durante todo o processo."
              }
            ].map((faq, index) => (
              <div key={index} className="card-tech rounded-xl p-6 hover-lift hover-glow">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
