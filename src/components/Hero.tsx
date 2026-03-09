import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur-3xl opacity-20"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-gray-700 to-black rounded-full blur-3xl opacity-20"
        animate={{
          x: -mousePosition.x * 1.5,
          y: -mousePosition.y * 1.5,
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-gray-400 tracking-widest text-sm mb-2">WELCOME TO MY WORLD</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-4">
            <motion.span
              className="block bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200%' }}
            >
              EXPLORE MY
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
              style={{ backgroundSize: '200%' }}
            >
              PORTFOLIO
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-xl md:text-2xl text-gray-300 mb-2">Shanmukha Siddhard Sai Velagaleti</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            AIML Undergraduate | Web Development & UI/UX | Merging Code with Creativity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-8 py-4 bg-white text-black tracking-wider hover:bg-gray-200 transition-colors"
          >
            DISCOVER MORE
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white text-white tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            GET IN TOUCH
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-xs tracking-widest">SCROLL</span>
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}
