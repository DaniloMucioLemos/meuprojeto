'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiCheck } from 'react-icons/fi'

const projetos = {
  "site-institucional": {
    id: 'site-institucional',
    title: "Site Institucional",
    desc: "Website moderno para empresa de tecnologia, com design responsivo, animações suaves e alto desempenho em SEO.",
    image: "/images/projects/institucional.jpg",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    fullDesc: `Desenvolvimento de sites institucionais modernos e profissionais, focados em converter visitantes em clientes.

    Características principais:
    • Design responsivo e adaptativo para todos os dispositivos
    • Otimização SEO para melhor posicionamento no Google
    • Animações suaves e interativas
    • Integração com Google Analytics e Tag Manager
    • Painel administrativo para gestão de conteúdo
    • Alta performance e velocidade de carregamento`,
    tecnologias: [
      "Next.js 13",
      "TailwindCSS",
      "Framer Motion",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Google Analytics"
    ],
    recursos: [
      "Design Personalizado",
      "Páginas Institucionais",
      "Blog Corporativo",
      "Formulários de Contato",
      "Integração com Redes Sociais",
      "Otimização SEO",
      "Painel Administrativo"
    ],
    prazo: "30 dias",
    investimento: "A partir de R$ 5.000",
    manutencao: "Opcional - R$ 200/mês"
  },
  "portal-de-noticias": {
    id: 'portal-de-noticias',
    title: "Portal de Notícias",
    desc: "Portal de notícias dinâmico com sistema de categorias, busca avançada e painel administrativo completo.",
    image: "/images/projects/portal.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    fullDesc: `Desenvolvimento de portais de notícias profissionais com sistema completo de gestão de conteúdo.

    Características principais:
    • Sistema de categorias e tags
    • Busca avançada com filtros
    • Área de comentários
    • Sistema de newsletters
    • Painel administrativo completo
    • Gestão de editores e autores`,
    tecnologias: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Redis",
      "AWS S3",
      "Elasticsearch"
    ],
    recursos: [
      "Editor de Texto Rico",
      "Sistema de Comentários",
      "Newsletter Automática",
      "Analytics Avançado",
      "Gestão de Mídia",
      "Sistema Multi-usuário",
      "API REST"
    ],
    prazo: "45 dias",
    investimento: "A partir de R$ 8.000",
    manutencao: "R$ 400/mês"
  },
  "loja-virtual": {
    id: 'loja-virtual',
    title: "Loja Virtual",
    desc: "E-commerce completo com catálogo de produtos, carrinho de compras e integração com meios de pagamento.",
    image: "/images/projects/loja.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    fullDesc: `Desenvolvimento de lojas virtuais completas com foco em conversão e experiência do usuário.

    Características principais:
    • Catálogo de produtos
    • Carrinho de compras
    • Checkout seguro
    • Integração com meios de pagamento
    • Gestão de estoque
    • Relatórios de vendas`,
    tecnologias: [
      "Next.js",
      "Stripe",
      "PostgreSQL",
      "TypeScript",
      "Redis",
      "AWS",
      "Docker"
    ],
    recursos: [
      "Gestão de Produtos",
      "Múltiplos Meios de Pagamento",
      "Controle de Estoque",
      "Cupons de Desconto",
      "Relatórios de Vendas",
      "Integração com Correios",
      "Área do Cliente"
    ],
    prazo: "60 dias",
    investimento: "A partir de R$ 12.000",
    manutencao: "R$ 600/mês"
  },
  "blog-profissional": {
    id: 'blog-profissional',
    title: "Blog Profissional",
    desc: "Blog com design elegante, sistema de comentários, newsletter e integração com redes sociais.",
    image: "/images/projects/blog.jpg",
    tags: ["Next.js", "MDX", "TailwindCSS"],
    fullDesc: `Desenvolvimento de blogs profissionais com foco em conteúdo e engajamento.

    Características principais:
    • Design elegante e responsivo
    • Sistema de comentários
    • Newsletter integrada
    • Compartilhamento em redes sociais
    • Categorização de conteúdo
    • Analytics avançado`,
    tecnologias: [
      "Next.js",
      "MDX",
      "TailwindCSS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Vercel"
    ],
    recursos: [
      "Editor MDX",
      "Sistema de Tags",
      "Newsletter Automática",
      "Comentários",
      "SEO Otimizado",
      "Integração com Redes Sociais",
      "Analytics"
    ],
    prazo: "30 dias",
    investimento: "A partir de R$ 4.000",
    manutencao: "R$ 200/mês"
  },
  "landing-page": {
    id: 'landing-page',
    title: "Landing Page",
    desc: "Landing page de alto impacto para produto digital, com foco em conversão e experiência do usuário.",
    image: "/images/projects/landing.jpg",
    tags: ["React", "GSAP", "Styled Components"],
    fullDesc: `Desenvolvimento de landing pages de alto impacto com foco em conversão.

    Características principais:
    • Design impactante
    • Animações de alta performance
    • Formulários otimizados
    • A/B Testing
    • Pixel tracking
    • Analytics avançado`,
    tecnologias: [
      "React",
      "GSAP",
      "Styled Components",
      "TypeScript",
      "Firebase",
      "Google Analytics",
      "Facebook Pixel"
    ],
    recursos: [
      "Animações Avançadas",
      "Formulários de Captura",
      "A/B Testing",
      "Pixel Tracking",
      "Analytics Detalhado",
      "Otimização de Conversão",
      "Integrações com CRM"
    ],
    prazo: "15 dias",
    investimento: "A partir de R$ 3.000",
    manutencao: "R$ 150/mês"
  },
  "site-de-eventos": {
    id: 'site-de-eventos',
    title: "Site de Eventos",
    desc: "Plataforma para eventos online e presenciais com sistema de inscrição e área do participante.",
    image: "/images/projects/eventos.jpg",
    tags: ["Next.js", "Firebase", "TailwindCSS"],
    fullDesc: `Desenvolvimento de plataformas completas para gestão de eventos online e presenciais.

    Características principais:
    • Sistema de inscrição
    • Área do participante
    • Emissão de certificados
    • Gestão de palestrantes
    • Agenda interativa
    • Transmissão ao vivo`,
    tecnologias: [
      "Next.js",
      "Firebase",
      "TailwindCSS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "WebRTC"
    ],
    recursos: [
      "Inscrições Online",
      "Área do Participante",
      "Certificados Digitais",
      "Agenda Interativa",
      "Transmissão ao Vivo",
      "Chat em Tempo Real",
      "Networking"
    ],
    prazo: "45 dias",
    investimento: "A partir de R$ 10.000",
    manutencao: "R$ 500/mês"
  }
}

export default function ProjetoPage({ params }: { params: { id: string } }) {
  const projeto = projetos[params.id as keyof typeof projetos]

  if (!projeto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Projeto não encontrado</h1>
          <Link 
            href="/"
            className="text-dark-accent hover:text-dark-text transition-colors"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen relative bg-dark-primary">
      {/* Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-effect sticky top-0 z-50 border-b border-dark-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-dark-text hover:text-dark-accent transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <div className="aspect-video relative">
              <Image
                src={projeto.image}
                alt={projeto.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{projeto.title}</h1>
              <p className="text-xl text-dark-text-secondary">{projeto.desc}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Descrição */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-effect p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                  Sobre o Serviço
                </h2>
                <div className="prose prose-invert">
                  <p className="text-dark-text-secondary whitespace-pre-line">
                    {projeto.fullDesc}
                  </p>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                  Recursos Inclusos
                </h2>
                <div className="grid grid-cols-1 gap-2">
                  {projeto.recursos.map((recurso, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FiCheck className="text-green-400 flex-shrink-0" />
                      <span className="text-dark-text-secondary">{recurso}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tecnologias e Informações */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="glass-effect p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                  Tecnologias
                </h2>
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-dark-accent/20 text-dark-text text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-effect p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                  Informações do Projeto
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-dark-text">Prazo de Entrega</h3>
                    <p className="text-dark-text-secondary">{projeto.prazo}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-text">Investimento</h3>
                    <p className="text-dark-text-secondary">{projeto.investimento}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-text">Manutenção</h3>
                    <p className="text-dark-text-secondary">{projeto.manutencao}</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                  Interessado?
                </h2>
                <p className="text-dark-text-secondary mb-4">
                  Entre em contato para discutirmos seu projeto e criar algo incrível juntos!
                </p>
                <Link href="/#contato">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary"
                  >
                    Solicitar Orçamento
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
} 