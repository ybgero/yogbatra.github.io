import { useState, useEffect } from 'next/react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-heading font-bold text-white tracking-wider">
          Yog<span className="text-blue-500">.</span>
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          {['About', 'Tech Stack', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-textSecondary hover:text-white transition-colors text-sm font-medium">
              {item}
            </a>
          ))}
          <a href="/resume.pdf" className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            Download Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}