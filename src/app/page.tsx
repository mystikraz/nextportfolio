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
  Smartphone
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
    "jobTitle": "Senior Full Stack Developer & Tech Lead",
    "description": "Senior Full Stack Developer & Tech Lead specializing in scalable backend systems and modern frontend applications",
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
      "Kubernetes"
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
      <section className="pt-32 pb-20 px-6">
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
                Senior Full Stack Developer
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Building Full Stack
                <span className="text-neon-green neon-glow block">Solutions</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-dark-500 mb-8 leading-relaxed"
              >
                I&apos;m Rajan Tandukar, a passionate full-stack developer and tech lead specializing in 
                building robust backend systems and modern frontend applications with React, Next.js, and Angular.
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
                  alt="Rajan Tandukar"
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
      <section id="skills" className="py-20 px-6 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Full Stack <span className="text-neon-green neon-glow">Expertise</span>
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto">
              Specialized in building end-to-end solutions with robust backend systems and modern frontend applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Backend Skills */}
            <TechCard
              icon={Server}
              title="API Development"
              description="Building RESTful and GraphQL APIs with proper authentication, rate limiting, and comprehensive documentation."
              technologies={["ASP.NET Core", "Node.js", "Express", "FastAPI"]}
              gradient="bg-gradient-to-br from-primary-500 to-primary-700"
              delay={0.1}
            />
            
            <TechCard
              icon={Database}
              title="Database Design"
              description="Designing efficient database schemas, optimizing queries, and implementing proper data modeling strategies."
              technologies={["SQL Server", "PostgreSQL", "MongoDB", "Redis"]}
              gradient="bg-gradient-to-br from-accent-green to-emerald-600"
              delay={0.2}
            />
            
            <TechCard
              icon={Cloud}
              title="Cloud Architecture"
              description="Architecting and deploying scalable cloud-native applications with microservices and serverless patterns."
              technologies={["AWS", "Azure", "Docker", "Kubernetes"]}
              gradient="bg-gradient-to-br from-accent-blue to-blue-600"
              delay={0.3}
            />
            
            {/* Frontend Skills */}
            <TechCard
              icon={Monitor}
              title="Frontend Development"
              description="Creating responsive, interactive user interfaces with modern frameworks and component-based architecture."
              technologies={["React", "Next.js", "Angular", "TypeScript"]}
              gradient="bg-gradient-to-br from-violet-500 to-purple-600"
              delay={0.4}
            />
            
            <TechCard
              icon={Smartphone}
              title="UI/UX Implementation"
              description="Building pixel-perfect, accessible interfaces with modern CSS frameworks and design systems."
              technologies={["Tailwind CSS", "Material UI", "Bootstrap", "Sass"]}
              gradient="bg-gradient-to-br from-pink-500 to-rose-600"
              delay={0.5}
            />
            
            <TechCard
              icon={GitBranch}
              title="DevOps & CI/CD"
              description="Implementing automated deployment pipelines, infrastructure as code, and monitoring solutions."
              technologies={["GitHub Actions", "Azure DevOps", "Terraform", "CloudWatch"]}
              gradient="bg-gradient-to-br from-accent-purple to-purple-600"
              delay={0.6}
            />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-6">
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
                  alt="Rajan Tandukar"
                  className="w-full max-w-lg rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-neon-green text-dark-900 p-6 rounded-xl shadow-lg neon-border">
                  <div className="text-2xl font-bold">12+</div>
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
                  Passionate About Building
                  <span className="text-neon-green neon-glow block">Scalable Solutions</span>
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
                  With over 8 years of experience in backend development and technical leadership, 
                  I specialize in architecting and building robust, scalable systems that power modern applications.
                </p>
                
                <p>
                  My expertise spans across cloud-native architectures, microservices, API design, 
                  and DevOps practices. I&apos;m passionate about writing clean, maintainable code and 
                  leading teams to deliver exceptional software solutions.
                </p>
                
                <p>
                  I hold a BIT in Computing and Software Engineering from Islington College and 
                  continuously stay updated with the latest technologies and industry best practices.
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
                  <div className="text-3xl font-bold text-neon-green mb-2">50+</div>
                  <div className="text-dark-500">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-dark-100 rounded-xl border border-neon-green/20">
                  <div className="text-3xl font-bold text-neon-green mb-2">15+</div>
                  <div className="text-dark-500">Technologies Mastered</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured <span className="text-neon-green neon-glow">Projects</span>
            </h2>
            <p className="text-xl text-dark-500 max-w-3xl mx-auto">
              Showcase of backend systems and applications I&apos;ve architected and developed
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
      <section className="py-20 px-6">
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
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-dark-800">
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
