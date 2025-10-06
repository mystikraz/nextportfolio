"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  delay?: number;
}

export default function TechCard({
  icon: Icon,
  title,
  description,
  technologies,
  gradient,
  delay = 0,
}: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-dark-100 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl border border-dark-200 hover:border-neon-green/50">
        {/* Background gradient on hover */}
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10",
          gradient
        )} />
        
        {/* Icon */}
        <div className={cn(
          "inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 bg-dark-200 border border-neon-green/30",
          "group-hover:scale-110 group-hover:border-neon-green"
        )}>
          <Icon className="w-8 h-8 text-neon-green" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
          {title}
        </h3>
        
        <p className="text-dark-500 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-dark-200 text-dark-600 rounded-full border border-dark-300 transition-colors group-hover:bg-neon-green/10 group-hover:text-neon-green group-hover:border-neon-green/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
