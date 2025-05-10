import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, FileDown } from "lucide-react"; // Added Phone icon
import { FaWhatsapp } from "react-icons/fa6";

import photo from "/my-photo.jpeg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center pt-32 pb-10 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Hi, I&apos;m
              <span className="text-indigo-600">
                <Typewriter
                  words={["  Syed Mehedi Hasan"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={4000}
                />
              </span>
            </h2>
            <h3 className="text-2xl text-gray-700 mb-6 dark:text-gray-50">
              Front-End Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-50 mb-8">
              Electronics and Telecommunication Engineering student at RUET,
              passionate about creating beautiful and functional web
              experiences.
            </p>
            <div className="flex space-x-6 mb-8">
              <a
                href="https://github.com/syedmehedi34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#333]"
              >
                <Github className="w-7 h-7 dark:text-gray-50" />
              </a>
              <a
                href="https://facebook.com/syedmehedi34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#1559c2]"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/syedmehedi34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#084b8e]"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="mailto:syedmehedi34@gmail.com"
                className="text-[#EA4335] hover:text-[#d33426]"
              >
                <Mail className="w-7 h-7" />
              </a>
              <a
                href="https://wa.me/+8801731771438"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#20b355]"
              >
                <FaWhatsapp className="w-7 h-7" />
              </a>
            </div>
            <a
              // href="https://drive.google.com/uc?export=download&id=1z5w7Ya-Eyg2ykrAuwWx16Y_5QeRf7XLD"
              href="./my_resume.pdf"
              target="_blank"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src={photo}
              alt="Syed Mehedi Hasan"
              className="rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px] mx-auto shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
