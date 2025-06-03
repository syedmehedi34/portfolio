/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import photo from "/my-photo.jpeg";
import aboutTextLottie from "../../public/aboutTextLottie.json";

const About = () => {
  return (
    <>
      <section className="border-b-1 border-t-1 border-white bg-black">
        <div className="text-center">Mehedi</div>
      </section>
      <section
        id="about"
        className="py-20 relative min-h-screen"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2022/04/04/16/23/technology-7111754_1280.jpg"), linear-gradient(135deg, #2b0a4d 0%, #1a0633 100%)`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover, cover",
          backgroundRepeat: "repeat, no-repeat",
        }}
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M0,400 C200,600 400,200 600,400 C800,600 1000,200 1200,400 C1400,600 1600,200 1440,400 L1440,800 L0,800 Z"
              fill="none"
              stroke="#8a4af3"
              strokeWidth="2"
              opacity="0.2"
            />
            <path
              d="M0,300 C150,500 350,100 550,300 C750,500 950,100 1150,300 C1350,500 1550,100 1440,300 L1440,800 L0,800 Z"
              fill="none"
              stroke="#8a4af3"
              strokeWidth="2"
              opacity="0.2"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-lg font-semibold text-cyan-400 mb-2">
                  ABOUT
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Hey there! I'm Jasmin, a MERN stack Developer from Bangladesh
                </h3>
                <div className="text-white space-y-4 text-sm md:text-base">
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I specialize in building vibrant, user-friendly websites. I
                    am proficient in HTML, CSS, JavaScript, React, and the MERN
                    stack, turning ideas into seamless digital experiences.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    From real-time auction platforms to dynamic chat apps, I
                    thrive on crafting clean code and solving tricky bugs. When
                    I'm not coding, you'll find me diving into new tech, playing
                    sports, or chilling with family. Let's create something
                    awesome!
                  </motion.p>
                </div>
                <a
                  href="#projects"
                  className="inline-block mt-6 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-300"
                >
                  My Projects
                </a>
              </div>
              <div className="md:w-1/2 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative bg-black p-4 rounded-lg shadow-lg"
                  style={{
                    width: "300px",
                    height: "400px",
                    clipPath: "polygon(0 10%, 80% 0%, 71% 100%, 11% 100%)",
                  }}
                >
                  <img
                    src={photo}
                    alt="Jasmin Ara Mim"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-semibold">
                      MERN Stack Expertise
                    </h4>
                    <p className="text-sm">
                      Building scalable web apps with MongoDB, Express.js,
                      React, and Node.js
                    </p>
                    <p className="text-sm">MERN-STACK PRO</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
