import { BrowserRouter as Router, Routes, Route } from "react-router";
import { AuthProvider } from "@getmocha/users-service/react";
import HomePage from "@/react-app/pages/Home";
import ServicesPage from "@/react-app/pages/Services";
import AboutPage from "@/react-app/pages/About";
import PortfolioPage from "@/react-app/pages/Portfolio";
import WorkWithUsPage from "@/react-app/pages/WorkWithUs";
import ContactPage from "@/react-app/pages/Contact";
import QuotePage from "@/react-app/pages/Quote";
import AuthCallbackPage from "@/react-app/pages/AuthCallback";
import ProfilePage from "@/react-app/pages/Profile";
import ConstructionResidential from "@/react-app/pages/services/ConstructionResidential";
import ConstructionCommercial from "@/react-app/pages/services/ConstructionCommercial";
import Renovations from "@/react-app/pages/services/Renovations";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import TechBackground from "@/react-app/components/TechBackground";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black relative">
          <TechBackground />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/servicos/construcao-residencial" element={<ConstructionResidential />} />
            <Route path="/servicos/construcao-comercial" element={<ConstructionCommercial />} />
            <Route path="/servicos/reformas-ampliacoes" element={<Renovations />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/trabalhe-conosco" element={<WorkWithUsPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/orcamento" element={<QuotePage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/auth/callback" element={<AuthCallbackPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
