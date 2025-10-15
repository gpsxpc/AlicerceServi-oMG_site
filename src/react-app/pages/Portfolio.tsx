import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  area: string;
  images: string[];
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", name: "Todos" },
    { id: "residential", name: "Residencial" },
    { id: "commercial", name: "Comercial" },
    { id: "renovation", name: "Reformas" },
  ];

  const projects = [
    {
      id: 1,
      title: "Casa Moderna em Condomínio",
      category: "residential",
      description: "Casa de 280m² com design contemporâneo, piscina e área gourmet completa.",
      location: "Nova Lima, MG",
      year: "2023",
      area: "280m²",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 2,
      title: "Edifício Comercial Centro",
      category: "commercial",
      description: "Prédio corporativo de 12 andares com estacionamento subterrâneo e heliporto.",
      location: "Belo Horizonte, MG",
      year: "2023",
      area: "3.500m²",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 3,
      title: "Reforma Residencial Completa",
      category: "renovation",
      description: "Modernização total de residência antiga, mantendo características históricas.",
      location: "Ouro Preto, MG",
      year: "2022",
      area: "320m²",
      images: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 4,
      title: "Conjunto Residencial Jardins",
      category: "residential",
      description: "Condomínio com 50 casas, clube e área de lazer completa.",
      location: "Contagem, MG",
      year: "2022",
      area: "15.000m²",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 5,
      title: "Shopping Center Regional",
      category: "commercial",
      description: "Centro comercial com 120 lojas, praça de alimentação e cinema.",
      location: "Betim, MG",
      year: "2021",
      area: "8.000m²",
      images: [
        "https://images.unsplash.com/photo-1567958911519-f0345db2bd2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 6,
      title: "Ampliação Industrial",
      category: "commercial",
      description: "Expansão de galpão industrial com nova linha de produção automatizada.",
      location: "Sete Lagoas, MG",
      year: "2023",
      area: "2.800m²",
      images: [
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Nosso Portfólio
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Conheça alguns dos nossos principais projetos realizados ao longo de mais de 20 anos de experiência
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-orange-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div 
                  className="h-64 bg-cover bg-center relative group"
                  style={{ backgroundImage: `url('${project.images[0]}')` }}
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="mt-3 text-sm font-medium text-orange-600">
                    {project.area}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm" 
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              ×
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div 
                className="h-96 lg:h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${selectedProject.images[0]}')` }}
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Localização:</span>
                    <span className="text-gray-600">{selectedProject.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Ano:</span>
                    <span className="text-gray-600">{selectedProject.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Área:</span>
                    <span className="text-gray-600">{selectedProject.area}</span>
                  </div>
                </div>
                
                {selectedProject.images.length > 1 && (
                  <div className="mt-6">
                    <h3 className="font-medium text-gray-900 mb-3">Mais imagens:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.images.slice(1).map((image, index) => (
                        <div 
                          key={index}
                          className="h-24 bg-cover bg-center rounded-lg"
                          style={{ backgroundImage: `url('${image}')` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossos Resultados
            </h2>
            <p className="text-xl text-blue-200">
              Números que comprovam nossa experiência e qualidade
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projetos Concluídos" },
              { number: "2M+", label: "m² Construídos" },
              { number: "20+", label: "Anos de Experiência" },
              { number: "100%", label: "Satisfação dos Clientes" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
