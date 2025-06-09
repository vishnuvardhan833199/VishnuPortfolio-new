import { motion } from 'framer-motion';
import { Github, Globe, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "California House Price Prediction",
      description: "Implemented a machine learning model using Ridge Regression to predict house prices in California, with a user-friendly Flask web interface for real-time predictions.",
      technologies: ["Python", "Scikit-learn", "Flask", "Pandas", "Numpy"],
      github: "https://github.com/vishnuvardhan833199/California_House_Prediction",
      image: "/projects/house-price.jpg",
      details: [
        "Implemented data preprocessing and feature engineering on the California housing dataset",
        "Trained a Ridge Regression model for price prediction with high accuracy",
        "Evaluated model performance using metrics like RMSE and R²",
        "Deployed the trained model on localhost using Flask and .pkl files",
        "Created an interactive web interface for dynamic user input and predictions"
      ]
    },
    {
      title: "Food App Interface",
      description: "A modern full-stack food delivery application built with React.js and Tailwind CSS, featuring a clean and responsive design with seamless user experience.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Node.js"],
      github: "https://github.com/vishnuvardhan833199/foodie-xpress-ui",
      live: "https://food-app-demo.vercel.app",
      image: "/projects/food-app.jpg",
      details: [
        "Developed a dynamic full-stack food delivery application",
        "Implemented user login, food browsing, cart, and order placement features",
        "Built with React.js and modern UI elements",
        "Designed responsive layouts powered by Tailwind CSS",
        "Created reusable components and implemented client-side routing"
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
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300 text-lg">
            A showcase of my technical projects in Machine Learning and Web Development
          </p>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 p-6"
            >
              {/* Project Image */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="relative z-20">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Details */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-2 right-2 p-2 bg-indigo-500/20 rounded-full text-indigo-400"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/vishnuvardhan833199"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-full text-white font-medium"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 