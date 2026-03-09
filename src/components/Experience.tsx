import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: 'AI & Prompt Engineering Intern',
      company: 'VaultofCodes',
      location: 'Remote',
      period: 'September 2024 - October 2024',
      duration: '2 months',
      description: 'Explored how artificial intelligence responds to different prompts and how small changes in wording can make a big difference in AI-generated results. Worked on improving the quality and accuracy of responses, learned about prompt optimization, and understood how AI tools can be applied in real-world projects.',
      skills: ['Prompt Engineering', 'AI/ML', 'Problem Solving', 'Communication'],
      color: 'from-gray-900 to-gray-700',
    },
    // Add more experiences here as needed
  ];

  return (
    <section id="experience" ref={ref} className="min-h-screen bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional journey and hands-on experience in AI, web development, and creative technologies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}
                >
                  <div className={`bg-gradient-to-br ${exp.color} p-8 text-white relative overflow-hidden group`}>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />

                    <div className="relative z-10">
                      {/* Period Badge */}
                      <div className={`inline-flex items-center gap-2 bg-white/20 px-4 py-2 mb-4 text-sm ${
                        index % 2 === 0 ? 'md:float-right md:ml-4' : ''
                      }`}>
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      <div className="clear-both">
                        <h3 className="text-2xl md:text-3xl mb-2">{exp.title}</h3>
                        
                        <div className={`flex flex-wrap items-center gap-3 mb-4 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          <div className="flex items-center gap-2 text-gray-200">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-200">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-200 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Skills Tags */}
                        <div className={`flex flex-wrap gap-2 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-white/20 text-white text-sm border border-white/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-white"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="w-6 h-6 bg-gradient-to-br from-gray-900 to-gray-600 rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden md:block ${index % 2 === 0 ? '' : 'md:col-start-1'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl text-gray-900 mb-8 text-center">Education</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white border-2 border-gray-200 p-6 hover:border-gray-900 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎓</div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 mb-2">
                    Bachelor's in Artificial Intelligence and Machine Learning
                  </h4>
                  <p className="text-gray-600 mb-1">Gayatri Vidya Parishad College of Engineering</p>
                  <p className="text-gray-500 text-sm mb-3">Visakhapatnam, Andhra Pradesh</p>
                  <p className="text-gray-700">Currently pursuing undergraduate degree with focus on AI/ML technologies</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white border-2 border-gray-200 p-6 hover:border-gray-900 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">📚</div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 mb-2">Intermediate Education (MPC)</h4>
                  <p className="text-gray-600 mb-1">Sri Saraswati Junior College</p>
                  <p className="text-gray-500 text-sm mb-3">Nandigama</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-gray-900 text-white text-sm">96% Score</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
