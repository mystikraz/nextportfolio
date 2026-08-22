"use client";

import { motion } from "framer-motion";
import { 
  Server, 
  Database, 
  Cloud, 
  Code2, 
  GitBranch, 
  Shield,
  Zap,
  Globe,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  ChevronDown,
  Monitor,
  Smartphone,
  Brain
} from "lucide-react";
import Link from "next/link";
import TechCard from "@/components/TechCard";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  // Structured Data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rajan Tandukar",
    "jobTitle": "Tech Lead & Principal Engineer",
    "description": "Tech Lead & Principal Engineer with 13+ years of experience specializing in full-stack development, cloud architecture, microservices, AI engineering with LangChain, RAG, vector databases, and technical team leadership",
    "url": "https://rajantandukar.com",
    "image": "https://rajantandukar.com/rajan.jpeg",
    "email": "rajan.tandukar@outlook.com",
    "sameAs": [
      "https://www.linkedin.com/in/rajan-tandukar-a8385220/",
      "https://github.com/mystikraz"
    ],
    "knowsAbout": [
      "ASP.NET Core",
      "Node.js",
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Cloud Architecture",
      "AWS",
      "Azure",
      "Microservices",
      "API Development",
      "DevOps",
      "CI/CD",
      "Database Design",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "AI Engineering",
      "LLM (Large Language Models)",
      "LangChain",
      "LangSmith",
      "Agents",
      "Tool Calling",
      "Function Calling",
      "Agentic Workflows",
      "Model Orchestration",
      "RAG (Retrieval Augmented Generation)",
      "Vector Databases",
      "Semantic Search",
      "Hybrid Search",
      "Embeddings",
      "Prompt Engineering",
      "Pinecone",
      "Weaviate",
      "Milvus",
      "OpenAI API",
      "Claude API",
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Jupyter",
      "FastAPI",
      "Flask",
      "Machine Learning",
      "Data Pipeline",
      "NLP"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Your University" // Update with your actual education
    },
    "workExample": [
      {
        "@type": "CreativeWork",
        "name": "E-Commerce Microservices Platform",
        "description": "Scalable microservices architecture for a high-traffic e-commerce platform"
      },
      {
        "@type": "CreativeWork",
        "name": "Real-time Analytics API",
        "description": "High-performance analytics API processing millions of events per day"
      },
      {
        "@type": "CreativeWork",
        "name": "Multi-tenant SaaS Platform",
        "description": "Enterprise SaaS platform with multi-tenancy and RBAC"
      },
      {
        "@type": "CreativeWork",
        "name": "AI-Powered Intelligent Document Processing Platform",
        "description": "RAG-based document processing system using vector databases, semantic search, and LLMs"
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-dark-900">
      {/* Modern Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-dark-800/90 backdrop-blur-lg border-b border-dark-200 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-white"
          >
            Rajan<span className="text-neon-green neon-glow">.</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-dark-500 hover:text-neon-green transition-colors">About</Link>
            <Link href="#skills" className="text-dark-500 hover:text-neon-green transition-colors">Skills</Link>
            <Link href="#projects" className="text-dark-500 hover:text-neon-green transition-colors">Projects</Link>
            <Link href="#contact" className="text-dark-500 hover:text-neon-green transition-colors">Contact</Link>
          </nav>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neon-green text-dark-900 px-6 py-2 rounded-full hover:bg-primary-500 transition-all neon-border font-semibold"
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.header>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" aria-label="Hero section - Tech Lead and Principal Engineer introduction">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-dark-100 text-neon-green border border-neon-green/30 rounded-full text-sm font-medium mb-6"
              >
                <Zap className="w-4 h-4 mr-2" />
                Tech Lead & Principal Engineer
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Leading Technical
                <span className="text-neon-green neon-glow block">Excellence</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-dark-500 mb-8 leading-relaxed"
              >
                I&apos;m Rajan Tandukar, a Tech Lead and Principal Engineer leading high-performing teams to design and deploy 
                scalable, enterprise-grade architectures while mentoring engineers, driving technical excellence, and building intelligent AI-powered solutions with RAG and vector databases.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-neon-green text-dark-900 rounded-xl font-semibold hover:bg-primary-500 transition-all neon-border"
                >
                  <Code2 className="w-5 h-5 mr-2" />
                  View My Work
                </motion.a>
                
                <motion.a
                  href="/Rajan_Resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-neon-green/50 text-neon-green rounded-xl font-semibold hover:bg-dark-100 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="/rajan.jpeg"
                  alt="Rajan Tandukar - Tech Lead and Principal Engineer specializing in full-stack development and AI engineering"
                  title="Rajan Tandukar - Tech Lead, Principal Engineer & AI Engineering Expert"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-2 border-neon-green/20"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-dark-100 p-4 rounded-xl shadow-lg border border-neon-green/30"
              >
                <Server className="w-8 h-8 text-neon-green" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-dark-100 p-4 rounded-xl shadow-lg border border-primary-500/30"
              >
                <Database className="w-8 h-8 text-primary-500" />
              </motion.div>
              
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-8 bg-dark-100 p-4 rounded-xl shadow-lg border border-accent-cyan/30"
              >
                <Cloud className="w-8 h-8 text-accent-cyan" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <ChevronDown className="w-6 h-6 text-neon-green" />
        </motion.div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-dark-800" aria-label="Technical and AI leadership skills section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Technical & AI <span className="text-neon-green neon-glow">Leadership</span>
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto">
              Expertise in architecting scalable systems, leading engineering teams, mentoring talent, driving technical strategy, and building intelligent AI-powered solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Backend Skills */}
            <TechCard
              icon={Server}
              title="System Architecture"
              description="Designing and architecting scalable microservices, APIs, and distributed systems with proper design patterns and best practices."
              technologies={["Microservices", "Event-driven", "CQRS", "API Gateway"]}              gradient="bg-gradient-to-br from-primary-500 to-primary-700"
              delay={0.1}
            />
            
            <TechCard
              icon={Database}
              title="Team Leadership"
              description="Mentoring engineers, conducting code reviews, fostering engineering culture, and driving technical growth across teams."
              technologies={["Mentoring", "Code Review", "Architecture Review", "Technical Governance"]}              gradient="bg-gradient-to-br from-accent-green to-emerald-600"
              delay={0.2}
            />
            
            <TechCard
              icon={Cloud}
              title="Cloud & DevOps Strategy"
              description="Leading cloud architecture initiatives, implementing infrastructure as code, and establishing DevOps practices across teams."
              technologies={["AWS", "Azure", "Docker", "Kubernetes"]}              gradient="bg-gradient-to-br from-accent-blue to-blue-600"
              delay={0.3}
            />
            
            {/* Frontend Skills */}
            <TechCard
              icon={Monitor}
              title="Full Stack Engineering"
              description="Deep expertise across frontend and backend technologies, setting technical standards and best practices."
              technologies={["React", "Next.js", "Angular", "TypeScript"]}              gradient="bg-gradient-to-br from-violet-500 to-purple-600"
              delay={0.4}
            />
            
            <TechCard
              icon={Smartphone}
              title="Technical Decision Making"
              description="Making informed technical decisions, evaluating technologies, and defining engineering roadmaps aligned with business goals."
              technologies={["Technical Strategy", "Solution Design", "Technology Evaluation", "Roadmap Planning"]}              gradient="bg-gradient-to-br from-pink-500 to-rose-600"
              delay={0.5}
            />
            
            <TechCard
              icon={GitBranch}
              title="Quality & Standards"
              description="Establishing coding standards, implementing quality assurance processes, and driving continuous improvement initiatives."
              technologies={["Code Quality", "Testing Strategy", "Performance Optimization", "Security"]}
              gradient="bg-gradient-to-br from-accent-purple to-purple-600"
              delay={0.6}
            />
            
            <TechCard
              icon={Brain}
              title="AI Engineering"
              description="Building intelligent systems with Python, LangChain, RAG, vector databases, agentic workflows, and LLM integration. Expert in tool calling, prompt engineering, model orchestration, and data science frameworks for enterprise applications."
              technologies={["Python", "LangChain", "RAG", "Vector Databases"]}
              gradient="bg-gradient-to-br from-orange-500 to-red-600"
              delay={0.7}
            />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-6" aria-label="About section - Professional background and experience">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="/rajan_yak.jpg"
                  alt="Rajan Tandukar - 13+ years experienced Tech Lead and Principal Engineer leading engineering teams"
                  title="Rajan Tandukar - Engineering Leadership"
                  className="w-full max-w-lg rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-neon-green text-dark-900 p-6 rounded-xl shadow-lg neon-border">
                  <div className="text-2xl font-bold">13+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-dark-100 text-neon-green border border-neon-green/30 rounded-full text-sm font-medium mb-4"
                >
                  About Me
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl lg:text-5xl font-bold text-white mb-6"
                >
                  Leading Engineering
                  <span className="text-neon-green neon-glow block">Innovation</span>
                </motion.h2>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-4 text-lg text-dark-500 leading-relaxed"
              >
                <p>
                  As a Tech Lead and Principal Engineer with 13+ years of experience, I lead high-performing engineering teams 
                  and architect scalable, enterprise-grade systems. I drive technical strategy, mentor talented engineers, 
                  and ensure architectural excellence across all initiatives.
                </p>
                
                <p>
                  My expertise spans cloud-native architectures, microservices, system design, team leadership, DevOps practices, 
                  and modern AI engineering. I specialize in building intelligent systems using RAG, vector databases, semantic search, 
                  and LLM integration to solve complex business problems.
                </p>
                
                <p>
                  I hold a BIT in Computing and Software Engineering from Islington College and stay at the forefront of 
                  emerging technologies and industry best practices through continuous learning and community involvement.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 gap-6 pt-6"
              >
                <div className="text-center p-4 bg-dark-100 rounded-xl border border-neon-green/20">
                  <div className="text-3xl font-bold text-neon-green mb-2">13+</div>
                  <div className="text-dark-500">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-dark-100 rounded-xl border border-neon-green/20">
                  <div className="text-3xl font-bold text-neon-green mb-2">50+</div>
                  <div className="text-dark-500">Engineers Mentored</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-dark-900" aria-label="Featured projects and architectural initiatives section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Architectural <span className="text-neon-green neon-glow">Initiatives</span>
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto">
              Key projects and systems I&apos;ve led, architected, and delivered with high-impact results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Microservices Platform"
              description="Scalable microservices architecture for a high-traffic e-commerce platform with real-time inventory management and payment processing."
              techStack={["ASP.NET Core", "Docker", "Kubernetes", "Redis"]}
              architecture={["Microservices", "Event Sourcing", "CQRS", "API Gateway"]}
              features={[
                "Real-time inventory tracking",
                "Distributed payment processing",
                "Auto-scaling infrastructure",
                "99.9% uptime SLA"
              ]}
              githubUrl="https://github.com/mystikraz"
              delay={0.1}
            />
            
            <ProjectCard
              title="Real-time Analytics API"
              description="High-performance analytics API processing millions of events per day with real-time dashboards and alerting system."
              techStack={["Node.js", "MongoDB", "ElasticSearch", "AWS Lambda"]}
              architecture={["Serverless", "Event-driven", "Stream Processing", "NoSQL"]}
              features={[
                "Real-time data processing",
                "Custom alerting rules",
                "Interactive dashboards",
                "Sub-second query response"
              ]}
              githubUrl="https://github.com/mystikraz"
              delay={0.2}
            />
            
            <ProjectCard
              title="Multi-tenant SaaS Platform"
              description="Enterprise SaaS platform with multi-tenancy, role-based access control, and comprehensive audit logging."
              techStack={[".NET 6", "PostgreSQL", "Azure", "SignalR"]}
              architecture={["Multi-tenant", "Clean Architecture", "Domain-driven", "RBAC"]}
              features={[
                "Tenant isolation",
                "Real-time notifications",
                "Comprehensive auditing",
                "Role-based permissions"
              ]}
              githubUrl="https://github.com/mystikraz"
              delay={0.3}
            />
            
            <ProjectCard
              title="AI-Powered Intelligent Document Processing"
              description="Enterprise document processing platform built with LangChain, leveraging RAG patterns, vector databases, and semantic search to extract, analyze, and classify documents with high accuracy using LLM integration."
              techStack={["Node.js", "LangChain", "Pinecone", "OpenAI API"]}
              architecture={["RAG Pattern", "LangChain Agents", "Vector Search", "Semantic Analysis"]}
              features={[
                "LangChain-powered workflows",
                "Semantic document search",
                "LLM-powered extraction with tool calling",
                "RAG-based Q&A system",
                "Multi-format document support",
                "Sub-millisecond search latency"
              ]}
              githubUrl="https://github.com/mystikraz"
              delay={0.4}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/mystikraz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-neon-green text-dark-900 rounded-xl font-semibold hover:bg-primary-500 transition-all neon-border"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </motion.div>
        </div>
      </section>
      {/* Resume Section */}
      <section className="py-20 px-6" aria-label="Resume download section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="text-neon-green neon-glow">Resume</span>
            </h2>
            <p className="text-xl text-dark-500 mb-8">
              Download my complete resume to learn more about my experience and qualifications
            </p>
            
            <motion.a
              href="/Rajan_Resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-neon-green text-dark-900 rounded-xl font-semibold hover:bg-primary-500 transition-all neon-border"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-dark-100 rounded-2xl shadow-lg p-2 border border-neon-green/20"
          >
            <embed 
              src="/Rajan_Resume.pdf" 
              type="application/pdf" 
              width="100%" 
              height="600px"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Hidden Skills Section for ATS & SEO */}
      <section className="sr-only" aria-label="Complete Skills and Experience">
        <h2>Professional Skills and Expertise</h2>
        <div>
          <h3>Technical Leadership & Management</h3>
          <p>Tech Lead, Principal Engineer, Engineering Manager, Team Leadership, Mentoring, Code Review, Architecture Review, Technical Strategy, Roadmap Planning, Agile, Scrum</p>
        </div>
        <div>
          <h3>Backend Development</h3>
          <p>Python, FastAPI, Flask, ASP.NET Core, Node.js, Express.js, .NET 6, API Development, RESTful API, GraphQL, Microservices Architecture, Clean Architecture, Domain Driven Design, CQRS, Event Sourcing</p>
        </div>
        <div>
          <h3>Frontend Development</h3>
          <p>React, Next.js, Angular, TypeScript, HTML5, CSS3, Tailwind CSS, Material UI, Bootstrap, Responsive Design, UI/UX Implementation</p>
        </div>
        <div>
          <h3>Cloud & DevOps</h3>
          <p>AWS, Azure, Docker, Kubernetes, CI/CD Pipeline, GitHub Actions, Azure DevOps, Infrastructure as Code, Terraform, CloudWatch, Monitoring, Logging</p>
        </div>
        <div>
          <h3>Databases & Data Technologies</h3>
          <p>PostgreSQL, MongoDB, Redis, SQL Server, ElasticSearch, Pinecone, Weaviate, Milvus, Database Design, Query Optimization, Data Modeling, NoSQL</p>
        </div>
        <div>
          <h3>AI Engineering & Machine Learning</h3>
          <p>Python, LangChain, LangSmith, Large Language Models, RAG, Retrieval Augmented Generation, Vector Databases, Semantic Search, Hybrid Search, Embeddings, Prompt Engineering, Agentic Workflows, Tool Calling, Model Orchestration, OpenAI API, Claude API, Pinecone, Weaviate, Milvus, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Jupyter, FastAPI, NLP, Machine Learning, Data Pipeline, AI Integration</p>
        </div>
        <div>
          <h3>Architecture & System Design</h3>
          <p>System Architecture, Microservices, Scalability, High Availability, Performance Optimization, Distributed Systems, Multi-tenant Architecture, Security, Enterprise Software, SaaS</p>
        </div>
        <div>
          <h3>Years of Experience</h3>
          <p>13+ years of professional experience as a developer, engineer, and technical leader</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-dark-800" aria-label="Contact form section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s Work <span className="text-neon-green neon-glow">Together</span>
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto">
              Ready to build something amazing? I&apos;m always interested in discussing new opportunities and challenging projects.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-dark-500 mb-8">
                  I&apos;m currently available for backend development projects, technical leadership roles, 
                  and consulting opportunities. Let&apos;s discuss how I can help bring your ideas to life.
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:royal_raj@outlook.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-dark-100 rounded-xl shadow-sm hover:shadow-md transition-all border border-dark-200 hover:border-neon-green/50"
                >
                  <div className="w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center mr-4 border border-neon-green/30">
                    <Mail className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-dark-500">rajan.tandukar@outlook.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/rajan-tandukar-a8385220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-dark-100 rounded-xl shadow-sm hover:shadow-md transition-all border border-dark-200 hover:border-neon-green/50"
                >
                  <div className="w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center mr-4 border border-neon-green/30">
                    <Linkedin className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">LinkedIn</div>
                    <div className="text-dark-500">Connect with me</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/mystikraz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-dark-100 rounded-xl shadow-sm hover:shadow-md transition-all border border-dark-200 hover:border-neon-green/50"
                >
                  <div className="w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center mr-4 border border-neon-green/30">
                    <Github className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">GitHub</div>
                    <div className="text-dark-500">View my repositories</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-dark-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold mb-4 text-white">
                Rajan<span className="text-neon-green neon-glow">.</span>
              </div>
              <p className="text-dark-500 mb-6 max-w-md">
                Senior Backend Developer & Tech Lead passionate about building scalable, 
                robust systems that power modern applications.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/rajan-tandukar-a8385220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-200 rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-dark-900 transition-colors border border-neon-green/30"
                >
                  <Linkedin className="w-5 h-5 text-neon-green" />
                </motion.a>
                
                <motion.a
                  href="https://github.com/mystikraz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-200 rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-dark-900 transition-colors border border-neon-green/30"
                >
                  <Github className="w-5 h-5 text-neon-green" />
                </motion.a>
                
                <motion.a
                  href="mailto:rajan.tandukar@outlook.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-200 rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-dark-900 transition-colors border border-neon-green/30"
                >
                  <Mail className="w-5 h-5 text-neon-green" />
                </motion.a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-dark-500 hover:text-neon-green transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-dark-500 hover:text-neon-green transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-dark-500 hover:text-neon-green transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-dark-500 hover:text-neon-green transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-dark-500">
                <li>Backend Development</li>
                <li>API Design</li>
                <li>Cloud Architecture</li>
                <li>Technical Leadership</li>
                <li>DevOps & CI/CD</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-dark-500 mb-4 md:mb-0">
              © 2024 Rajan Tandukar. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-dark-500">
              <Link href="/Rajan_Resume.pdf" target="_blank" className="hover:text-neon-green transition-colors">
                Resume
              </Link>
              <span>•</span>
              <span>Backend Developer</span>
              <span>•</span>
              <span>Tech Lead</span>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
