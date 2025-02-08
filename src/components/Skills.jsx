import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      },
      {
        name: "CSS3",
        icon: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
      },
      {
        name: "Tailwind CSS",
        icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      },
      {
        name: "JavaScript",
        icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      },
      {
        name: "React",
        icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
      },
      {
        name: "Next.js",
        icon: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000",
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      },
      {
        name: "Express.js",
        icon: "https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000",
      },
      {
        name: "MongoDB",
        icon: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
      },
    ],
  },
  {
    title: "Engineering Tools",
    skills: [
      {
        name: "C",
        icon: "https://img.icons8.com/?size=100&id=shQTXiDQiQVR&format=png&color=000000",
      },
      {
        name: "MATLAB",
        icon: "https://img.icons8.com/?size=100&id=r5Y16PcDkoWI&format=png&color=000000",
      },
      {
        name: "PCB Design",
        icon: "https://img.icons8.com/?size=100&id=Y3elobI6Goaq&format=png&color=000000",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-50 mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-gray-100 mb-6">
                  {category.title}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, -5, 0],
                        transition: {
                          duration: 0.3,
                          rotate: {
                            duration: 0.5,
                            ease: "easeInOut",
                          },
                        },
                      }}
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      <div className="text-indigo-600 transform transition-all duration-300">
                        <img src={skill.icon} alt="" className="w-10 " />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-100 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
