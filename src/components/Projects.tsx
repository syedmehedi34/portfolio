import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Asset Flow [Asset Management System]",
    description:
      "AssetFlow is a web app for managing company assets, allowing HR managers to assign, track, and report on returnable and non-returnable assets. Employees can request and return assets, while the system automates notifications and subscription management for improved efficiency.",
    image:
      "https://camo.githubusercontent.com/afbe401a21f67e178ee282e20472c69fbe4c189acc9d9bfc86187a628f96b439/68747470733a2f2f692e6962622e636f2e636f6d2f4d786b6e3376526d2f61737365742d666c6f772e706e67",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Stripe",
    ],
    github: "https://github.com/syedmehedi34/asset-flow",
    live: "https://asset-flow.netlify.app/",
  },
  {
    title: "Next Blog - A Blogging website",
    description:
      "Next Blog is a modern, fully-responsive blogging platform built with React, Firebase, and MongoDB. It features user authentication, wish-list management, and a commenting system. Admins can manage content, and the site is optimised for mobile, tablet, and desktop devices.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Firebase",
    ],
    github: "https://github.com/syedmehedi34/next-blog",
    live: "https://your-next-blog.netlify.app/",
  },
  {
    title: "Gaming Groove : A Game Review Application",
    description:
      "Gaming Groove is a game review app where users can browse, share, and manage game reviews. It features secure login, user dashboards, and a watchlist. Built with React, Firebase, and MongoDB, it offers a responsive and easy-to-use platform for gaming enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Firebase",
    ],
    github: "https://github.com/syedmehedi34/gaming-groove-client",
    live: "https://gaming-groove.surge.sh/",
  },
];

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
                className="bg-white dark:bg-gray-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform perspective-1000"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-600 dark:text-gray-200 mb-4 text-sm lineclamp-3
                  "
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  <div className="flex space-x-4 ">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-50 hover:text-indigo-600 transition-colors duration-300"
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
