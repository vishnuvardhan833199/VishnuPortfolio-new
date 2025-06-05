import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiCode, HiChip } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden bg-hero">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-blue-600/20"
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 glass">
              <img
                src="https://avatars.githubusercontent.com/u/yourusername"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center glass"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HiCode className="text-2xl text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl font-bold mb-6 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Vishnu Vardhan Nagavarapu
        </motion.h1>

        <motion.div
          className="flex items-center justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HiChip className="text-3xl text-blue-400" />
          <h2 className="text-2xl text-gray-300">
            AI & Data Science Engineer
          </h2>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { Icon: FaGithub, href: "https://github.com/vishnuvardhan833199", label: "GitHub" },
            { Icon: FaLinkedin, href: "https://linkedin.com/in/nagavarapu-vishnu-vardhan", label: "LinkedIn" },
            { Icon: FaEnvelope, href: "mailto:venkateshnagavarapu75@gmail.com", label: "Email" }
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-2xl text-gray-300 group-hover:text-white transition-colors">
                <Icon />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                animate={{ scale: [0.8, 1.2, 1] }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          className="button-primary group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
          <motion.span
            className="ml-2 inline-block"
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero; 