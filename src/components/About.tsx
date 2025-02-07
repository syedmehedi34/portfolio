import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-50 mb-12 ">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-50 space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              As a Front-End Developer and Electronics and Telecommunication
              Engineering (ETE) student at Rajshahi University of Engineering &
              Technology (RUET), I bring a unique blend of technical expertise
              and creative problem-solving skills to web development.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              My engineering background has equipped me with strong analytical
              abilities and attention to detail, which I apply to creating
              efficient and user-friendly web applications. I'm passionate about
              bridging the gap between hardware and software, using my knowledge
              of both domains to develop innovative solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Currently focused on modern web technologies and frameworks, I
              strive to create responsive and accessible web experiences that
              make a positive impact. My goal is to continue growing as a
              developer while contributing to meaningful projects that challenge
              and inspire me.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
