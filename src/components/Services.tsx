import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Palette, Code, Brain, MessageSquare, Smartphone } from 'lucide-react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      number: '01',
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with focus on user experience and modern design principles.',
      icon: Palette,
      color: 'from-gray-900 to-gray-700',
    },
    {
      number: '02',
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern frameworks and best practices.',
      icon: Code,
      color: 'from-gray-800 to-gray-600',
    },
    {
      number: '03',
      title: 'Artificial Intelligence',
      description: 'Developing AI-powered solutions and machine learning models for intelligent applications and automation.',
      icon: Brain,
      color: 'from-gray-700 to-gray-500',
    },
    {
      number: '04',
      title: 'Prompt Engineering',
      description: 'Crafting effective prompts and optimizing AI interactions for enhanced responses and better results.',
      icon: MessageSquare,
      color: 'from-gray-600 to-gray-400',
    },
    {
      number: '05',
      title: 'Mobile App Design',
      description: 'Designing seamless mobile experiences with attention to platform guidelines and user behavior.',
      icon: Smartphone,
      color: 'from-gray-500 to-gray-300',
    },
  ];

  return (
    <section id="services" ref={ref} className="min-h-screen bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions combining creativity with technical expertise
          </p>
        </motion.div>

        <div className="grid gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  className={`relative overflow-hidden bg-gradient-to-r ${service.color} p-8 md:p-10 cursor-pointer`}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <motion.div
                      className="text-7xl md:text-8xl text-white/20 tracking-tighter"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        color: hoveredIndex === index ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.number}
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <motion.div
                          animate={{
                            rotate: hoveredIndex === index ? 360 : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl text-white">{service.title}</h3>
                      </div>
                      <motion.p
                        className="text-gray-200 max-w-2xl"
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0.8,
                        }}
                      >
                        {service.description}
                      </motion.p>
                    </div>

                    <motion.div
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        x: hoveredIndex === index ? 0 : -10,
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-white"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredIndex === index ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
