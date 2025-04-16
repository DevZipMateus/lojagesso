
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="inicio" className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-gesseiro-blue/95 to-gesseiro-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601928846299-820c16250625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-gesseiro-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gesseiro-red/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
          animationDelay: '0.1s'
        }}>
            Qualidade e eficiência em Gesso e Drywall
          </h1>
          
          <p className="text-lg text-white/90 mb-10 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Oferecemos os melhores produtos e serviços em gesso e drywall para sua obra ou reforma.
            Temos tudo o que você precisa com o melhor preço e qualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <a href="https://wa.me/5594981293573" target="_blank" rel="noopener noreferrer" className="bg-gesseiro-green hover:bg-gesseiro-green/90 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-medium">
              <img src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#produtos" className="bg-gesseiro-red hover:bg-gesseiro-red/90 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-medium">
              <span>Nossos Produtos</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decoração em onda */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
