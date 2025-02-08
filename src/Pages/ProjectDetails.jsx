import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Layout,
} from "lucide-react";
import { projects } from "../Data/ProjectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Project not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-500 text-gray-700 dark:text-gray-50 rounded-lg hover:bg-gray-200 transition-colors duration-300 dark:hover:bg-gray-600 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-300 text-indigo-600 rounded-full text-sm dark:text-gray-900 font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View Code
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* main tech stack  */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-600 p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Layout className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                Main Tech Stack
              </h2>
            </div>
            <ul className="space-y-3">
              {project.mainTechStack.map((tech, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span className=" dark:text-gray-200">{tech}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* key features  */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-600 p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                Key Features
              </h2>
            </div>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span className="dark:text-gray-200">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* challenge faced  */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-600 p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Lightbulb className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                Challenges Faced
              </h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="dark:text-gray-200">{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Future improvement  */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white dark:bg-gray-600 p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                Future Improvements
              </h2>
            </div>
            <ul className="space-y-3">
              {project.improvements.map((improvement, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="dark:text-gray-200">{improvement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
