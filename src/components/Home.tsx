import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Download, Send } from 'lucide-react';
import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const Home = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#6366f1",
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl px-4 py-8 space-y-12">
          {/* Name Card with Advanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 shadow-2xl"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(99, 102, 241, 0)",
                  "0 0 0 10px rgba(99, 102, 241, 0.1)",
                  "0 0 0 20px rgba(99, 102, 241, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 rounded-2xl"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">
              VISHNU VARDHAN NAGAVARAPU
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-6">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Machine Learning Enthusiast',
                  2000,
                  'Python Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-md border border-indigo-700/30"
            >
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">About Me</h2>
              <p className="text-gray-300 mb-4">
                Passionate B.Tech student specializing in CSE with AI & DS.
                Exploring the intersection of web development and machine learning.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-md border border-purple-700/30"
            >
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Get in Touch</h2>
              <p className="text-gray-300 mb-4">
                Looking for opportunities to collaborate and create innovative solutions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <Send className="w-5 h-5" />
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 