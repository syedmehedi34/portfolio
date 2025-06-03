import { useEffect, useState } from "react";
import backgroundImage from "../assets/background-image.jpg";

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS"],
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "ExpressJS", "MongoDB", "Firebase"],
    },
    {
      title: "Tools",
      skills: ["Socket.IO", "GitHub", "VS Code", "Git"],
    },
    {
      title: "State Management",
      skills: ["Redux"],
    },
  ];

  // Handle prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPaused(true);
    }
  }, []);

  return (
    <section
      id="skills"
      className="py-20 relative min-h-screen text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="skills-heading"
    >
      <div className="absolute inset-0 bg-purple-900 opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2
          id="skills-heading"
          className="text-4xl font-bold mb-12 text-indigo-100"
        >
          My Skills
        </h2>
        <p className="mb-8 text-lg text-indigo-200 max-w-2xl mx-auto">
          I craft dynamic, scalable web apps with the MERN stack, all showcased
          in my portfolio projects.
        </p>
        <div className="overflow-hidden">
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: isPaused ? "none" : "marquee 15s linear infinite",
              willChange: "transform",
              display: "flex",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = isPaused
                ? "paused"
                : "running")
            }
            role="marquee"
            aria-live="off"
          >
            {skillCategories.map((category, index) => (
              <div
                key={`${category.title}-${index}`}
                className="flex-shrink-0 mx-4 w-64 sm:w-72 lg:w-80"
              >
                <div className="bg-indigo-900 bg-opacity-80 rounded-lg p-6 hover:bg-opacity-90 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    {category.title}
                  </h3>
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label={`${category.title} skills`}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="px-3 py-1 bg-indigo-700 bg-opacity-70 rounded-md text-sm text-indigo-100"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            {skillCategories.map((category, index) => (
              <div
                key={`duplicate-${category.title}-${index}`}
                className="flex-shrink-0 mx-4 w-64 sm:w-72 lg:w-80"
              >
                <div className="bg-indigo-900 bg-opacity-80 rounded-lg p-6 hover:bg-opacity-90 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    {category.title}
                  </h3>
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label={`${category.title} skills`}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="px-3 py-1 bg-indigo-700 bg-opacity-70 rounded-md text-sm text-indigo-100"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 640px) {
          .w-64 {
            width: 80%;
          }
          div[role="marquee"] {
            animation-duration: 10s;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .w-72 {
            width: 48%;
          }
          div[role="marquee"] {
            animation-duration: 12s;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
