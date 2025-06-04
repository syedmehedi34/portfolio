import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import backgroundImage from "../assets/background-image.jpg";

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);

  const skillsData = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          logo: "https://api.iconify.design/vscode-icons:file-type-html.svg?color=%23ffffff",
        },
        {
          name: "CSS",
          logo: "https://api.iconify.design/vscode-icons:file-type-css.svg?color=%23ffffff",
        },
        {
          name: "JavaScript",
          logo: "https://api.iconify.design/vscode-icons:file-type-js-official.svg?color=%23ffffff",
        },
        {
          name: "ReactJS",
          logo: "https://api.iconify.design/vscode-icons:file-type-reactjs.svg?color=%23ffffff",
        },
        {
          name: "TailwindCSS",
          logo: "https://api.iconify.design/vscode-icons:file-type-tailwind.svg?color=%23ffffff",
        },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        {
          name: "Node.js",
          logo: "https://api.iconify.design/vscode-icons:file-type-node.svg?color=%23ffffff",
        },
        {
          name: "ExpressJS",
          logo: "https://api.iconify.design/simple-icons:express.svg?color=%23ffffff",
        },
        {
          name: "MongoDB",
          logo: "https://api.iconify.design/vscode-icons:file-type-mongo.svg?color=%23ffffff",
        },
        {
          name: "Firebase",
          logo: "https://api.iconify.design/simple-icons:firebase.svg?color=%23ffffff",
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Socket.IO",
          logo: "https://api.iconify.design/simple-icons:socketdotio.svg?color=%23ffffff",
        },
        {
          name: "GitHub",
          logo: "https://api.iconify.design/simple-icons:github.svg?color=%23ffffff",
        },
        {
          name: "VS Code",
          logo: "https://api.iconify.design/vscode-icons:file-type-vscode.svg?color=%23ffffff",
        },
        {
          name: "Git",
          logo: "https://api.iconify.design/simple-icons:git.svg?color=%23ffffff",
        },
      ],
    },
    {
      title: "State Management",
      skills: [
        {
          name: "Context API",
          logo: "https://api.iconify.design/vscode-icons:file-type-reactjs.svg?color=%23ffffff", // No distinct Context API logo; reusing React logo
        },
        {
          name: "Redux",
          logo: "https://api.iconify.design/simple-icons:redux.svg?color=%23ffffff",
        },
      ],
    },
  ];
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsPaused(mediaQuery.matches);
    const handleChange = (e) => setIsPaused(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-16 text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="skills-heading"
    >
      <div className="absolute inset-0 bg-blue-950/70"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="skills-heading"
          className="mb-8 text-3xl font-bold text-indigo-100"
        >
          My Skills
        </h2>
        <p className="mb-10 max-w-xl mx-auto text-base text-indigo-200">
          Crafting dynamic, scalable web apps with the MERN stack, showcased in
          my portfolio.
        </p>
        <Marquee speed={20} pauseOnHover gradient={false} play={!isPaused}>
          {skillsData.map((category, index) => (
            <div
              key={`${category.title}-${index}`}
              className="max-w-[320px] mx-4"
            >
              <div className="bg-cyan-100/5 px-8 py-6 rounded-xl backdrop-blur-xs h-62 border border-cyan-100/20">
                <h3 className="mb-4 text-[18px] font-bold text-white text-left">
                  {category.title}
                </h3>
                <ul
                  className="flex flex-wrap space-x-3 space-y-2"
                  aria-label={`${category.title} skills`}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center  space-x-1.5 pl-2 pr-3 text-sm text-white h-11 rounded-lg bg-cyan-100/10 hover:bg-cyan-100/20 transition-colors duration-200"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="h-7 w-7 object-contain"
                        loading="lazy"
                      />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
