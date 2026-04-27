import { motion } from 'framer-motion';

export default function About() {
  const skills = ['SQL', 'Python', 'Power BI', 'Alteryx', 'Data Pipelines', 'Analytics Engineering'];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-purple-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center glass">
               <span className="text-white/30 text-lg font-heading">Profile Visual / Avatar</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">About Me</h2>
            <p className="text-textSecondary text-lg mb-6 leading-relaxed">
              I am a data professional with deep experience delivering analytics solutions across marketing and professional services organizations. My background in computer science drives my structural approach to problem-solving.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 rounded-full glass text-sm font-medium text-white shadow-sm border-white/5">{skill}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}