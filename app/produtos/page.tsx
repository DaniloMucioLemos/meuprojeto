'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Produtos de exemplo
const produtos = [
  {
    id: "site-institucional",
    title: "Site Institucional",
    desc: "Site profissional para sua empresa com design moderno e responsivo.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    categoria: "sites",
    preco: "R$ 997,00",
    recursos: [
      "Design Responsivo",
      "Otimização SEO",
      "Formulário de Contato",
      "Integração com WhatsApp",
      "Hospedagem Inclusa",
      "Certificado SSL"
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    desc: "Loja virtual completa com sistema de pagamentos e gestão de produtos.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    categoria: "sites",
    preco: "R$ 1.997,00",
    recursos: [
      "Painel Administrativo",
      "Gestão de Produtos",
      "Pagamentos Online",
      "Controle de Estoque",
      "Cupons de Desconto",
      "Relatórios de Vendas"
    ]
  },
  {
    id: "landing-page",
    title: "Landing Page",
    desc: "Página de captura otimizada para conversão de leads.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000",
    categoria: "sites",
    preco: "R$ 497,00",
    recursos: [
      "Design Persuasivo",
      "Otimização para Conversão",
      "Formulários Otimizados",
      "A/B Testing",
      "Analytics Avançado",
      "Pixel de Rastreamento"
    ]
  },
  {
    id: "blog",
    title: "Blog Profissional",
    desc: "Blog com sistema de gerenciamento de conteúdo e SEO otimizado.",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=1000",
    categoria: "sites",
    preco: "R$ 747,00",
    recursos: [
      "Editor de Conteúdo",
      "Sistema de Comentários",
      "Categorias e Tags",
      "Newsletter Integrada",
      "Compartilhamento Social",
      "Analytics Integrado"
    ]
  },
  {
    id: "sistema",
    title: "Sistema Web",
    desc: "Sistema personalizado para automatizar processos do seu negócio.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    categoria: "sistemas",
    preco: "Consultar",
    recursos: [
      "Análise de Requisitos",
      "Desenvolvimento Sob Medida",
      "Painel Administrativo",
      "API REST",
      "Banco de Dados",
      "Suporte Técnico"
    ]
  },
  {
    id: "manutencao",
    title: "Manutenção",
    desc: "Suporte técnico e manutenção preventiva para seu site.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
    categoria: "servicos",
    preco: "R$ 97,00/mês",
    recursos: [
      "Atualizações de Segurança",
      "Backup Diário",
      "Monitoramento 24/7",
      "Suporte Prioritário",
      "Relatórios Mensais",
      "Otimizações de Performance"
    ]
  }
]

const categorias = [
  { id: "todos", nome: "Todos" },
  { id: "hospedagem", nome: "Hospedagem" },
  { id: "servidor", nome: "Servidores" },
  { id: "desenvolvimento", nome: "Desenvolvimento" },
  { id: "consultoria", nome: "Consultoria" }
]

export default function Produtos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos")
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const produtosFiltrados = categoriaAtiva === "todos" 
    ? produtos 
    : produtos.filter(p => p.categoria === categoriaAtiva)

  const abrirWhatsApp = (produto) => {
    const mensagem = `Olá! Tenho interesse no produto: *${produto.title}*%0A%0AValor: R$ ${produto.preco}%0A%0AGostaria de mais informações.`
    window.open(`https://wa.me/5516997452118?text=${mensagem}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-dark-primary">
      {/* Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass-effect sticky top-0 z-50 border-b border-dark-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-dark-accent rounded-xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-dark-secondary rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                    DML
                  </span>
                </div>
              </div>
            </Link>
            <div className="flex space-x-4">
              <Link href="/" className="nav-link">Início</Link>
              <Link href="#produtos" className="nav-link">Produtos</Link>
              <Link href="#contato" className="nav-link">Contato</Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent"
          >
            Produtos e Serviços
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dark-text-secondary mb-12"
          >
            Soluções profissionais em Linux e desenvolvimento web
          </motion.p>

          {/* Filtro de Categorias */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categorias.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategoriaAtiva(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${categoriaAtiva === cat.id 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-dark-secondary text-dark-text-secondary hover:bg-dark-accent/20'
                  }`}
              >
                {cat.nome}
              </motion.button>
            ))}
          </div>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosFiltrados.map((produto) => (
              <motion.div
                key={produto.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={produto.image}
                    alt={produto.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{produto.title}</h3>
                  <p className="text-dark-text-secondary mb-4">{produto.desc}</p>
                  <div className="space-y-2 mb-6">
                    {produto.recursos.map((recurso, index) => (
                      <div key={index} className="flex items-center text-sm text-dark-text-secondary">
                        <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {recurso}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                      {produto.preco}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => abrirWhatsApp(produto)}
                      className="btn-primary px-4 py-2 flex items-center gap-2"
                    >
                      <span>Solicitar</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512" 
                        fill="currentColor" 
                        className="w-4 h-4"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-secondary/30 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
            Precisa de uma solução personalizada?
          </h2>
          <p className="text-xl text-dark-text-secondary mb-8">
            Entre em contato para discutirmos seu projeto e criarmos a melhor solução para seu negócio.
          </p>
          <motion.a
            href="https://wa.me/5516997452118"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2 px-8 py-3"
          >
            <span>Falar com Especialista</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512" 
              fill="currentColor" 
              className="w-5 h-5"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </motion.a>
        </div>
      </section>
    </main>
  )
} 