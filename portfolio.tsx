"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Smartphone,
  Monitor,
  Palette,
  Zap,
  Users,
  Target,
  Clock,
  Star,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Database,
  Server,
  Globe,
  Brain,
  Rocket,
  Shield,
  Moon,
  Sun,
} from "lucide-react"

// Hook personalizado para scroll reveal
function useScrollReveal() {
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const elements = document.querySelectorAll("[data-scroll-reveal]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return visibleElements
}

// Função para scroll suave
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80 // Ajuste para altura do header
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const visibleElements = useScrollReveal() // Adicione esta linha

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const technologies = {
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Laravel", level: 88 },
      { name: "Python", level: 85 },
      { name: "Express", level: 87 },
      { name: "NestJS", level: 82 },
    ],
    database: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Prisma", level: 88 },
      { name: "Redis", level: 80 },
      { name: "Firebase", level: 85 },
    ],
  }

  const projects = [
    {
      title: "Dashboard Analytics",
      description: "Plataforma completa de análise de dados com visualizações interativas",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "App Mobile E-commerce",
      description: "Aplicativo mobile para vendas com integração de pagamentos",
      tech: ["React Native", "Laravel", "Stripe"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Sistema de Gestão",
      description: "ERP completo para pequenas e médias empresas",
      tech: ["Vue.js", "Python", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "API de Integração IA",
      description: "Microsserviços com integração de IA generativa",
      tech: ["NestJS", "OpenAI", "Docker"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <style jsx>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-reveal.fade-in {
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }
        
        .scroll-reveal.slide-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-reveal.slide-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-reveal.slide-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-reveal.zoom-in {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }
        
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DevTeam
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Contato
              </button>
            </div>

            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="ml-4">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 scroll-reveal slide-left ${visibleElements.has("hero-content") ? "visible" : ""}`}
              data-scroll-reveal
              id="hero-content"
            >
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                  +2 anos de experiência
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Transformamos
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ideias em soluções
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    digitais completas
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                  Somos uma equipe jovem, colaborativa e experiente que cresceu junto. Desenvolvemos soluções full stack
                  escaláveis com foco em performance, usabilidade e design refinado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group"
                >
                  Conheça nosso trabalho
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Fale com a gente
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Suporte</div>
                </div>
              </div>
            </div>

            <div
              className={`relative scroll-reveal slide-right ${visibleElements.has("hero-visual") ? "visible" : ""}`}
              data-scroll-reveal
              id="hero-visual"
            >
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-200 to-cyan-200 dark:from-purple-800 dark:to-cyan-800 rounded animate-pulse delay-100"></div>
                    <div className="h-4 bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800 rounded animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform -rotate-6 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 scroll-reveal fade-in ${visibleElements.has("about-title") ? "visible" : ""}`}
              data-scroll-reveal
              id="about-title"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quem Somos
              </span>
            </h2>
            <p
              className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto scroll-reveal fade-in stagger-1 ${visibleElements.has("about-subtitle") ? "visible" : ""}`}
              data-scroll-reveal
              id="about-subtitle"
            >
              Uma equipe que começou unida, cresceu junto e hoje atua com maturidade e confiança
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 scroll-reveal slide-left ${visibleElements.has("about-content") ? "visible" : ""}`}
              data-scroll-reveal
              id="about-content"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Parceria Duradoura</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Construímos relacionamentos sólidos baseados na confiança mútua e crescimento conjunto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Comunicação Clara</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Transparência total em cada etapa do projeto, mantendo você sempre informado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Compromisso com Prazos</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Entregas pontuais e qualidade garantida em cada milestone do projeto.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`relative scroll-reveal slide-right ${visibleElements.has("about-cards") ? "visible" : ""}`}
              data-scroll-reveal
              id="about-cards"
            >
              <div className="grid grid-cols-2 gap-4">
                <Card
                  className={`p-6 hover:shadow-lg transition-shadow scroll-reveal zoom-in stagger-1 ${visibleElements.has("about-card-1") ? "visible" : ""}`}
                  data-scroll-reveal
                  id="about-card-1"
                >
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Excelência</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Código limpo e arquitetura sólida</p>
                  </CardContent>
                </Card>

                <Card
                  className={`p-6 hover:shadow-lg transition-shadow mt-8 scroll-reveal zoom-in stagger-2 ${visibleElements.has("about-card-2") ? "visible" : ""}`}
                  data-scroll-reveal
                  id="about-card-2"
                >
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Performance</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Soluções otimizadas e escaláveis</p>
                  </CardContent>
                </Card>

                <Card
                  className={`p-6 hover:shadow-lg transition-shadow scroll-reveal zoom-in stagger-3 ${visibleElements.has("about-card-3") ? "visible" : ""}`}
                  data-scroll-reveal
                  id="about-card-3"
                >
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Design</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">UX/UI refinado e intuitivo</p>
                  </CardContent>
                </Card>

                <Card
                  className={`p-6 hover:shadow-lg transition-shadow mt-8 scroll-reveal zoom-in stagger-4 ${visibleElements.has("about-card-4") ? "visible" : ""}`}
                  data-scroll-reveal
                  id="about-card-4"
                >
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Inovação</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Tecnologias de ponta</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 scroll-reveal fade-in ${visibleElements.has("services-title") ? "visible" : ""}`}
              data-scroll-reveal
              id="services-title"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                O que Fazemos
              </span>
            </h2>
            <p
              className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto scroll-reveal fade-in stagger-1 ${visibleElements.has("services-subtitle") ? "visible" : ""}`}
              data-scroll-reveal
              id="services-subtitle"
            >
              Soluções completas para transformar sua visão em realidade digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Desenvolvimento Web", delay: "stagger-1" },
              { icon: Smartphone, title: "Apps Mobile", delay: "stagger-2" },
              { icon: Monitor, title: "Sistemas Desktop", delay: "stagger-3" },
              { icon: Palette, title: "Design UX/UI", delay: "stagger-4" },
              { icon: Brain, title: "Integração IA", delay: "stagger-5" },
              { icon: Shield, title: "Soluções Práticas", delay: "stagger-6" },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 scroll-reveal slide-up ${service.delay} ${visibleElements.has(`service-${index}`) ? "visible" : ""}`}
                data-scroll-reveal
                id={`service-${index}`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {React.createElement(service.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Aplicações web modernas, responsivas e performáticas usando as melhores tecnologias do mercado.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Vue.js</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 scroll-reveal fade-in ${visibleElements.has("tech-title") ? "visible" : ""}`}
              data-scroll-reveal
              id="tech-title"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tecnologias Dominadas
              </span>
            </h2>
            <p
              className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto scroll-reveal fade-in stagger-1 ${visibleElements.has("tech-subtitle") ? "visible" : ""}`}
              data-scroll-reveal
              id="tech-subtitle"
            >
              Stack moderno e ferramentas de ponta para entregar soluções de alta qualidade
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card
              className={`p-8 hover:shadow-lg transition-shadow scroll-reveal slide-up stagger-1 ${visibleElements.has("tech-frontend") ? "visible" : ""}`}
              data-scroll-reveal
              id="tech-frontend"
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Frontend</h3>
                </div>
                <div className="space-y-4">
                  {technologies.frontend.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                        <span className="text-blue-600 font-semibold">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`p-8 hover:shadow-lg transition-shadow scroll-reveal slide-up stagger-2 ${visibleElements.has("tech-backend") ? "visible" : ""}`}
              data-scroll-reveal
              id="tech-backend"
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Backend</h3>
                </div>
                <div className="space-y-4">
                  {technologies.backend.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                        <span className="text-purple-600 font-semibold">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`p-8 hover:shadow-lg transition-shadow scroll-reveal slide-up stagger-3 ${visibleElements.has("tech-database") ? "visible" : ""}`}
              data-scroll-reveal
              id="tech-database"
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Database & Infra</h3>
                </div>
                <div className="space-y-4">
                  {technologies.database.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                        <span className="text-cyan-600 font-semibold">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 scroll-reveal fade-in ${visibleElements.has("projects-title") ? "visible" : ""}`}
              data-scroll-reveal
              id="projects-title"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nossos Projetos
              </span>
            </h2>
            <p
              className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto scroll-reveal fade-in stagger-1 ${visibleElements.has("projects-subtitle") ? "visible" : ""}`}
              data-scroll-reveal
              id="projects-subtitle"
            >
              Showcase de soluções que desenvolvemos com paixão e expertise técnica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-reveal zoom-in ${index % 2 === 0 ? "stagger-1" : "stagger-2"} ${visibleElements.has(`project-${index}`) ? "visible" : ""}`}
                data-scroll-reveal
                id={`project-${index}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                      Ver Projeto <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 scroll-reveal fade-in ${visibleElements.has("contact-title") ? "visible" : ""}`}
              data-scroll-reveal
              id="contact-title"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vamos construir algo incrível juntos?
              </span>
            </h2>
            <p
              className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto scroll-reveal fade-in stagger-1 ${visibleElements.has("contact-subtitle") ? "visible" : ""}`}
              data-scroll-reveal
              id="contact-subtitle"
            >
              Entre em contato e vamos transformar sua ideia em realidade digital
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div
              className={`space-y-8 scroll-reveal slide-left ${visibleElements.has("contact-form") ? "visible" : ""}`}
              data-scroll-reveal
              id="contact-form"
            >
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envie uma mensagem</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome</label>
                        <Input placeholder="Seu nome" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <Input type="email" placeholder="seu@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Assunto</label>
                      <Input placeholder="Assunto da mensagem" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Mensagem
                      </label>
                      <Textarea placeholder="Conte-nos sobre seu projeto..." rows={4} />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div
              className={`space-y-8 scroll-reveal slide-right ${visibleElements.has("contact-info") ? "visible" : ""}`}
              data-scroll-reveal
              id="contact-info"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">contato@devteam.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                    <p className="text-gray-600 dark:text-gray-300">github.com/devteam</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                    <p className="text-gray-600 dark:text-gray-300">linkedin.com/company/devteam</p>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
                  <p className="mb-6 opacity-90">
                    Agende uma conversa gratuita e vamos discutir como podemos ajudar seu projeto a decolar.
                  </p>
                  <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                    Agendar Conversa
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">DevTeam</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 DevTeam. Transformando ideias em soluções digitais.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
