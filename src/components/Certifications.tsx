import { motion } from 'framer-motion';
import { FaAward, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiEdx } from 'react-icons/si';

const certifications = [
  {
    title: 'Java OOPs in edX',
    issuer: 'edX',
    date: '2023',
    icon: <SiEdx className="text-4xl" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Node.js Certification Course',
    issuer: 'Node.js Foundation',
    date: '2023',
    icon: <FaNodeJs className="text-4xl" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'React.js in Great Learning',
    issuer: 'Great Learning',
    date: '2023',
    icon: <FaReact className="text-4xl" />,
    color: 'from-blue-500 to-cyan-500'
  }
];

const Certifications = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur" />
              <div className="relative bg-gray-800 rounded-lg p-6 shadow-xl group-hover:transform group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-400">
                    {cert.icon}
                  </div>
                  <FaAward className="text-2xl text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 