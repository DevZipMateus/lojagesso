
import React from 'react';
import { Layers, Wrench, PaintBucket, Home } from 'lucide-react';

const servicos = [
  {
    id: 1,
    titulo: "Instalação de Forros",
    descricao: "Forros de gesso e drywall com acabamento perfeito para diversos ambientes.",
    icon: Layers,
    delay: '0s'
  },
  {
    id: 2,
    titulo: "Divisórias de Drywall",
    descricao: "Divisórias em drywall para ambientes residenciais e comerciais.",
    icon: Wrench,
    delay: '0.1s'
  },
  {
    id: 3,
    titulo: "Acabamentos Especiais",
    descricao: "Acabamentos personalizados em gesso para valorizar sua obra.",
    icon: PaintBucket,
    delay: '0.2s'
  },
  {
    id: 4,
    titulo: "Projetos Completos",
    descricao: "Execução de projetos completos em gesso e drywall para residências e empresas.",
    icon: Home,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gesseiro-red/10 text-gesseiro-red font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas em gesso e drywall
          </h2>
          <p className="text-gray-600 text-lg">
            Além da venda de produtos, oferecemos serviços especializados para atender às necessidades específicas do seu projeto.
          </p>
        </div>
        
        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((servico) => (
            <div 
              key={servico.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: servico.delay }}
            >
              <div className="bg-gesseiro-red/10 p-4 rounded-lg inline-block mb-5">
                <servico.icon className="text-gesseiro-red" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{servico.titulo}</h3>
              <p className="text-gray-600">{servico.descricao}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contato" 
            className="bg-gesseiro-red hover:bg-gesseiro-red/90 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Fale com um especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
