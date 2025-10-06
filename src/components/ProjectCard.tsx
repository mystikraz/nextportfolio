"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Server, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  architecture: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  architecture,
  features,
  githubUrl,
  liveUrl,
  image,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100">
        {/* Project Image/Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="flex space-x-4 opacity-20">
                <Server className="w-12 h-12 text-white" />
                <Database className="w-12 h-12 text-white" />
                <Cloud className="w-12 h-12 text-white" />
              </div>
            </div>
          )}
          
          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <Github className="w-5 h-5 text-dark-800" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-dark-800" />
              </a>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-dark-800 mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-dark-600 mb-4 leading-relaxed">
            {description}
          </p>
          
          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-dark-700 mb-2 flex items-center">
              <Server className="w-4 h-4 mr-2" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-accent-blue bg-opacity-10 text-accent-blue rounded-md border border-accent-blue border-opacity-20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Architecture */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-dark-700 mb-2 flex items-center">
              <Database className="w-4 h-4 mr-2" />
              Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {architecture.map((arch, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-accent-green bg-opacity-10 text-accent-green rounded-md border border-accent-green border-opacity-20"
                >
                  {arch}
                </span>
              ))}
            </div>
          </div>
          
          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold text-dark-700 mb-2 flex items-center">
              <Cloud className="w-4 h-4 mr-2" />
              Key Features
            </h4>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-sm text-dark-600 flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
