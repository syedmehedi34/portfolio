import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../Data/ProjectsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* title  */}
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 dark:text-gray-50 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="bg-white dark:bg-gray-600 rounded-xl  shadow-lg hover:shadow-2xl transition-all duration-300 transform perspective-1000 flex flex-col overflow-hidden"
              >
                {/* project image  */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* project description body  */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-200 mb-4 text-sm ">
                      {project.description}
                    </p>

                    {/* technologies  */}
                    <div className="flex  flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{
                            scale: 1.1,
                            // rotate: [-5, 5, 0],
                            transition: { duration: 0.3 },
                          }}
                          className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* buttons  */}
                  <div className="flex space-x-4 ">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-50 hover:text-indigo-600 transition-colors duration-300 text-sm"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-50 hover:text-indigo-600 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Live Demo
                    </motion.a>
                    <div className="flex-1"></div>

                    <Link to={`/projects/${project.id}`}>
                      <motion.p
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm rounded-full hover:bg-indigo-700 transition-colors duration-300"
                      >
                        Explore
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.p>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
