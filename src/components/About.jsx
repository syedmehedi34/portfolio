/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import photo from "/my-photo.jpeg";
import aboutTextLottie from "../../public/aboutTextLottie.json";

// Animation settings for smooth transitions
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.7, ease: "easeOut" },
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false },
  transition: { duration: 0.5 },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false },
  transition: { duration: 0.5 },
};

const About = () => {
  // Lottie animation options
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutTextLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* Top Bar */}
      <section className="bg-black py-4 border-y border-white">
        <div className="text-center text-white text-lg font-semibold">
          About Mehedi
        </div>
      </section>

      {/* Main Section with Fixed Background */}
      <section
        id="about"
        className="relative min-h-screen py-16 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2022/04/04/16/23/technology-7111754_1280.jpg")`,
        }}
      >
        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-purple-900 opacity-70" />

        {/* Decorative SVG Waves */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 1440 800"
          >
            <path
              d="M0,400 C200,600 400,200 600,400 C800,600 1000,200 1200,400 C1400,600 1600,200 1440,400 L1440,800 L0,800 Z"
              fill="none"
              stroke="#8a4af3"
              strokeWidth="2"
            />
            <path
              d="M0,300 C150,500 350,100 550,300 C750,500 950,100 1150,300 C1350,500 1550,100 1440,300 L1440,800 L0,800 Z"
              fill="none"
              stroke="#8a4af3"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left Section: Text and Lottie Animation */}
              <div className="md:w-1/2 text-center md:text-left">
                <Lottie
                  options={lottieOptions}
                  height={60}
                  width={140}
                  isClickToPauseDisabled
                  style={{ marginBottom: "1rem" }}
                />
                <h3 className="mb-4 text-3xl md:text-4xl font-bold text-white">
                  Hey there! I'm Mehedi, a MERN Stack Developer
                </h3>
                <motion.p {...slideInLeft} className="mb-4 text-white">
                  I specialize in building user-friendly websites using HTML,
                  CSS, JavaScript, React, and the MERN stack, turning ideas into
                  seamless digital experiences.
                </motion.p>
                <motion.p
                  {...slideInLeft}
                  transition={{ ...slideInLeft.transition, delay: 0.4 }}
                  className="mb-6 text-white"
                >
                  From auction platforms to chat apps, I love writing clean code
                  and solving challenges. When not coding, I explore new tech,
                  play sports, or spend time with family.
                </motion.p>
                <a
                  href="#projects"
                  className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
                >
                  My Projects
                </a>
              </div>

              {/* Right Section: Profile Image with Clip Path */}
              <motion.div
                {...slideInRight}
                className="md:w-1/2 flex justify-center"
              >
                <div className="relative h-96 w-72">
                  {/* Green Background Layer */}
                  <div
                    className="absolute h-full w-full rounded-lg bg-green-500 shadow-lg"
                    style={{
                      clipPath: "polygon(0 5%, 85% 0%, 75% 95%, 5% 100%)",
                    }}
                  />
                  {/* Image Container */}
                  <div
                    className="absolute h-full w-full overflow-hidden rounded-lg"
                    style={{
                      clipPath: "polygon(5% 10%, 80% 5%, 70% 90%, 10% 95%)",
                    }}
                  >
                    <img
                      src={photo}
                      alt="Mehedi Hasan"
                      className="h-full w-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg" />
                    {/* Text Overlay */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold">
                        MERN Stack Expertise
                      </h4>
                      <p className="text-sm">Scalable web apps with MERN</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="bg-black py-4 border-y border-white">
        <div className="text-center text-white text-lg font-semibold">
          Mehedi Hasan
        </div>
      </section>
    </>
  );
};

export default About;
