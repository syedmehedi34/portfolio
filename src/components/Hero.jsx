import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, FileDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import photo from "/my-photo.jpeg";
import { Typewriter } from "react-simple-typewriter";
import backgroundImage from "../assets/background-image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center pt-32 pb-10 relative min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              MERN Stack Developer
            </h2>
            <h3 className="text-5xl font-bold text-purple-400 mb-4">
              <Typewriter
                words={["Syed Mehedi Hasan"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={4000}
              />
            </h3>
            <p className="text-white mb-8">
              A passionate and dedicated developer from Bangladesh, committed to
              creating innovative and responsive web applications. Constantly
              learning and evolving with the latest technologies.
            </p>
            <div className="flex space-x-6 mb-8">
              <a
                href="https://linkedin.com/in/syedmehedi34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/syedmehedi34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://facebook.com/syedmehedi34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <a
                href="mailto:syedmehedi34@gmail.com"
                className="text-white hover:text-purple-300"
              >
                <Mail className="w-7 h-7" />
              </a>
              <a
                href="https://wa.me/+8801731771438"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300"
              >
                <FaWhatsapp className="w-7 h-7" />
              </a>
            </div>
            <a
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
              className="rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px] mx-auto shadow-lg object-cover border-4 border-purple-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
