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
      <section className="bg-[#111] border-y border-white py-8 flex items-center justify-around text-white uppercase text-4xl font-semibold">
        <p>Fast Learner</p>
        <p>Team Work</p>
        <p>Details Master</p>
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
        <div className="absolute inset-0 bg-cyan-950 opacity-70" />

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <div className="flex flex-col md:flex-row items-center gap-20">
              {/* Left Section: Text and Lottie Animation */}
              <div className="md:w-1/2 text-center md:text-left">
                <div className="md:w-fit w-full">
                  <Lottie
                    options={lottieOptions}
                    height={60}
                    width={140}
                    isClickToPauseDisabled
                    style={{ marginBottom: "1rem" }}
                  />
                </div>
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
                  className="inline-block rounded-full bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-700"
                >
                  My Projects
                </a>
              </div>

              {/* Right Section: Profile Image with Clip Path */}
              <motion.div
                {...slideInRight}
                className="md:w-1/2 flex justify-center"
              >
                <div className="relative h-[480px] w-[350px]">
                  {/* Green Background Layer */}
                  <div
                    className="absolute h-full w-full rounded-lg bg-cyan-800/60 shadow-lg"
                    style={{
                      clipPath: "polygon(2% 16%, 98% 7%, 75% 95%, 7% 98%)",
                    }}
                  />
                  {/* Image Container */}
                  <div
                    className="absolute h-full w-full overflow-hidden rounded-lg"
                    style={{
                      clipPath: "polygon(11% 1%, 95% 1%, 80% 92%, 11% 92%)",
                    }}
                  >
                    <img
                      src={photo}
                      alt="Mehedi Hasan"
                      className="h-full w-full object-cover opacity80 brightness-65"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg" />
                    {/* Text Overlay */}
                    <div className="absolute bottom-20 left-12 text-white">
                      <h4 className="text-xl font-bold">
                        MERN Stack Expertise
                      </h4>
                      <p className="text-sm mt-2">
                        Building scalable web apps with <br /> MongoDB,
                        Express.js, React, <br /> and Node.js
                      </p>
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
