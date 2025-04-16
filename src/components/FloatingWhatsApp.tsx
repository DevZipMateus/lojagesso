
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
          <img 
            src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" 
            alt="WhatsApp" 
            className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} object-contain`} 
          />
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
