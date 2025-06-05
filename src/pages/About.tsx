import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineCode } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  const features = [
    {
      icon: HiOutlineAcademicCap,
      title: "Education",
      description: "B.Tech in AI & Data Science with a strong foundation in mathematics and programming."
    },
    {
      icon: HiOutlineLightBulb,
      title: "Innovation",
      description: "Passionate about creating innovative solutions using cutting-edge technologies."
    },
    {
      icon: HiOutlineCode,
      title: "Development",
      description: "Experienced in full-stack development with modern frameworks and tools."
    }
  ];

  return (
    <SectionWrapper variant="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-gradient text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate AI & Data Science engineer with a keen interest in developing
              innovative solutions. My journey in tech began with a curiosity about how
              things work, which led me to pursue a B.Tech in AI & Data Science.
            </p>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">My Focus</h3>
            <p className="text-gray-300 leading-relaxed">
              I specialize in machine learning, data analysis, and full-stack development.
              My goal is to create impactful solutions that leverage the power of AI
              to solve real-world problems.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="mb-4">
                <feature.icon className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="button-primary">
            View My Resume
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About; 