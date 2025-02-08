import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree:
      "Bachelor of Science in Electronics and Telecommunication Engineering",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    year: "2022 - Present",
    description:
      "Currently pursuing my bachelor's degree with a focus on electronics and telecommunications systems.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Khulna Public College",
    year: "2018 - 2020",
    description:
      "Completed HSC with excellent academic performance in science group.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Bangladesh Noubahini School & College, Khulna",
    year: "2016 - 2018",
    description: "Completed SSC with distinction in science group.",
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

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
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
            Education
          </motion.h2>
          <div className="space-y-8 ">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="flex gap-4 bg-gradient-to-r from-gray-50 to-white  p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-600"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <GraduationCap className="w-6 h-6 text-indigo-600" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-500 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-200 mt-1">
                    {edu.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-200 mt-2">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
