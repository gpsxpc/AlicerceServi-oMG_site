import { X } from "lucide-react";
import { useAuth } from "@getmocha/users-service/react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { redirectToLogin } = useAuth();

  const handleLogin = async () => {
    await redirectToLogin();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Entre na sua conta</h2>
            <p className="text-gray-600 mt-2">
              Acesse sua área de cliente para acompanhar seus orçamentos
            </p>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Entrar com Google
          </button>

          <p className="text-xs text-gray-500">
            Ao fazer login, você concorda com nossos termos de uso e política de privacidade.
          </p>
        </div>
      </div>
    </div>
  );
}
