import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import type { Project } from './Projects';
import { projects } from './Projects';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p: Project) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/#projects" className="text-blue-500 hover:text-blue-400">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/#projects"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 group"
        >
          <motion.div
            whileHover={{ x: -4 }}
            className="mr-2"
          >
            <FaChevronLeft />
          </motion.div>
          Back to Projects
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-gradient">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {project.description}
          </p>
          <div className="flex space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
              <p className="text-gray-300 mb-6">{project.longDescription}</p>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={project.technologies}
                      dataKey="percentage"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      labelLine={false}
                      label={({ name, percent }: { name: string; percent: number }) => `${name} ${percent.toFixed(0)}%`}
                    >
                      {project.technologies.map((entry, index: number) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 space-y-4">
                {project.technologies.map((tech, index: number) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{tech.name}</span>
                      <span className="text-gray-400">{tech.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: tech.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold">Project Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="relative group rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails; 