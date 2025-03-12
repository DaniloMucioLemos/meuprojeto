'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard'
import { useInView } from 'react-intersection-observer'
import { FiMonitor, FiLayout, FiTrendingUp, FiFileText, FiSearch, FiEdit, 
         FiShoppingCart, FiCreditCard, FiPackage, FiMessageCircle, FiShare2, 
         FiTarget, FiZap, FiCalendar, FiUsers, FiAward } from 'react-icons/fi'

export default function PortfolioPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      id: "site-institucional",
      title: "Site Institucional",
      desc: "Website moderno para empresa de tecnologia, com design responsivo, animações suaves e alto desempenho em SEO.",
      image: "/images/projects/institucional.jpg",
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      icons: [FiMonitor, FiLayout, FiTrendingUp]
    },
    {
      id: "portal-de-noticias",
      title: "Portal de Notícias",
      desc: "Portal de notícias dinâmico com sistema de categorias, busca avançada e painel administrativo completo.",
      image: "/images/projects/portal.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      icons: [FiFileText, FiSearch, FiEdit]
    },
    {
      id: "loja-virtual",
      title: "Loja Virtual",
      desc: "E-commerce completo com catálogo de produtos, carrinho de compras e integração com meios de pagamento.",
      image: "/images/projects/loja.jpg",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      icons: [FiShoppingCart, FiCreditCard, FiPackage]
    },
    {
      id: "blog-profissional",
      title: "Blog Profissional",
      desc: "Blog com design elegante, sistema de comentários, newsletter e integração com redes sociais.",
      image: "/images/projects/blog.jpg",
      tags: ["Next.js", "MDX", "TailwindCSS"],
      icons: [FiEdit, FiMessageCircle, FiShare2]
    },
    {
      id: "landing-page",
      title: "Landing Page",
      desc: "Landing page de alto impacto para produto digital, com foco em conversão e experiência do usuário.",
      image: "/images/projects/landing.jpg",
      tags: ["React", "GSAP", "Styled Components"],
      icons: [FiTrendingUp, FiTarget, FiZap]
    },
    {
      id: "site-de-eventos",
      title: "Site de Eventos",
      desc: "Plataforma para eventos online e presenciais com sistema de inscrição e área do participante.",
      image: "/images/projects/eventos.jpg",
      tags: ["Next.js", "Firebase", "TailwindCSS"],
      icons: [FiCalendar, FiUsers, FiAward]
    }
  ]

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
              Meu Portfólio
            </h1>
            <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvi, combinando tecnologia moderna 
              com design intuitivo para criar experiências digitais excepcionais.
            </p>
          </motion.div>

          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {["Todos", "Web", "E-commerce", "Apps", "Design"].map((filter, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-dark-accent/20 text-dark-text hover:bg-dark-accent/30 transition-colors"
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid de Projetos */}
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
} 