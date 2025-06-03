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
          logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
        },
        {
          name: "CSS",
          logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
        },
        {
          name: "TailwindCSS",
          logo: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
        },
        {
          name: "JavaScript",
          logo: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
        },
        {
          name: "ReactJS",
          logo: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
        },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        {
          name: "Node.js",
          logo: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
        },
        {
          name: "ExpressJS",
          logo: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
        },
        {
          name: "MongoDB",
          logo: "https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000",
        },
        {
          name: "Firebase",
          logo: "https://img.icons8.com/?size=100&id=ROMfFZ1tMhpk&format=png&color=000000",
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Socket.IO",
          logo: "https://images.icon-icons.com/2389/PNG/512/socket_io_logo_icon_144874.png",
        },
        {
          name: "GitHub",
          logo: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
        },
        {
          name: "VS Code",
          logo: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
        },
        {
          name: "Git",
          logo: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
        },
      ],
    },
    {
      title: "State Management",
      skills: [
        {
          name: "Context API",
          logo: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
        },
        {
          name: "Redux",
          logo: "https://img.icons8.com/?size=100&id=3VGtaw5gCc8T&format=png&color=000000",
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
              className="mx-3 w-60 sm:w-64 lg:w-72"
            >
              <div className="bg-indigo-900/80 p-5 rounded-lg shadow-md hover:bg-indigo-900/90 transition-all duration-300">
                <h3 className="mb-3 text-lg font-semibold text-indigo-100">
                  {category.title}
                </h3>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${category.title} skills`}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center space-x-1.5 rounded-md bg-indigo-800/90 px-2 py-1 text-xs text-indigo-100"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="h-4 w-4 object-contain"
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
