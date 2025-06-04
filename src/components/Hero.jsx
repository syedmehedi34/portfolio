/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, FileDown } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import photo from "/my-photo.jpeg";
import { Typewriter } from "react-simple-typewriter";
import backgroundImage from "../assets/background-image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center pt-28 pb-10 relative min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-cyan-950 opacity-70"></div>
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
            <h3 className="text-5xl font-bold text-cyan-600 mb-4">
              <Typewriter
                words={["Syed Mehedi Hasan"]}
                // loop={false}
                // cursor
                // cursorStyle="_"
                // typeSpeed={70}
                // deleteSpeed={50}
                // delaySpeed={4000}
              />
            </h3>
            <p className="text-white mb-8 font-semibold">
              A passionate and dedicated developer from Bangladesh, committed to
              creating innovative and responsive web applications. Constantly
              learning and evolving with the latest technologies.
            </p>
            <div className="flex space-x-6 mb-8">
              {[
                {
                  href: "https://linkedin.com/in/syedmehedi34",
                  Icon: FaLinkedinIn,
                },
                { href: "https://github.com/syedmehedi34", Icon: Github },
                // {
                //   href: "https://facebook.com/syedmehedi34",
                //   Icon: FaFacebookF,
                // },
                { href: "mailto:syedmehedi34@gmail.com", Icon: Mail },
                { href: "https://wa.me/+8801731771438", Icon: FaWhatsapp },
              ].map(({ href, Icon }, index) => (
                <div
                  key={index}
                  className="border border-cyan-600 p-2.5 rounded-full transition duration-700 ease-in-out hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.8)]"
                  style={{ transitionProperty: "box-shadow, border-color" }}
                >
                  <div className="p-2.5 rounded-full bg-cyan-600 transition-colors duration-700 ease-in-out">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* <a
              href="./my_resume.pdf"
              target="_blank"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download Resume
            </a> */}
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
              className="rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px] mx-auto shadow-lg object-cover border-3 border-cyan-600"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
