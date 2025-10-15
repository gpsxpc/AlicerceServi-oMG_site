import { useState, useEffect } from "react";
import { useAuth } from "@getmocha/users-service/react";
import { useNavigate } from "react-router";
import { User, Mail, Phone, Calendar, FileText, Edit3, Save, X } from "lucide-react";
import type { Quote, UserProfile } from "@/shared/types";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    phone: "",
    profile_picture_url: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    fetchProfileData();
  }, [user, navigate]);

  const fetchProfileData = async () => {
    try {
      const [profileResponse, quotesResponse] = await Promise.all([
        fetch("/api/profile"),
        fetch("/api/quotes")
      ]);

      if (profileResponse.ok) {
        const profileData = await profileResponse.json();
        setProfile(profileData.profile);
        setEditData({
          phone: profileData.profile?.phone || "",
          profile_picture_url: profileData.profile?.profile_picture_url || ""
        });
      }

      if (quotesResponse.ok) {
        const quotesData = await quotesResponse.json();
        setQuotes(quotesData);
      }
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        await fetchProfileData();
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Erro ao salvar perfil:", error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-900/30 text-yellow-400 border-yellow-500/30";
      case "in_progress":
        return "bg-blue-900/30 text-blue-400 border-blue-500/30";
      case "completed":
        return "bg-green-900/30 text-green-400 border-green-500/30";
      default:
        return "bg-gray-900/30 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pendente";
      case "in_progress":
        return "Em Andamento";
      case "completed":
        return "Concluído";
      default:
        return "Desconhecido";
    }
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin">
          <div className="w-8 h-8 border-2 border-orange-600 border-t-transparent rounded-full" />
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="pt-16 min-h-screen bg-black relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="card-tech rounded-2xl overflow-hidden mb-8 hover-lift hover-glow">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center hover-glow">
                {profile?.profile_picture_url ? (
                  <img
                    src={profile.profile_picture_url}
                    alt="Perfil"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="w-10 h-10 text-white" />
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  {user.google_user_data.name || "Usuário"}
                </h1>
                <p className="text-blue-200">
                  Cliente desde {formatDate(user.created_at).split(" ")[0]}
                </p>
              </div>
              <button
                onClick={() => logout()}
                className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200 hover-scale"
              >
                Sair
              </button>
            </div>
          </div>

          <div className="p-8 bg-black/40 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Informações Pessoais</h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-200 hover-scale"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Editar</span>
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveProfile}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 hover-scale"
                  >
                    <Save className="w-4 h-4" />
                    <span>Salvar</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 hover-scale"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancelar</span>
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-400">E-mail</div>
                  <div className="font-medium text-white">{user.email}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <div className="text-sm text-gray-400">Telefone</div>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                      className="w-full px-3 py-1 bg-black/50 border border-white/20 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400"
                      placeholder="(31) 99999-9999"
                    />
                  ) : (
                    <div className="font-medium text-white">
                      {profile?.phone || "Não informado"}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-400">Último acesso</div>
                  <div className="font-medium text-white">
                    {formatDate(user.last_signed_in_at)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quotes History */}
        <div className="card-tech rounded-2xl overflow-hidden hover-lift hover-glow">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <FileText className="w-6 h-6" />
              <span>Histórico de Orçamentos</span>
            </h2>
            <p className="text-orange-100 mt-1">
              Acompanhe todos os seus orçamentos solicitados
            </p>
          </div>

          <div className="p-8 bg-black/40 backdrop-blur-sm">
            {quotes.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Nenhum orçamento ainda
                </h3>
                <p className="text-gray-300 mb-6">
                  Você ainda não solicitou nenhum orçamento. Que tal começar agora?
                </p>
                <button
                  onClick={() => navigate("/orcamento")}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 hover-scale hover-glow"
                >
                  Solicitar Orçamento
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {quotes.map((quote) => (
                  <div
                    key={quote.id}
                    className="border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-200 hover-lift bg-black/20 backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Orçamento #{quote.id}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Solicitado em {formatDate(quote.created_at)}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(quote.status)}`}>
                        {getStatusText(quote.status)}
                      </span>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {quote.message}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
                      <span>Contato: {quote.phone}</span>
                      <span>E-mail: {quote.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
