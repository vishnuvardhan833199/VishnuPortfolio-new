import { motion } from 'framer-motion';
import { Code, Brain, Database, Server, Globe, Book } from 'lucide-react';

const About = () => {
  const traits = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Implementing ML models and data analysis solutions"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Science",
      description: "Analyzing data and creating predictive models"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      description: "Creating robust server-side applications"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      description: "Expertise in modern web frameworks and tools"
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
    }
  ];

  const journey = [
    {
      year: "2020-2024",
      title: "B.Tech in CSE (AI & DS)",
      organization: "VISHNU INSTITUTE OF TECHNOLOGY",
      description: "Specializing in Artificial Intelligence and Data Science with 9.02 CGPA"
    },
    {
      year: "2023",
      title: "Web Development Internship",
      organization: "EXCELR",
      description: "Developed full-stack applications and learned industry practices"
    },
    {
      year: "2023",
      title: "Machine Learning Projects",
      organization: "Academic Projects",
      description: "Implemented various ML models including California House Price Prediction"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-indigo-500/30 shadow-2xl">
              <img
                src="/VISHNU.jpg"
                alt="Vishnu Vardhan"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 border-4 border-indigo-500/20 rounded-2xl border-dashed"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Full Stack Developer & ML Enthusiast
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate B.Tech student specializing in CSE (Artificial Intelligence and Data Science) 
              at VISHNU INSTITUTE OF TECHNOLOGY. My journey in technology is driven by a deep interest in 
              both full-stack development and machine learning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend development, coupled with expertise in 
              machine learning and data science, I strive to create innovative solutions that combine the 
              best of both worlds.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-6"
            >
              {["Python", "JavaScript", "React", "Node.js", "Machine Learning", "Data Science"].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Traits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                  {trait.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{trait.title}</h3>
              </div>
              <p className="text-gray-300">{trait.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">My Journey</h3>
          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-4 items-start"
              >
                <div className="md:w-1/4">
                  <div className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm">
                    {item.year}
                  </div>
                </div>
                <div className="md:w-3/4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-indigo-300 mb-2">{item.organization}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mt-20 text-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20"
        >
          <blockquote className="text-xl text-white italic">
            "Passionate about creating innovative solutions at the intersection of web development and machine learning,
            always striving to learn and grow in this ever-evolving tech landscape."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 