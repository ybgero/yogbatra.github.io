import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import About from '../sections/About';
import TechStack from '../sections/TechStack';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <div className="bg-bgPrimary min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center border-t border-white/5 text-textSecondary text-sm glass mt-12 z-10 relative">
        <p>© {new Date().getFullYear()} Yog Batra. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}