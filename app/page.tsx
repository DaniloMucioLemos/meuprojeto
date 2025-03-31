'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiShoppingCart, FiCreditCard, FiPackage, FiPieChart, FiTrendingUp, FiBarChart2, FiNavigation, FiSmartphone, FiMap, FiUsers, FiMessageCircle, FiShare2, FiDatabase, FiDollarSign, FiLayers, FiBook, FiAward, FiMonitor, FiLayout, FiFileText, FiSearch, FiEdit, FiTarget, FiZap, FiCalendar, FiVideo } from 'react-icons/fi'
import React, { useState, useEffect } from 'react'
import ProjectCard from './components/ProjectCard'
import emailjs from '@emailjs/browser'

// Inicializar o EmailJS
emailjs.init("XwKGxcZIYkxc_kYEC") // Public Key

const LogoLetters = () => {
  const letters = ["D", "M", "L"];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % letters.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={letters[currentIndex]}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent"
    >
      {letters[currentIndex]}
    </motion.span>
  );
};

const RevealWords = () => {
  const words = ["Web", "Designer", "&", "Desenvolvedor"];
  
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-3">
      {words.map((word, index) => (
        <motion.span
          key={word}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: [0.2, 0.65, 0.3, 0.9]
          }}
          className="bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const FloatingIcons = ({ icons }) => {
  return (
    <div className="absolute -top-4 -right-4 w-20 h-20 pointer-events-none">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
            rotate: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            top: `${index * 10}px`,
            right: `${index * 10}px`
          }}
        >
          <Icon className="w-6 h-6 text-blue-400" />
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const [portfolioRef, portfolioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <main className="min-h-screen relative">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const left = (i * 5) % 100;
          const top = (i * 4) % 100;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-dark-accent rounded-full"
              initial={{ x: 0, y: 0, opacity: 0.2 }}
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                left: `${left}%`,
                top: `${top}%`
              }}
            />
          );
        })}
      </div>

      {/* Header/Nav */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass-effect sticky top-0 z-50 border-b border-dark-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-dark-accent rounded-xl transform rotate-3 opacity-70"></div>
                  <div className="absolute inset-0 bg-dark-secondary rounded-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative text-2xl font-bold"
                    >
                      <LogoLetters />
                      <motion.span
                        animate={{ y: [-1, 1, -1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                    DML
                  </h1>
                  <span className="text-sm text-dark-text-secondary tracking-wider">
                    WebDev
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Menu Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#sobre" className="nav-link">Sobre</Link>
                <Link href="#portfolio" className="nav-link">Portfolio</Link>
                <Link href="#contato" className="nav-link">Contato</Link>
                <Link 
                  href="/produtos" 
                  className="btn-primary px-4 py-2 flex items-center gap-2 text-sm"
                >
                  <span>Loja</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Botão Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-dark-accent/20 focus:outline-none transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menu principal</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden overflow-hidden bg-dark-secondary/95 backdrop-blur-sm rounded-lg mt-2 ${isMenuOpen ? 'border border-dark-border/50' : ''}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#sobre"
                className="text-white hover:bg-blue-500/20 hover:text-blue-400 block px-3 py-4 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#portfolio"
                className="text-white hover:bg-blue-500/20 hover:text-blue-400 block px-3 py-4 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#contato"
                className="text-white hover:bg-blue-500/20 hover:text-blue-400 block px-3 py-4 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link
                href="/produtos"
                className="bg-blue-500 text-white hover:bg-blue-600 block px-3 py-4 rounded-md text-base font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Loja
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-[80vh] pt-8 px-4 relative overflow-hidden flex items-start">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-dark-secondary">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/90 to-dark-secondary/90 backdrop-blur-sm"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center relative z-10 pt-8"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative inline-block"
          >
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-dark-accent rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-dark-accent rounded-2xl transform rotate-3 opacity-70"></div>
                  <div className="absolute inset-0 bg-dark-secondary rounded-2xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative text-8xl font-bold"
                    >
                      <LogoLetters />
                      <motion.span
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ 
                  rotate: 360,
                  background: ["rgba(30,73,118,0.2)", "rgba(59,130,246,0.2)", "rgba(30,73,118,0.2)"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-2xl border-2 border-dashed border-dark-accent/30"
              ></motion.div>
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4 relative"
            >
              <RevealWords />
              <div className="absolute -inset-x-8 -inset-y-4 bg-dark-accent/5 blur-xl -z-10"></div>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-dark-text-secondary text-xl mb-8"
            >
              Criando experiências digitais únicas e memoráveis
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-dark-accent blur-xl opacity-30"></div>
              <Link href="/portfolio" className="block">
                <motion.div
                  className="btn-primary relative px-8 py-3"
                >
                  <span className="relative z-10">Ver Portfolio</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-dark-accent/10 rounded-full blur-xl"></div>

          {/* Mensagens Motivacionais */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed right-8 top-[80vh] z-30 max-w-xs hidden md:block"
          >
            {(() => {
              const mensagens = [
                "Transformando ideias em realidade digital",
                "Inovação é nossa paixão",
                "Tecnologia que faz a diferença",
                "Seu sucesso é nossa missão",
                "Criatividade sem limites"
              ];
              const [mensagemAtual, setMensagemAtual] = useState(0);

              useEffect(() => {
                const interval = setInterval(() => {
                  setMensagemAtual((atual) => (atual + 1) % mensagens.length);
                }, 3000);
                return () => clearInterval(interval);
              }, []);

              return (
                <motion.div
                  key={mensagemAtual}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass-effect p-4 rounded-lg border border-dark-border/50 shadow-lg"
                >
                  <motion.p
                    className="text-sm md:text-base font-medium bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent"
                  >
                    {mensagens[mensagemAtual]}
                  </motion.p>
                </motion.div>
              );
            })()}
          </motion.div>
        </motion.div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-secondary/30 backdrop-blur-sm"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                Sobre Mim
              </h2>
              <div className="prose prose-invert">
                <p className="text-lg text-dark-text-secondary">
                  Com 42 anos de idade e uma paixão inabalável por tecnologia, sou Danilo Mucio Lemos, 
                  um especialista em desenvolvimento web e administração de servidores Linux.
                </p>
                <p className="text-lg text-dark-text-secondary mt-4">
                  Minha jornada na área de TI é marcada por uma profunda especialização em ambientes Linux, 
                  onde acumulei certificações importantes que validam minha expertise:
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      cert: "LPIC-3",
                      desc: "Linux Enterprise Professional Certification"
                    },
                    {
                      cert: "RHCE",
                      desc: "Red Hat Certified Engineer"
                    },
                    {
                      cert: "AWS Certified",
                      desc: "Solutions Architect"
                    },
                    {
                      cert: "Docker Certified",
                      desc: "Associate"
                    }
                  ].map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="glass-effect p-4 rounded-lg border border-dark-border/50"
                    >
                      <h3 className="text-lg font-semibold text-dark-text">{cert.cert}</h3>
                      <p className="text-sm text-dark-text-secondary">{cert.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-dark-text-secondary mt-6">
                  Como desenvolvedor web, combino meu conhecimento técnico em infraestrutura com 
                  habilidades modernas de desenvolvimento, criando soluções robustas e escaláveis. 
                  Minha experiência abrange desde a configuração de servidores até o desenvolvimento 
                  de aplicações web complexas.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  "Linux", "Docker", "Kubernetes", "AWS", 
                  "Node.js", "React", "Next.js", "PostgreSQL", 
                  "MongoDB", "DevOps", "CI/CD", "Shell Script"
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 rounded-full bg-dark-accent/20 text-dark-text text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-lg overflow-hidden bg-dark-secondary">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000"
                  alt="Sala de servidores moderna com iluminação azul"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass-effect p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Experiência Comprovada</h3>
                    <p className="text-dark-text-secondary">
                      +15 anos de experiência em Linux e desenvolvimento web
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-dark-accent/10 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <motion.section
        ref={portfolioRef}
        initial="hidden"
        animate={portfolioInView ? "visible" : "hidden"}
        variants={fadeInUp}
        id="portfolio"
        className="py-16 px-4 glass-effect"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
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
              },
              {
                id: "app-delivery",
                title: "App de Delivery",
                desc: "Aplicativo de entrega com rastreamento em tempo real, pagamento integrado e área do estabelecimento.",
                image: "/images/projects/delivery.jpg",
                tags: ["React Native", "Node.js", "MongoDB"],
                icons: [FiNavigation, FiSmartphone, FiMap]
              },
              {
                id: "sistema-erp",
                title: "Sistema ERP",
                desc: "Sistema de gestão empresarial completo com módulos de vendas, estoque, financeiro e relatórios.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
                tags: ["Next.js", "PostgreSQL", "Docker"],
                icons: [FiDatabase, FiDollarSign, FiLayers]
              },
              {
                id: "plataforma-ead",
                title: "Plataforma EAD",
                desc: "Ambiente virtual de aprendizagem com aulas ao vivo, conteúdo gravado e certificação.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
                tags: ["React", "Node.js", "MongoDB"],
                icons: [FiBook, FiVideo, FiAward]
              },
              {
                id: "rede-social",
                title: "Rede Social",
                desc: "Rede social com feed personalizado, chat em tempo real e compartilhamento de mídia.",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
                tags: ["Next.js", "Socket.io", "MongoDB"],
                icons: [FiUsers, FiMessageCircle, FiShare2]
              },
              {
                id: "dashboard-analytics",
                title: "Dashboard Analytics",
                desc: "Painel de análise de dados com gráficos interativos e relatórios personalizados.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
                tags: ["React", "D3.js", "Node.js"],
                icons: [FiPieChart, FiTrendingUp, FiBarChart2]
              },
              {
                id: "marketplace",
                title: "Marketplace",
                desc: "Plataforma de marketplace com múltiplos vendedores, sistema de avaliações e comissões.",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
                tags: ["Next.js", "Stripe Connect", "PostgreSQL"],
                icons: [FiShoppingCart, FiUsers, FiDollarSign]
              }
            ].slice(0, showAllProjects ? 12 : 6).map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                inView={portfolioInView}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="btn-primary px-8 py-3 flex items-center gap-2"
            >
              <span>{showAllProjects ? 'Mostrar Menos' : 'Ver Mais'}</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: showAllProjects ? 180 : 0 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section 
        id="contato" 
        className="py-16 px-4 relative"
        ref={(element) => {
          if (element) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                setIsContactVisible(entry.isIntersecting);
              },
              { threshold: 0.1 }
            );
            observer.observe(element);
          }
        }}
      >
        <div className="absolute inset-0 bg-dark-secondary/20">
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title text-center"
          >
            Entre em Contato
          </motion.h2>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 space-y-6 glass-effect p-8 rounded-lg"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              
              // Formata a mensagem para o WhatsApp
              const nome = form.user_name.value;
              const email = form.user_email.value;
              const telefone = form.user_phone.value;
              const mensagem = form.message.value;
              
              const mensagemFormatada = `*Novo Contato do Site*%0A%0A*Nome:* ${nome}%0A*Email:* ${email}%0A*Telefone:* ${telefone}%0A%0A*Mensagem:*%0A${mensagem}`;
              
              // Abre o WhatsApp Web com a mensagem formatada
              window.open(`https://wa.me/5516997452118?text=${mensagemFormatada}`, '_blank');
              
              // Limpa o formulário
              form.reset();
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
              <input 
                type="text" 
                id="name" 
                name="user_name"
                required
                className="input-field" 
                placeholder="Seu nome completo"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  required
                  className="input-field" 
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="user_phone"
                  required
                  className="input-field" 
                  placeholder="(16) 99999-9999"
                  pattern="^\(\d{2}\) \d{5}-\d{4}$"
                  title="Digite um número de telefone no formato (99) 99999-9999"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={4} 
                className="input-field"
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <span>Enviar via WhatsApp</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                fill="currentColor" 
                className="w-5 h-5"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-secondary/30 backdrop-blur-sm"></div>
        <div className="glass-effect border-t border-dark-border/50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {/* Grid Principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Logo e Descrição */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="relative w-10 h-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-dark-accent rounded-lg transform rotate-3 opacity-70"></div>
                    <div className="absolute inset-0 bg-dark-secondary rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                        DML
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-text">DML WebDev</h3>
                    <p className="text-sm text-dark-text-secondary">Soluções Digitais</p>
                  </div>
                </div>
                <p className="text-dark-text-secondary text-sm">
                  Transformando ideias em experiências digitais memoráveis através de tecnologias modernas e design inovador.
                </p>
              </div>

              {/* Links Rápidos */}
              <div>
                <h3 className="text-dark-text font-semibold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#sobre" className="text-dark-text-secondary hover:text-dark-accent transition-colors text-sm">Sobre</Link>
                  </li>
                  <li>
                    <Link href="#portfolio" className="text-dark-text-secondary hover:text-dark-accent transition-colors text-sm">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="#contato" className="text-dark-text-secondary hover:text-dark-accent transition-colors text-sm">Contato</Link>
                  </li>
                  <li>
                    <Link href="/produtos" className="text-dark-text-secondary hover:text-dark-accent transition-colors text-sm">Loja</Link>
                  </li>
                </ul>
              </div>

              {/* Contato */}
              <div>
                <h3 className="text-dark-text font-semibold mb-4">Contato</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-dark-text-secondary">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">(16) 99745-2118</span>
                  </li>
                  <li className="flex items-center space-x-2 text-dark-text-secondary">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">danmuciolemos@gmail.com</span>
                  </li>
                </ul>
              </div>

              {/* Redes Sociais */}
              <div>
                <h3 className="text-dark-text font-semibold mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://wa.me/5516997452118"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-dark-accent/20 flex items-center justify-center text-dark-text hover:bg-dark-accent hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-dark-accent/20 flex items-center justify-center text-dark-text hover:bg-dark-accent hover:text-white transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-dark-accent/20 flex items-center justify-center text-dark-text hover:bg-dark-accent hover:text-white transition-colors"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Linha Divisória com Gradiente */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-dark-border/30"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="px-4 bg-dark-secondary/30 backdrop-blur-sm">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-dark-accent/20 flex items-center justify-center"
                    animate={{ 
                      rotate: 360,
                      background: ["rgba(30,73,118,0.2)", "rgba(59,130,246,0.2)", "rgba(30,73,118,0.2)"]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-dark-accent bg-clip-text text-transparent">
                      DML
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center">
              <p className="text-dark-text-secondary text-sm">
                &copy; {new Date().getFullYear()} DML WebDesenvolvimentos. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <motion.a
        href="https://wa.me/5516997452118"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isContactVisible ? 0 : 1,
          opacity: isContactVisible ? 0 : 1
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-12 h-12 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512" 
            fill="white" 
            className="w-6 h-6"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </div>
      </motion.a>
    </main>
  )
} 