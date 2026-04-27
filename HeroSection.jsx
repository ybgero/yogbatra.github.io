import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Ambient glowing background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#06B6D4]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-4xl mx-auto px-6 z-10 text-center flex flex-col items-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="text-sm font-medium text-blue-400">Data & Analytics Specialist</span>
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
          Hi, I'm Yog.<br/>
          <span className="text-gradient">I build data systems that turn information into decisions.</span>
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-textSecondary max-w-2xl mb-10">
          Experienced in BI systems, data pipelines, and scalable analytics solutions. I transform raw data into clear, actionable business intelligence.
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="px-8 py-4 rounded-full bg-white text-bgPrimary font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/resume.pdf" className="px-8 py-4 rounded-full glass font-semibold hover:bg-white/10 transition-colors border border-white/10 text-white flex items-center justify-center">
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}