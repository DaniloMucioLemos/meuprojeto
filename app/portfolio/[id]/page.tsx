'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { useParams } from 'next/navigation'
import { FiMonitor, FiLayout, FiTrendingUp, FiFileText, FiSearch, FiEdit, 
         FiShoppingCart, FiCreditCard, FiPackage, FiMessageCircle, FiShare2, 
         FiTarget, FiZap, FiCalendar, FiUsers, FiAward, FiVideo, FiMusic,
         FiBook, FiMap, FiGlobe, FiDatabase, FiCloud, FiLock, FiBarChart2,
         FiSmartphone, FiMessageSquare, FiMail, FiUserCheck, FiShield } from 'react-icons/fi'

const projects = [
  {
    id: "site-institucional",
    title: "Site Institucional",
    desc: "Website moderno para empresa de tecnologia, com design responsivo, animações suaves e alto desempenho em SEO.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    icons: [FiMonitor, FiLayout, FiTrendingUp],
    longDescription: `Um site institucional moderno e profissional desenvolvido para uma empresa de tecnologia. 
    O projeto foi construído utilizando as mais recentes tecnologias web, incluindo Next.js para renderização 
    do lado do servidor e otimização de performance, TailwindCSS para estilização moderna e responsiva, e 
    Framer Motion para animações suaves e interativas.

    Principais características:
    • Design responsivo que se adapta a todos os dispositivos
    • Animações suaves e interativas para melhor engajamento
    • Otimização para SEO com meta tags e estrutura semântica
    • Performance otimizada com lazy loading e code splitting
    • Integração com CMS para fácil gerenciamento de conteúdo
    • Analytics e monitoramento de métricas importantes`,
    features: [
      "Design moderno e responsivo",
      "Animações suaves e interativas",
      "Otimização para SEO",
      "Performance otimizada",
      "Integração com CMS",
      "Analytics e monitoramento"
    ]
  },
  {
    id: "portal-de-noticias",
    title: "Portal de Notícias",
    desc: "Portal de notícias dinâmico com sistema de categorias, busca avançada e painel administrativo completo.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "MongoDB"],
    icons: [FiFileText, FiSearch, FiEdit],
    longDescription: `Um portal de notícias completo e dinâmico desenvolvido para uma empresa de mídia. 
    O projeto inclui um sistema robusto de gerenciamento de conteúdo, busca avançada e categorização de notícias.

    Principais características:
    • Sistema de categorias e tags para organização do conteúdo
    • Busca avançada com filtros e sugestões
    • Painel administrativo completo para gerenciamento
    • Sistema de comentários e interação com leitores
    • Integração com redes sociais para compartilhamento
    • Cache e otimização de performance para alto tráfego`,
    features: [
      "Sistema de categorias e tags",
      "Busca avançada",
      "Painel administrativo",
      "Sistema de comentários",
      "Integração social",
      "Otimização de performance"
    ]
  },
  {
    id: "loja-virtual",
    title: "Loja Virtual",
    desc: "E-commerce completo com catálogo de produtos, carrinho de compras e integração com meios de pagamento.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    icons: [FiShoppingCart, FiCreditCard, FiPackage],
    longDescription: `Uma loja virtual completa desenvolvida para uma empresa de varejo. 
    O projeto inclui todas as funcionalidades necessárias para uma experiência de compra online segura e eficiente.

    Principais características:
    • Catálogo de produtos com filtros e busca
    • Carrinho de compras com persistência
    • Integração com múltiplos meios de pagamento
    • Sistema de avaliações e reviews
    • Painel de controle de pedidos
    • Relatórios e analytics de vendas`,
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Múltiplos meios de pagamento",
      "Sistema de avaliações",
      "Painel de pedidos",
      "Relatórios de vendas"
    ]
  },
  {
    id: "blog-profissional",
    title: "Blog Profissional",
    desc: "Blog com design elegante, sistema de comentários, newsletter e integração com redes sociais.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "MDX", "TailwindCSS"],
    icons: [FiEdit, FiMessageCircle, FiShare2],
    longDescription: `Um blog profissional desenvolvido para um especialista em tecnologia. 
    O projeto combina design elegante com funcionalidades avançadas de conteúdo e engajamento.

    Principais características:
    • Sistema de blog com suporte a MDX
    • Newsletter para captação de leads
    • Sistema de comentários e discussões
    • Integração com redes sociais
    • SEO otimizado para conteúdo
    • Analytics de leitura e engajamento`,
    features: [
      "Suporte a MDX",
      "Sistema de newsletter",
      "Comentários e discussões",
      "Integração social",
      "SEO otimizado",
      "Analytics de engajamento"
    ]
  },
  {
    id: "landing-page",
    title: "Landing Page",
    desc: "Landing page de alto impacto para produto digital, com foco em conversão e experiência do usuário.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "GSAP", "Styled Components"],
    icons: [FiTrendingUp, FiTarget, FiZap],
    longDescription: `Uma landing page de alto impacto desenvolvida para um produto digital. 
    O projeto foi otimizado para conversão e experiência do usuário, com foco em resultados.

    Principais características:
    • Design moderno e impactante
    • Animações suaves com GSAP
    • Formulários de captação otimizados
    • Integração com ferramentas de analytics
    • Testes A/B para otimização
    • Performance otimizada para conversão`,
    features: [
      "Design impactante",
      "Animações GSAP",
      "Formulários otimizados",
      "Analytics integrado",
      "Testes A/B",
      "Performance otimizada"
    ]
  },
  {
    id: "site-de-eventos",
    title: "Site de Eventos",
    desc: "Plataforma para eventos online e presenciais com sistema de inscrição e área do participante.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "Firebase", "TailwindCSS"],
    icons: [FiCalendar, FiUsers, FiAward],
    longDescription: `Uma plataforma completa para eventos desenvolvida para uma empresa de organização de eventos. 
    O projeto suporta tanto eventos presenciais quanto online, com foco na experiência do participante.

    Principais características:
    • Sistema de inscrição e pagamento
    • Área do participante personalizada
    • Streaming de conteúdo para eventos online
    • Sistema de networking entre participantes
    • Painel de controle para organizadores
    • Relatórios e métricas de eventos`,
    features: [
      "Sistema de inscrição",
      "Área do participante",
      "Streaming de conteúdo",
      "Networking",
      "Painel de controle",
      "Relatórios e métricas"
    ]
  },
  {
    id: "aplicativo-mobile",
    title: "Aplicativo Mobile",
    desc: "Aplicativo mobile nativo para iOS e Android com interface intuitiva e recursos avançados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["React Native", "TypeScript", "Firebase"],
    icons: [FiSmartphone, FiCloud, FiLock],
    longDescription: `Um aplicativo mobile completo desenvolvido para uma startup de tecnologia. 
    O projeto foi construído utilizando React Native para garantir uma experiência nativa em ambas as plataformas.

    Principais características:
    • Interface nativa para iOS e Android
    • Autenticação e segurança robusta
    • Sincronização em tempo real
    • Notificações push
    • Integração com APIs nativas
    • Performance otimizada`,
    features: [
      "Interface nativa",
      "Autenticação segura",
      "Sincronização em tempo real",
      "Notificações push",
      "APIs nativas",
      "Performance otimizada"
    ]
  },
  {
    id: "plataforma-educacional",
    title: "Plataforma Educacional",
    desc: "Sistema de ensino online com aulas ao vivo, materiais didáticos e avaliações.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "WebRTC", "MongoDB"],
    icons: [FiBook, FiVideo, FiUsers],
    longDescription: `Uma plataforma educacional completa desenvolvida para uma instituição de ensino. 
    O projeto oferece uma experiência completa de aprendizado online.

    Principais características:
    • Aulas ao vivo com interação
    • Biblioteca de materiais didáticos
    • Sistema de avaliações
    • Fórum de discussões
    • Relatórios de progresso
    • Certificados digitais`,
    features: [
      "Aulas ao vivo",
      "Materiais didáticos",
      "Sistema de avaliações",
      "Fórum de discussões",
      "Relatórios de progresso",
      "Certificados digitais"
    ]
  },
  {
    id: "sistema-de-gestao",
    title: "Sistema de Gestão",
    desc: "Software de gestão empresarial com módulos integrados para controle total da empresa.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["Vue.js", "Node.js", "PostgreSQL"],
    icons: [FiBarChart2, FiDatabase, FiUsers],
    longDescription: `Um sistema de gestão empresarial completo desenvolvido para empresas de médio e grande porte. 
    O projeto integra diversos módulos para um controle total da operação.

    Principais características:
    • Gestão financeira
    • Controle de estoque
    • Gestão de RH
    • Relatórios gerenciais
    • Dashboard personalizado
    • Integração com APIs`,
    features: [
      "Gestão financeira",
      "Controle de estoque",
      "Gestão de RH",
      "Relatórios gerenciais",
      "Dashboard personalizado",
      "Integração com APIs"
    ]
  },
  {
    id: "rede-social",
    title: "Rede Social",
    desc: "Plataforma social com feed de conteúdo, mensagens e grupos de interesse.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "GraphQL", "Redis"],
    icons: [FiUsers, FiMessageSquare, FiShare2],
    longDescription: `Uma rede social moderna desenvolvida para conectar pessoas com interesses em comum. 
    O projeto oferece uma experiência social rica e interativa.

    Principais características:
    • Feed de conteúdo personalizado
    • Sistema de mensagens
    • Grupos e comunidades
    • Compartilhamento de mídia
    • Sistema de notificações
    • Privacidade avançada`,
    features: [
      "Feed personalizado",
      "Sistema de mensagens",
      "Grupos e comunidades",
      "Compartilhamento de mídia",
      "Notificações",
      "Privacidade avançada"
    ]
  },
  {
    id: "marketplace",
    title: "Marketplace",
    desc: "Plataforma de marketplace com múltiplos vendedores e sistema de pagamentos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "Stripe", "Elasticsearch"],
    icons: [FiShoppingCart, FiUsers, FiCreditCard],
    longDescription: `Um marketplace completo desenvolvido para conectar compradores e vendedores. 
    O projeto oferece uma experiência de compra e venda segura e eficiente.

    Principais características:
    • Cadastro de vendedores
    • Sistema de busca avançado
    • Pagamentos seguros
    • Avaliações e reviews
    • Sistema de comissões
    • Painel de vendas`,
    features: [
      "Cadastro de vendedores",
      "Busca avançada",
      "Pagamentos seguros",
      "Avaliações e reviews",
      "Sistema de comissões",
      "Painel de vendas"
    ]
  },
  {
    id: "sistema-de-seguranca",
    title: "Sistema de Segurança",
    desc: "Sistema de monitoramento e segurança com câmeras e sensores integrados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "TensorFlow", "WebRTC"],
    icons: [FiShield, FiVideo, FiLock],
    longDescription: `Um sistema de segurança avançado desenvolvido para monitoramento e proteção. 
    O projeto integra diferentes tecnologias para uma solução completa de segurança.

    Principais características:
    • Monitoramento em tempo real
    • Detecção de movimentos
    • Alertas automáticos
    • Controle de acesso
    • Gravação de eventos
    • Relatórios de incidentes`,
    features: [
      "Monitoramento em tempo real",
      "Detecção de movimentos",
      "Alertas automáticos",
      "Controle de acesso",
      "Gravação de eventos",
      "Relatórios de incidentes"
    ]
  }
]

export default function ProjectDetails() {
  const params = useParams()
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-dark-text mb-4">Projeto não encontrado</h1>
          <Link href="/portfolio" className="text-dark-accent hover:underline">
            Voltar ao portfólio
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
              href="/portfolio"
              className="flex items-center space-x-2 text-dark-text hover:text-dark-accent transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span>Voltar ao Portfólio</span>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-dark-secondary/30 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
              {project.desc}
            </p>
          </motion.div>

          {/* Imagem do Projeto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden mb-12"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          {/* Descrição Detalhada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert max-w-none mb-12"
          >
            <p className="text-dark-text-secondary whitespace-pre-line">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-dark-secondary/30 backdrop-blur-sm border border-dark-border/50"
              >
                <p className="text-dark-text">{feature}</p>
              </div>
            ))}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-dark-accent/20 text-dark-text"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
} 