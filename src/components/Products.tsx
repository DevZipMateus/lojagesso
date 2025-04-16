
import React, { useState } from 'react';

const produtos = [
  {
    id: 1,
    nome: "Placas de Gesso",
    descricao: "Placas de gesso acartonado para forros e paredes",
    imagem: "/lovable-uploads/placasdegesso.png",
    categoria: "gesso"
  },
  {
    id: 2,
    nome: "Perfis Metálicos",
    descricao: "Estruturas metálicas para instalação de drywall",
    imagem: "/lovable-uploads/Perfismetálicos.png",
    categoria: "drywall"
  },
  {
    id: 3,
    nome: "Massas para acabamento",
    descricao: "Massas especiais para acabamento de superfícies",
    imagem: "/lovable-uploads/baldes.png",
    categoria: "acabamento"
  },
  {
    id: 4,
    nome: "Gesso em Pó",
    descricao: "Gesso em pó para molduras e acabamentos",
    imagem: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    categoria: "gesso"
  },
  {
    id: 5,
    nome: "Placas de Drywall",
    descricao: "Placas de drywall para construção de paredes e forros",
    imagem: "/lovable-uploads/placasdedraywall.png",
    categoria: "drywall"
  },
  {
    id: 6,
    nome: "Parafusos",
    descricao: "Parafusos específicos para trabalhos em drywall",
    imagem: "https://images.unsplash.com/photo-1621685771830-077d51a3deb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    categoria: "drywall"
  }
];

const categorias = ["todos", "gesso", "drywall", "acabamento"];

const Products = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  
  const produtosFiltrados = categoriaAtiva === "todos" 
    ? produtos 
    : produtos.filter(produto => produto.categoria === categoriaAtiva);
  
  return (
    <section id="produtos" className="section bg-gesseiro-gray">
      <div className="container-custom">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-gesseiro-green/10 text-gesseiro-green font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Produtos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tudo para sua obra em gesso e drywall
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos uma ampla variedade de produtos de alta qualidade para profissionais e consumidores finais.
          </p>
        </div>
        
        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categorias.map(categoria => (
            <button 
              key={categoria}
              onClick={() => setCategoriaAtiva(categoria)}
              className={`px-4 py-2 rounded-full transition-all ${
                categoriaAtiva === categoria 
                ? 'bg-gesseiro-blue text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtosFiltrados.map((produto, index) => (
            <div 
              key={produto.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{produto.nome}</h3>
                <p className="text-gray-600 mb-4">{produto.descricao}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-gesseiro-blue/10 text-gesseiro-blue text-xs font-medium px-2.5 py-1 rounded-full">
                    {produto.categoria.charAt(0).toUpperCase() + produto.categoria.slice(1)}
                  </span>
                  <a 
                    href="https://wa.me/5594981293573" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gesseiro-green hover:text-gesseiro-green/80 font-medium"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5594981293573" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gesseiro-green hover:bg-gesseiro-green/90 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 8 0C3.582 0 0 3.582 0 8c0 1.422.378 2.749 1.02 3.875l-.008.04A8.86 8.86 0 0 1 0 16.018h2.005a6.82 6.82 0 0 0 1.264-.18l.009-.005A8.048 8.048 0 0 0 8 16c4.418 0 8-3.582 8-8a7.848 7.848 0 0 0-2.399-5.674l-1.516 1.516A5.864 5.864 0 0 1 14 8c0 3.314-2.686 6-6 6a5.975 5.975 0 0 1-3.107-.857l-.01-.005-.005-.002-.953.954.496-1.499A5.92 5.92 0 0 1 2 8c0-3.314 2.686-6 6-6a5.858 5.858 0 0 1 4.385 1.941l1.516-1.515A7.851 7.851 0 0 0 8 0z"/>
              <path d="M10.837 3.629a6 6 0 0 0-8.485 8.485L.704 15.962a.5.5 0 0 0 .143.508.5.5 0 0 0 .55.08l3.744-1.613a6 6 0 0 0 8.485-8.485l-1.789 1.789a4 4 0 1 1-5.657 5.657l-1.82 1.82a.5.5 0 0 0-.146.353v.465A.5.5 0 0 0 5.5 16h.465a.5.5 0 0 0 .353-.146l.788-.789A6 6 0 0 0 10.837 3.63z"/>
            </svg>
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
