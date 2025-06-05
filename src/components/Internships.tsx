import { motion } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';

const internships = [
  {
    company: 'EXCELR',
    position: 'Web Development and JavaScript',
    period: '05/2024 – 07/2024',
    description: [
      'Developed and maintained interactive web applications using HTML, CSS, JavaScript, and modern web frameworks.',
      'Implemented responsive designs ensuring cross-browser compatibility and optimal performance on both mobile and desktop devices.'
    ]
  }
];

const Internships = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Internships & Achievements</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-500" />
          
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />
              
              {/* Content */}
              <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                  <div className="flex items-center justify-end mb-4 space-x-3">
                    <h3 className="text-2xl font-bold text-white">{internship.company}</h3>
                    <FaBriefcase className="text-blue-400 text-2xl" />
                  </div>
                  <p className="text-blue-400 font-semibold mb-2">{internship.position}</p>
                  <p className="text-gray-400 mb-4">{internship.period}</p>
                  <ul className="text-gray-300 space-y-2">
                    {internship.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <FaCode className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty column for timeline alignment */}
              <div className={index % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships; 