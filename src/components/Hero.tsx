
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-gesseiro-blue/95 to-gesseiro-blue relative overflow-hidden">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 8 0C3.582 0 0 3.582 0 8c0 1.422.378 2.749 1.02 3.875l-.008.04A8.86 8.86 0 0 1 0 16.018h2.005a6.82 6.82 0 0 0 1.264-.18l.009-.005A8.048 8.048 0 0 0 8 16c4.418 0 8-3.582 8-8a7.848 7.848 0 0 0-2.399-5.674l-1.516 1.516A5.864 5.864 0 0 1 14 8c0 3.314-2.686 6-6 6a5.975 5.975 0 0 1-3.107-.857l-.01-.005-.005-.002-.953.954.496-1.499A5.92 5.92 0 0 1 2 8c0-3.314 2.686-6 6-6a5.858 5.858 0 0 1 4.385 1.941l1.516-1.515A7.851 7.851 0 0 0 8 0z"/>
                <path d="M10.837 3.629a6 6 0 0 0-8.485 8.485L.704 15.962a.5.5 0 0 0 .143.508.5.5 0 0 0 .55.08l3.744-1.613a6 6 0 0 0 8.485-8.485l-1.789 1.789a4 4 0 1 1-5.657 5.657l-1.82 1.82a.5.5 0 0 0-.146.353v.465A.5.5 0 0 0 5.5 16h.465a.5.5 0 0 0 .353-.146l.788-.789A6 6 0 0 0 10.837 3.63z"/>
              </svg>
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
