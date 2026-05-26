import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Services from '@/components/sections/Services';

export default function Home() {
  return (
    <>
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-[500px] h-[500px] bg-primary top-[-10%] left-[-10%]"></div>
        <div className="floating-orb w-[600px] h-[600px] bg-secondary bottom-[-20%] right-[-10%]"></div>
        <div className="floating-orb w-[400px] h-[400px] bg-tertiary-container top-[40%] right-[20%]"></div>
      </div>
      
      <Navbar />
      
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
