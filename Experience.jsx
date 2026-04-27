import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center">Experience</h2>
        
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l border-white/10 group"
            >
              <div className="absolute w-4 h-4 bg-bgPrimary border-2 border-blue-500 rounded-full -left-[9px] top-1 group-hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <div className="glass-card p-6 md:p-8">
                <h3 className="text-2xl font-heading font-bold text-white">{exp.role}</h3>
                <h4 className="text-blue-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-textSecondary mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-textSecondary flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span> {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}