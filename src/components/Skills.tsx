import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    'HTML & CSS',
    'JavaScript',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'UI/UX Design',
    'Figma',
    'Adobe XD',
    'Web Development',
    'Responsive Design',
    'AI/ML Fundamentals',
    'Prompt Engineering',
    'Python',
    'Data Analytics',
    'Power BI',
    'Git & GitHub',
    'Office 365',
    'Risk Management',
    'Photography',
    'Music',
  ];

  const certifications = [
    {
      title: 'Tata - GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata Group',
      icon: '🎓',
      url: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_3qCThDhfYtrJjSPJi_1760896464606_completion_certificate.pdf'
    },
    {
      title: 'Goldman Sachs - Internal Audit Job Simulation',
      issuer: 'Goldman Sachs',
      icon: '🏦',
      url: 'https://www.theforage.com/completion-certificates/MBA4MnZTNFEoJZGnk/dC4ChhAkhpgB7QvGd_MBA4MnZTNFEoJZGnk_3qCThDhfYtrJjSPJi_1761988539379_completion_certificate.pdf'
    },
    {
      title: 'Solutions	Architecture Job Simulation',
      issuer: 'Forage',
      icon: '📚',
      url: 'https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_3qCThDhfYtrJjSPJi_1760984523463_completion_certificate.pdf'
    },
    {
      title: 'Google Certifications',
      issuer: 'Google',
      icon: '🎯',
      url: 'https://www.skills.google/public_profiles/1b1d8ab4-0aba-4556-85a3-1acae6a3e0ae/badges/14695297?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
      
    },
    {
      title: 'Prompt Engineering: How to Talk to the AIs',
      issuer: 'Linkedin e-learing',
      icon: '🤖',
      url: 'https://www.linkedin.com/learning/certificates/01b2382ace08900b5c141e1f96df96a5b49ade14722a25c2650fd6a16378e002'
    },
    {
      title: 'Software Engineer',
      issuer: 'HackerRank',
      icon: '📊',
      url: 'https://www.hackerrank.com/certificates/7c596d75fe12'
    },
    {
      title: 'Building AI assistant',
      issuer: 'LetsUpgrade',
      icon: '💻',
      url: 'https://verify.letsupgrade.in/certificate/LUEAIDAAUG125223'
    },
    {
      title: 'AI & Prompt Engineering Intern',
      issuer: 'VaultofCodes',
      icon: '🚀',
    },
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
              SKILLS & CERTIFICATIONS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-auto mb-6"></div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl text-gray-900 mb-8 flex items-center gap-3">
            <CheckCircle className="w-8 h-8" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border-2 border-gray-200 p-4 text-center hover:border-gray-900 transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl text-gray-900 mb-8 flex items-center gap-3">
            <Award className="w-8 h-8" />
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-700 p-6 text-white relative overflow-hidden group cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-lg mb-2">{cert.title}</h4>
                      <p className="text-gray-300 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  {cert.url && (
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 text-sm tracking-wider hover:bg-gray-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>VIEW CERTIFICATE</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
