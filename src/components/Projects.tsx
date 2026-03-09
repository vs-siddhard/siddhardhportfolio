import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Emotion Lens',
      description: 'AI-powered emotion detection system that analyzes facial expressions and predicts human emotions in real time. ',
      category: 'Web Development , Deep Learning , Machine Learning .',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      
    },
    {
      title: 'AI Chat Interface',
      description: 'Intelligent chatbot interface with prompt engineering for enhanced AI interactions and responses.',
      category: 'AI & Prompt Engineering',
      tags: ['AI/ML', 'Prompt Engineering', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    },
    {
      title: 'Portfolio Website',
      description: 'Minimalist portfolio design with smooth animations and modern aesthetics for creative professionals.',
      category: 'UI/UX Design',
      tags: ['Design', 'Motion', 'Web'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    },
    {
      title: 'Vtasks App',
      description: 'VTasksApp is a colorful, mobile-friendly daily tracker to manage goals, habits, reminders, and progress.',
      category: 'Mobile App Design',
      tags: ['Mobile', 'UI/UX', 'Android'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    },
  ];

  return (
    <section id="projects" ref={ref} className="min-h-screen bg-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
              FEATURED PROJECTS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my latest work in web development, UI/UX design, and AI-powered solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.div
                  className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Github size={18} />
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className="text-xs text-gray-500 tracking-widest mb-2">{project.category}</div>
                <h3 className="text-2xl text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs tracking-wider border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-900 to-gray-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
