import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Let's Connect</h2>
          <p className="text-textSecondary mb-12 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
          
          <form className="max-w-xl mx-auto glass-card p-8 space-y-4 text-left mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">Name</label>
                <input type="text" className="w-full bg-[#0F172A]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">Email</label>
                <input type="email" className="w-full bg-[#0F172A]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-2">Message</label>
              <textarea rows="4" className="w-full bg-[#0F172A]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>
            </div>
            <button type="button" className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
              Send Message
            </button>
          </form>

          <div className="flex justify-center space-x-6">
            <a href="mailto:yogbatra71@gmail.com" className="p-3 glass rounded-full hover:bg-white/10 text-textSecondary hover:text-white transition-all"><Mail size={24} /></a>
            <a href="https://www.linkedin.com/in/yog-batra-661798179/" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-white/10 text-textSecondary hover:text-[#0A66C2] transition-all"><Linkedin size={24} /></a>
            <a href="https://github.com/ybgero" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-white/10 text-textSecondary hover:text-white transition-all"><Github size={24} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}