import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@getmocha/users-service/react";
import { Loader2 } from "lucide-react";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { exchangeCodeForSessionToken } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        await exchangeCodeForSessionToken();
        // Redirect to profile page after successful login
        navigate("/perfil");
      } catch (error) {
        console.error("Erro no login:", error);
        // Redirect to home page if login fails
        navigate("/");
      }
    };

    handleCallback();
  }, [exchangeCodeForSessionToken, navigate]);

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="text-center">
        <div className="animate-spin mb-6">
          <Loader2 className="w-12 h-12 text-orange-600 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Finalizando o login...
        </h2>
        <p className="text-gray-600">
          Aguarde enquanto configuramos sua conta
        </p>
      </div>
    </div>
  );
}
