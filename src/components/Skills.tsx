import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Globe,
  Server,
  Layout,
  Terminal,
  Box,
  Cpu,
  GitBranch,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLTK"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["Django", "Flask", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: ["Redux", "Next.js", "Material-UI", "Bootstrap"]
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Git", "Docker", "AWS", "Heroku", "Vercel"]
    },
    {
      title: "Data Science",
      icon: <Box className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"]
    },
    {
      title: "Other Tools",
      icon: <Layers className="w-6 h-6" />,
      skills: ["VS Code", "Jupyter Notebook", "Postman", "Figma"]
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
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Strengths</h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { name: "Full Stack Development", level: 90 },
              { name: "Machine Learning", level: 85 },
              { name: "Data Science", level: 80 },
              { name: "Problem Solving", level: 95 },
              { name: "UI/UX Design", level: 75 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 