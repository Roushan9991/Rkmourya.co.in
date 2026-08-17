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
      <Navbar />
      
      <main className="relative z-10 w-full max-w-full overflow-x-hidden bg-background">
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
