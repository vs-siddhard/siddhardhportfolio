import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

function CountUpAnimation({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: 4, label: 'Success Projects', suffix: '' },
    { number: 20, label: 'Skills', suffix: '+' },
    { number: 10, label: 'Certifications', suffix: '+' },
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
              ABOUT ME
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg blur opacity-20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <ImageWithFallback
                src="/profile-image.png"
                alt="Shanmukha Siddhard Sai"
                className="relative rounded-lg shadow-2xl w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl text-gray-900">
              Hi, I'm <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Shanmukha Siddhard Sai</span>
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I am currently studying at Gayatri Vidya Parishad College of Engineering in Visakhapatnam, 
                pursuing a bachelor's degree in Artificial Intelligence and Machine Learning. In my first year, 
                I chose to learn web development online.
              </p>
              <p>
                In my initiative to learn over 20 skills online, using platforms like LetsUpgrade, where I 
                attended online classes and boot camps to acquire knowledge and certificates. I have completed 
                several certifications, including a 7-day Power BI certification course from CoursePe and I 
                have learned HTML and CSS through LetsUpgrade.
              </p>
              <p>
                Before this, I completed my intermediate education at Sri Saraswati Junior College in 
                Nandigama, achieving a score of 96%. I also completed my 10th grade at Sri Chaitanya High 
                School in Nandigama, where I scored 92.33%.
              </p>
              <p>
                Outside of academics, I have a passion for music and photography. I believe that creativity 
                is just as important as academic knowledge, and I strive to combine both in my pursuits.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-center text-white relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl mb-2">
                  <CountUpAnimation end={stat.number} />
                  {stat.suffix}
                </div>
                <div className="text-gray-300 tracking-wider text-sm">{stat.label}</div>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-white"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 + index * 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
