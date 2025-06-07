/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import photo from "/my-photo.jpeg";
import aboutTextLottie from "../../public/aboutTextLottie.json";
import backgroundImage from "../assets/background-image.jpg";

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
      <section
        id="about"
        className="relative py-10 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Cyan Overlay */}
        <div className="absolute inset-0 bg-cyan-950 opacity-70" />

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
              {/* Left Section: Text and Lottie Animation */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="w-full flex justify-center md:justify-start">
                  <Lottie
                    options={lottieOptions}
                    height={40}
                    width={100}
                    isClickToPauseDisabled
                    style={{ marginBottom: "1rem" }}
                    className="sm:h-12 sm:w-28 md:h-14 md:w-32 lg:h-16 lg:w-36"
                  />
                </div>
                <h3 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Hey there! I'm Mehedi, a MERN Stack Developer
                </h3>
                <motion.p
                  {...slideInLeft}
                  className="mb-4 text-white text-sm sm:text-base md:text-lg"
                >
                  I specialize in building user-friendly websites using HTML,
                  CSS, JavaScript, React, and the MERN stack, turning ideas into
                  seamless digital experiences.
                </motion.p>
                <motion.p
                  {...slideInLeft}
                  transition={{ ...slideInLeft.transition, delay: 0.4 }}
                  className="mb-6 text-white text-sm sm:text-base md:text-lg"
                >
                  From auction platforms to chat apps, I love writing clean code
                  and solving challenges. When not coding, I explore new tech,
                  play sports, or spend time with family.
                </motion.p>
                <a
                  href="#projects"
                  className="inline-block rounded-full bg-cyan-600 px-4 py-2 sm:px-6 sm:py-3 text-white hover:bg-cyan-700 text-sm sm:text-base md:text-lg"
                  style={{
                    boxShadow:
                      "0 0 10px rgba(6, 182, 212, 0.4), 0 0 20px rgba(6, 182, 212, 0.5)",
                    animation: "glow 1.5s ease-in-out infinite alternate",
                  }}
                >
                  My Projects
                </a>
                <style jsx>
                  {`
                  @keyframes glow {
                    from {
                      box-shadow: 0 0 10px rgba(6, 182, 212, 0.4),
                        0 0 20px rgba(6, 182, 212, 0.5);
                    }
                    to {
                      box-shadow: 0 0 20px rgba(6, 182, 212, 0.85),
                        0 0 30px rgba(6, 182, 212, 0.5);
                    }
                  `}
                </style>
              </div>

              {/* Right Section: Profile Image with Clip Path */}
              <motion.div
                {...slideInRight}
                className="w-full md:w-1/2 flex justify-center"
              >
                <div className="relative h-80 sm:h-96 md:h-[400px] lg:h-[480px] w-64 sm:w-72 md:w-80 lg:w-[350px]">
                  {/* Cyan Background Layer */}
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
                      className="h-full w-full object-cover opacity-80 brightness-65"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg" />
                    {/* Text Overlay */}
                    <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-8 sm:left-10 md:left-12 text-white">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold">
                        MERN Stack Expertise
                      </h4>
                      <p className="text-xs sm:text-sm mt-1 sm:mt-2">
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
    </>
  );
};

export default About;
