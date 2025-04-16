
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();
  
  // Iniciar efeito de pulsação a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false);
  };
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-3' : 'bottom-8 right-8'} z-50`}>
      {/* Opções de Contato */}
      <div className={`flex flex-col-reverse items-end mb-3 space-y-reverse space-y-2 transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <a 
          href="https://wa.me/5594981293573" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-gesseiro-green text-white px-4 py-2 rounded-md shadow-lg hover:bg-gesseiro-green/90 transition-all duration-300 gap-2 font-medium"
        >
          <span className="mr-1">Fale agora</span>
        </a>
      </div>
      
      {/* Botão Principal */}
      <button
        onClick={toggleMenu}
        className={`${isMobile ? 'p-3' : 'p-4'} rounded-full flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gesseiro-green hover:bg-gesseiro-green/90'} 
          ${isOpen ? 'text-white' : 'text-white'} 
          ${isPulsing && !isOpen ? 'animate-pulse' : ''}
          transform hover:scale-105 active:scale-95 shadow-lg`}
        aria-label={isOpen ? "Fechar menu de contato" : "Abrir menu de contato"}
      >
        {isOpen ? (
          <X size={isMobile ? 18 : 22} />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 8 0C3.582 0 0 3.582 0 8c0 1.422.378 2.749 1.02 3.875l-.008.04A8.86 8.86 0 0 1 0 16.018h2.005a6.82 6.82 0 0 0 1.264-.18l.009-.005A8.048 8.048 0 0 0 8 16c4.418 0 8-3.582 8-8a7.848 7.848 0 0 0-2.399-5.674l-1.516 1.516A5.864 5.864 0 0 1 14 8c0 3.314-2.686 6-6 6a5.975 5.975 0 0 1-3.107-.857l-.01-.005-.005-.002-.953.954.496-1.499A5.92 5.92 0 0 1 2 8c0-3.314 2.686-6 6-6a5.858 5.858 0 0 1 4.385 1.941l1.516-1.515A7.851 7.851 0 0 0 8 0z"/>
            <path d="M10.837 3.629a6 6 0 0 0-8.485 8.485L.704 15.962a.5.5 0 0 0 .143.508.5.5 0 0 0 .55.08l3.744-1.613a6 6 0 0 0 8.485-8.485l-1.789 1.789a4 4 0 1 1-5.657 5.657l-1.82 1.82a.5.5 0 0 0-.146.353v.465A.5.5 0 0 0 5.5 16h.465a.5.5 0 0 0 .353-.146l.788-.789A6 6 0 0 0 10.837 3.63z"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
