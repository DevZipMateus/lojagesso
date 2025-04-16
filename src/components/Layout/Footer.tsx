
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gesseiro-blue text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p>(94) 98129-3573</p>
                  <p>(94) 98129-1808</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p>lojadogesseiropa@gmail.com</p>
                  <p>lojadogesseiro@hotmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Av Nova Carajás Qd 502 Lt 13, Bairro Nova Carajás</span>
              </li>
            </ul>
          </div>
          
          {/* Links Rápidos */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gesseiro-red transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-gesseiro-red transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-gesseiro-red transition-colors duration-300 inline-block">Produtos</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gesseiro-red transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-gesseiro-red transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Horário de Funcionamento */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span className="font-medium">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span className="font-medium">08:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="font-medium">Fechado</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <a href="https://www.instagram.com/loja_do_gesseiro" target="_blank" className="bg-white/10 hover:bg-gesseiro-red/80 hover:text-white transition-colors duration-300 p-2 rounded-full inline-flex" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {currentYear} Loja do Gesseiro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
