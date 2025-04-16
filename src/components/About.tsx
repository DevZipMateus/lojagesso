
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Imagem */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-gesseiro-blue/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1585336261176-3e408ff5f1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Trabalho em gesso e drywall" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gesseiro-blue rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Experiência</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gesseiro-green rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Qualidade</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Satisfação garantida</div>
              </div>
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-gesseiro-blue/10 text-gesseiro-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Referência em vendas de produtos para gesso e drywall
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A Loja do Gesseiro é especializada na venda de produtos para gesso e drywall, oferecendo uma ampla variedade de materiais de alta qualidade para profissionais e consumidores finais.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Nossa equipe está pronta para oferecer o melhor atendimento e as soluções adequadas para cada tipo de projeto, garantindo economia e eficiência em suas obras.
            </p>
            
            {/* Diferenciais */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gesseiro-green/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-gesseiro-green" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Produtos de Qualidade</h4>
                  <p className="text-gray-600">Trabalhamos apenas com as melhores marcas do mercado</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-gesseiro-green/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-gesseiro-green" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Orientação técnica para cada tipo de projeto</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-gesseiro-green/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-gesseiro-green" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Preços Competitivos</h4>
                  <p className="text-gray-600">Melhor relação custo-benefício da região</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contato" 
              className="bg-gesseiro-blue hover:bg-gesseiro-blue/90 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" 
              style={{ animationDelay: '0.7s' }}
            >
              <span>Conheça Nossos Produtos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
