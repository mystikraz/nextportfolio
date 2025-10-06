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
      <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100">
        {/* Background gradient on hover */}
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5",
          gradient
        )} />
        
        {/* Icon */}
        <div className={cn(
          "inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300",
          gradient,
          "group-hover:scale-110"
        )}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-dark-800 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-dark-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-dark-50 text-dark-700 rounded-full border border-dark-200 transition-colors group-hover:bg-primary-50 group-hover:text-primary-700 group-hover:border-primary-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
