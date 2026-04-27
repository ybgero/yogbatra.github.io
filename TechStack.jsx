import { motion } from 'framer-motion';
import { techStack } from '../data/portfolio';

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technology Stack</h2>
          <p className="text-textSecondary">Tools and technologies I use to build scalable data solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <tech.icon size={24} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-textSecondary">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}