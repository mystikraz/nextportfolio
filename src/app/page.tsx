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
import CardFormInputs from "@/components/CardFormInputs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-50 to-white">
      {/* Modern Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-dark-200 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-dark-800"
          >
            Rajan<span className="text-primary-600">.</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-dark-600 hover:text-primary-600 transition-colors">About</Link>
            <Link href="#skills" className="text-dark-600 hover:text-primary-600 transition-colors">Skills</Link>
            <Link href="#projects" className="text-dark-600 hover:text-primary-600 transition-colors">Projects</Link>
            <Link href="#contact" className="text-dark-600 hover:text-primary-600 transition-colors">Contact</Link>
          </nav>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
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
                className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6"
              >
                <Zap className="w-4 h-4 mr-2" />
                Senior Full Stack Developer
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold text-dark-800 mb-6 leading-tight"
              >
                Building Full Stack
                <span className="text-primary-600 block">Solutions</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-dark-600 mb-8 leading-relaxed"
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
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Code2 className="w-5 h-5 mr-2" />
                  View My Work
                </motion.a>
                
                <motion.a
                  href="/Rajan_Resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-dark-300 text-dark-700 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
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
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <Server className="w-8 h-8 text-primary-600" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <Database className="w-8 h-8 text-accent-green" />
              </motion.div>
              
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-8 bg-white p-4 rounded-xl shadow-lg"
              >
                <Cloud className="w-8 h-8 text-accent-blue" />
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
          <ChevronDown className="w-6 h-6 text-dark-400" />
        </motion.div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-dark-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-800 mb-6">
              Full Stack Expertise
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
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
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">8+</div>
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
                  className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4"
                >
                  About Me
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl lg:text-5xl font-bold text-dark-800 mb-6"
                >
                  Passionate About Building
                  <span className="text-primary-600 block">Scalable Solutions</span>
                </motion.h2>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-4 text-lg text-dark-600 leading-relaxed"
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
                <div className="text-center p-4 bg-dark-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-dark-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-dark-50 rounded-xl">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-dark-600">Technologies Mastered</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-dark-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-800 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
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
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
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
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-800 mb-6">
              My Resume
            </h2>
            <p className="text-xl text-dark-600 mb-8">
              Download my complete resume to learn more about my experience and qualifications
            </p>
            
            <motion.a
              href="/Rajan_Resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
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
            className="bg-white rounded-2xl shadow-lg p-2"
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
      <section id="contact" className="py-20 px-6 bg-dark-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-800 mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
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
                <h3 className="text-2xl font-bold text-dark-800 mb-6">Get in Touch</h3>
                <p className="text-dark-600 mb-8">
                  I&apos;m currently available for backend development projects, technical leadership roles, 
                  and consulting opportunities. Let&apos;s discuss how I can help bring your ideas to life.
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:rajan.tandukar@outlook.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-800">Email</div>
                    <div className="text-dark-600">rajan.tandukar@outlook.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/rajan-tandukar-a8385220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <Linkedin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-800">LinkedIn</div>
                    <div className="text-dark-600">Connect with me</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/mystikraz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <Github className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-800">GitHub</div>
                    <div className="text-dark-600">View my repositories</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors">
                    <option>Backend Development</option>
                    <option>API Design & Development</option>
                    <option>Cloud Architecture</option>
                    <option>Technical Leadership</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-dark-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold mb-4">
                Rajan<span className="text-primary-400">.</span>
              </div>
              <p className="text-dark-300 mb-6 max-w-md">
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
                  className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="https://github.com/mystikraz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="mailto:rajan.tandukar@outlook.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-dark-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-dark-300 hover:text-white transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-dark-300 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-dark-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-dark-300">
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
            <div className="text-dark-300 mb-4 md:mb-0">
              © 2024 Rajan Tandukar. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-dark-300">
              <Link href="/Rajan_Resume.pdf" target="_blank" className="hover:text-white transition-colors">
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
  );
}
