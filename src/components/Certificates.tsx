import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Java OOPs in edX",
      issuer: "edX",
      date: "2023",
      credentialId: "JAVA-OOPS-EDX",
      link: "#",
      skills: ["Java", "Object-Oriented Programming", "Software Design"]
    },
    {
      title: "Node.js Certification Course",
      issuer: "Node.js Foundation",
      date: "2023",
      credentialId: "NODEJS-CERT",
      link: "#",
      skills: ["Node.js", "Express.js", "JavaScript", "Backend Development"]
    },
    {
      title: "React.js in Great Learning",
      issuer: "Great Learning",
      date: "2023",
      credentialId: "REACT-GL",
      link: "#",
      skills: ["React.js", "JavaScript", "Frontend Development", "Web Development"]
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
          <h2 className="text-4xl font-bold text-white mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-colors relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              </div>

              <div>
                <p className="text-indigo-400">{cert.issuer}</p>
                <p className="text-gray-400">Issued: {cert.date}</p>
                <p className="text-gray-400">Credential ID: {cert.credentialId}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-white hover:text-indigo-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Verify Certificate</span>
              </a>

              {/* Hover Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates; 