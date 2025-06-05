/* eslint-disable react/no-unknown-property */
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
      <section className="bg-[#111] border-y border-white py-4 flex flex-col sm:flex-row items-center justify-around text-white uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold space-y-4 sm:space-y-0">
        <p>Fast Learner</p>
        <p>Team Work</p>
        <p>Details Master</p>
      </section>

      {/* Main Section with Fixed Background */}
      <section
        id="about"
        className="relative py-10 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2022/04/04/16/23/technology-7111754_1280.jpg")`,
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

      {/* Bottom Bar */}
      <section className="bg-black py-4 border-y border-white">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {[
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#fff"
                    d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"
                  ></path>
                  <path
                    fill="#fff"
                    d="m64 116.8l36.378-10.086l8.559-95.878H64z"
                  ></path>
                  <path
                    fill="#000"
                    d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"
                  ></path>
                  <path
                    fill="#000"
                    d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"
                  ></path>
                </svg>
              ),
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#fff"
                    d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"
                  ></path>
                  <path
                    fill="#fff"
                    d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"
                  ></path>
                  <path
                    fill="#000"
                    d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"
                  ></path>
                  <path
                    fill="#000"
                    d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"
                  ></path>
                  <path
                    fill="#000"
                    d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"
                  ></path>
                  <path
                    fill="#000"
                    d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"
                  ></path>
                </svg>
              ),
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                >
                  <path fill="#fff" d="M2 2h28v28H2z"></path>
                  <path d="M20.809 23.875a2.87 2.87 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.89 3.89 0 0 1 3.742 2.107L25 18.128A1.79 1.79 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.06 5.06 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z"></path>
                </svg>
              ),
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 128 128"
                >
                  <g fill="#fff">
                    <circle cx={64} cy={64} r={11.4}></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"></path>
                  </g>
                </svg>
              ),
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#fff"
                    d="M16 30a2.15 2.15 0 0 1-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.8 6.8 0 0 0 1.549-.7a.26.26 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.32.32 0 0 0 .157-.278V10.075a.33.33 0 0 0-.159-.283l-10.26-5.917a.32.32 0 0 0-.317 0L5.587 9.794a.33.33 0 0 0-.162.281v11.841a.32.32 0 0 0 .161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.4 4.4 0 0 1-2.363-.642l-2.697-1.547a2.17 2.17 0 0 1-1.076-1.872V10.075A2.16 2.16 0 0 1 4.661 8.2l10.261-5.924a2.25 2.25 0 0 1 2.156 0L27.338 8.2a2.17 2.17 0 0 1 1.077 1.87v11.846a2.17 2.17 0 0 1-1.077 1.872l-10.26 5.924A2.15 2.15 0 0 1 16 30"
                  ></path>
                  <path
                    fill="#fff"
                    d="M14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032c2.161 0 3.082-.489 3.082-1.636c0-.661-.261-1.152-3.62-1.481c-2.808-.278-4.544-.9-4.544-3.144c0-2.07 1.745-3.305 4.67-3.305c3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1-.295.323h-1.336a.3.3 0 0 1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875c-2.36 0-2.634.822-2.634 1.438c0 .746.324.964 3.51 1.385c3.153.417 4.651 1.007 4.651 3.223c0 2.236-1.864 3.516-5.115 3.516c-4.495.006-5.436-2.055-5.436-3.784"
                  ></path>
                </svg>
              ),
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ),
            },
          ].map(({ svg }, index) => (
            <div key={index} className="flex items-center">
              {svg}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
