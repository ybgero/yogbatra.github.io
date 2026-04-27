import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-8 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h3 className="text-2xl font-heading font-semibold mb-3 text-white">{project.title}</h3>
      <p className="text-textSecondary mb-6 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 mt-auto">
        <a href={project.github} target="_blank" rel="noreferrer" className="text-textSecondary hover:text-white transition-colors flex items-center gap-2 text-sm"><Github size={18}/> Code</a>
      </div>
    </motion.div>
  );
}