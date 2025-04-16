
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section bg-gesseiro-gray">
      <div className="container-custom">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-gesseiro-blue/10 text-gesseiro-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos à disposição para atender suas necessidades e tirar todas as dúvidas.
          </p>
        </div>
        
        {/* Grid de Cards de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-gesseiro-green p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" 
                alt="WhatsApp" 
                className="w-16 h-16 object-contain" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Atendimento rápido e prático</p>
              <a 
                href="https://wa.me/5594981293573" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gesseiro-blue hover:bg-gesseiro-blue/90 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Telefone Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gesseiro-blue p-6 flex items-center justify-center">
              <Phone className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4">Fale diretamente conosco</p>
              <a 
                href="tel:+5594981293573"
                className="bg-gesseiro-blue hover:bg-gesseiro-blue/90 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>(94) 98129-3573</span>
              </a>
              <div className="mt-3">
                <a 
                  href="tel:+5594981291808"
                  className="text-gesseiro-blue hover:underline"
                >
                  <span>(94) 98129-1808</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gesseiro-red p-6 flex items-center justify-center">
              <Mail className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-600 mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:lojadogesseiropa@gmail.com"
                className="bg-gesseiro-blue hover:bg-gesseiro-blue/90 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>lojadogesseiropa@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mapa e Endereço */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-4 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Endereço */}
            <div className="flex flex-col">
              <div className="flex items-start mb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="text-gesseiro-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h4>
                  <p className="text-gray-600">Av Nova Carajás Qd 502 Lt 13, Bairro Nova Carajás</p>
                </div>
              </div>
              
              {/* Horário de Funcionamento */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Horário de Atendimento</h4>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Segunda - Sexta:</span>
                    <span className="font-medium text-gray-900">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sábado:</span>
                    <span className="font-medium text-gray-900">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domingo:</span>
                    <span className="font-medium text-gray-900">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mapa */}
            <div className="rounded-lg overflow-hidden h-[300px] shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63478.42671955552!2d-49.90300324901037!3d-6.076450690789727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92dd4f000f10876b%3A0xb5b5e344c7b5404d!2sLoja%20do%20gesseiro!5e0!3m2!1spt-BR!2sbr!4v1744809957151!5m2!1spt-BR!2sbr" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Loja do Gesseiro"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
