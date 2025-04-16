
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
    imagem: "/lovable-uploads/gessopo.png",
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
    nome: "Ferramentas",
    descricao: "Ferramentas especializadas para trabalhos em gesso e drywall",
    imagem: "/lovable-uploads/Ferramentas.png",
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
            <img src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" alt="WhatsApp" className="w-5 h-5" />
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
