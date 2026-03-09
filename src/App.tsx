import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
