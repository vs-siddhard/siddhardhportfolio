import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Instagram, Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/mr_siddhardh?igsh=MWp5cXYwbmZwM2dkcw==',
      color: 'hover:text-pink-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/vs-siddhard',
      color: 'hover:text-purple-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vssiddhardsai/',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:velagaletsiddhardh2007@gmail.com',
      color: 'hover:text-red-500',
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7981645112',
      link: 'tel:+917981645112',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'velagaletsiddhardh2007@gmail.com',
      link: 'mailto:velagaletsiddhardh2007@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Visakhapatnam, Andhra Pradesh, India',
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              LET'S CONNECT
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-gray-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-white to-gray-100 p-8 md:p-10 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <div className="relative z-10">
              <h3 className="text-3xl text-gray-900 group-hover:text-white transition-colors duration-500 mb-4">
                Ready to Start?
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-500 mb-8">
                Let's discuss your project and see how I can help bring your vision to reality.
              </p>
              <motion.a
                href="mailto:velagaletsiddharth2007@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gray-900 group-hover:bg-white text-white group-hover:text-gray-900 px-8 py-4 tracking-wider transition-all duration-500"
              >
                <span>CONTACT ME</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h4 className="text-xl text-white mb-8">Follow Me On</h4>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white ${social.color} transition-all duration-300 hover:bg-white/20`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p>© 2025 Shanmukha Siddhard Sai Velagaleti. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed & Developed with passion</p>
        </motion.div>
      </div>
    </section>
  );
}
