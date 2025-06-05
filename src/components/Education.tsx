import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BACHELOR OF TECHNOLOGY (B-TECH)",
      institution: "VISHNU INSTITUTE OF TECHNOLOGY",
      specialization: "CSE (Artificial Intelligence and Data Science)",
      location: "Bhimavaram, Andhra Pradesh",
      duration: "2022 - 2026",
      score: "CGPA-9.02",
      achievements: [
        "Specialized in Artificial Intelligence and Data Science",
        "Active member of the college's technical club",
        "Participated in various hackathons and coding competitions"
      ]
    },
    {
      degree: "INTERMEDIATE COLLEGE",
      institution: "Sri Viswa Junior College",
      specialization: "Maths, Physics, Chemistry",
      location: "Visakhapatnam, Andhra Pradesh",
      duration: "2020 - 2022",
      score: "CGPA-9.29",
      achievements: [
        "Excelled in Mathematics and Physics",
        "Participated in competitive exams",
        "Active in academic competitions"
      ]
    },
    {
      degree: "10TH/SSC",
      institution: "Ravindra Bharathi School",
      location: "Visakhapatnam, Andhra Pradesh",
      duration: "2020",
      score: "CGPA-10",
      achievements: [
        "Achieved perfect CGPA of 10",
        "School topper",
        "Active in extracurricular activities"
      ]
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
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-indigo-500/20"></div>
              )}

              <div className="flex flex-col md:flex-row gap-8">
                {/* Timeline Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-indigo-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {item.duration}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {item.score}
                      </span>
                    </div>
                    <h4 className="text-xl text-indigo-400 mb-2">{item.institution}</h4>
                    {item.specialization && (
                      <p className="text-gray-300 mb-2">{item.specialization}</p>
                    )}
                    <p className="text-gray-400 mb-4">{item.location}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 