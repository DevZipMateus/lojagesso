
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'}`}>
      <div className="container-custom">
        {/* Top Bar com Informações de Contato */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 md:mb-2">
          {/* Contato */}
          <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-gray-600 mb-2 md:mb-0 items-center">
            <a href="tel:+5594981293573" className="flex items-center hover:text-gesseiro-blue transition-colors duration-300 mb-1 md:mb-0">
              <Phone size={16} className="mr-2" />
              (94) 98129-3573
            </a>
            <a href="tel:+5594981291808" className="flex items-center hover:text-gesseiro-blue transition-colors duration-300 mb-1 md:mb-0">
              <Phone size={16} className="mr-2" />
              (94) 98129-1808
            </a>
            <a href="mailto:lojadogesseiropa@gmail.com" className="flex items-center hover:text-gesseiro-blue transition-colors duration-300 whitespace-nowrap">
              <Mail size={16} className="mr-2" />
              lojadogesseiropa@gmail.com
            </a>
          </div>
          
          {/* Redes Sociais */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/loja_do_gesseiro" target="_blank" className="text-gray-500 hover:text-gesseiro-blue transition-colors duration-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        
        {/* Navegação Principal */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/Logo-lojadogesseiro.jpg" alt="Logo Loja do Gesseiro" className="h-auto w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link to="/" className="nav-link">Início</Link>
            <a href="#sobre" className="nav-link">Sobre Nós</a>
            <a href="#produtos" className="nav-link">Produtos</a>
            <a href="#servicos" className="nav-link">Serviços</a>
            <a href="#contato" className="nav-link">Contato</a>
          </nav>
          
          {/* Botão Menu Mobile */}
          <button 
            className="md:hidden text-gray-600 hover:text-gesseiro-blue focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Menu de Navegação"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Menu Mobile */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-4 flex flex-col space-y-3 border-t mt-4">
          <Link to="/" className="px-4 py-2 text-gray-700 hover:text-gesseiro-blue hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Início</Link>
          <a href="#sobre" className="px-4 py-2 text-gray-700 hover:text-gesseiro-blue hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Sobre Nós</a>
          <a href="#produtos" className="px-4 py-2 text-gray-700 hover:text-gesseiro-blue hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Produtos</a>
          <a href="#servicos" className="px-4 py-2 text-gray-700 hover:text-gesseiro-blue hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Serviços</a>
          <a href="#contato" className="px-4 py-2 text-gray-700 hover:text-gesseiro-blue hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Contato</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
