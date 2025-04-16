
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import Contact from '../components/Contact';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Index = () => {
  // Rolar para o topo quando a página carregar
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Adicionar meta tags para SEO
    document.title = "Loja do Gesseiro - Qualidade e eficiência em Gesso e Drywall";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Loja do Gesseiro oferece produtos de alta qualidade para gesso e drywall. Encontre tudo para sua obra com os melhores preços e atendimento personalizado.");
    }
    
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = "Loja do Gesseiro - Produtos para Gesso e Drywall";
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = "Tudo em produtos para gesso e drywall com qualidade e preço justo. Visite-nos!";
    document.head.appendChild(ogDescription);
    
    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = "/lovable-uploads/8a030d1c-c30b-47f5-bcf6-c877d478b6c8.png";
    document.head.appendChild(ogImage);
    
    return () => {
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogImage);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-grow pt-20">
        <Hero />
        <About />
        <Products />
        <Services />
        <Contact />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
