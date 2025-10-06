"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: 'Backend Development',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          projectType: 'Backend Development',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-dark-100 rounded-2xl shadow-lg p-8 border border-dark-200"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-dark-600 mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-neon-green focus:border-neon-green outline-none transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark-600 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-neon-green focus:border-neon-green outline-none transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-dark-600 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-neon-green focus:border-neon-green outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark-600 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-neon-green focus:border-neon-green outline-none transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark-600 mb-2">
            Project Type
          </label>
          <select 
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-neon-green focus:border-neon-green outline-none transition-colors"
          >
            <option>Backend Development</option>
            <option>Frontend Development</option>
            <option>Full Stack Development</option>
            <option>API Design & Development</option>
            <option>Cloud Architecture</option>
            <option>Technical Leadership</option>
            <option>Consulting</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark-600 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-neon-green focus:border-neon-green outline-none transition-colors resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg text-neon-green">
            ✅ Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
            ❌ Failed to send message. Please try again or email me directly at royal_raj@outlook.com
          </div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full bg-neon-green text-dark-900 py-4 rounded-lg font-semibold hover:bg-primary-500 transition-all neon-border disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>
    </motion.div>
  );
}
