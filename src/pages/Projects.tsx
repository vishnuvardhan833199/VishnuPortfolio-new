import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: {
    name: string;
    percentage: number;
    color: string;
  }[];
  githubUrl: string;
  demoUrl?: string;
  features: string[];
  longDescription: string;
}

export const projects: Project[] = [
  {
    id: 'california-house-price',
    title: 'California House Price Prediction',
    description: 'Machine learning model to predict house prices using Ridge Regression and Flask deployment.',
    longDescription: 'Implemented a comprehensive machine learning solution for predicting house prices in California. The project showcases data preprocessing, model training, and web deployment capabilities.',
    image: '/projects/house-price.jpg',
    technologies: [
      { name: 'Python', percentage: 40, color: '#3776AB' },
      { name: 'Scikit-learn', percentage: 30, color: '#F7931E' },
      { name: 'Flask', percentage: 20, color: '#000000' },
      { name: 'Pandas', percentage: 10, color: '#150458' }
    ],
    features: [
      'Data preprocessing and feature engineering',
      'Ridge Regression model implementation',
      'Model evaluation with RMSE and R²',
      'Flask web interface for predictions',
      'Interactive user input handling'
    ],
    githubUrl: 'https://github.com/vishnuvardhan833199/california-house-price'
  },
  {
    id: 'food-app',
    title: 'Food App Interface',
    description: 'Full-stack food delivery application with modern UI and seamless user experience.',
    longDescription: 'A dynamic food delivery platform built with React.js and Tailwind CSS, featuring user authentication, food browsing, cart management, and order placement.',
    image: '/projects/food-app.jpg',
    technologies: [
      { name: 'React.js', percentage: 40, color: '#61DAFB' },
      { name: 'Tailwind CSS', percentage: 30, color: '#06B6D4' },
      { name: 'JavaScript', percentage: 20, color: '#F7DF1E' },
      { name: 'Node.js', percentage: 10, color: '#339933' }
    ],
    features: [
      'User authentication system',
      'Dynamic food browsing interface',
      'Shopping cart functionality',
      'Order placement and tracking',
      'Responsive design for all devices'
    ],
    githubUrl: 'https://github.com/vishnuvardhan833199/food-app',
    demoUrl: 'https://food-app-demo.com'
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="section relative">
      {/* Background with overlay */}
      <div className="section-bg bg-projects" />
      <div className="section-overlay" />

      {/* Content */}
      <div className="section-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">
              A showcase of my work in Machine Learning, Data Science, and Web Development.
              Each project demonstrates my technical skills and problem-solving abilities.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
              >
                <Link to={`/project/${project.id}`}>
                  <div className="project-card group">
                    {/* Project Image */}
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium">View Details</span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <h3 className="text-2xl font-semibold mb-2 text-gradient">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="px-3 py-1 text-sm rounded-full glass-light text-gray-300"
                          style={{ backgroundColor: `${tech.color}20` }}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="inline-block mr-2" />
                        Code
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="inline-block mr-2" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <a
              href="https://github.com/vishnuvardhan833199"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center group"
            >
              <FaGithub className="mr-2" />
              View More on GitHub
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 