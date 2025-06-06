import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../Data/ProjectsData";
import backgroundImage from "../assets/background-image.jpg";

const Projects = () => {
  return (
    <>
      {/* top section  */}
      <section className="border-y border-y-white bg-black py-5 text-center text-white">
        Syed Mehedi Hasan © 2024. All rights reserved.
      </section>

      {/* projects section  */}
      <section
        id="projects"
        className="relative py-24 text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="projects-heading"
      >
        <div className="absolute inset-0 bg-blue-950/70"></div>

        {/* main content  */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2
            id="projects-heading"
            className="text-5xl font-extrabold text-center text-indigo-100 mb-20 tracking-tight"
          >
            My Projects
          </h2>

          {/* Projects Single Column */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cyan-50/10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-cyan-100/20 backdrop-blur-sm max-w-6xl mx-auto p-8 h-[435px]"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Content Section (Left) */}
                  <div className="pr-8 flex-1 flex flex-col">
                    <h3 className="text-3xl font-bold text-white mb-5">
                      {project.title}
                    </h3>
                    <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-5 py-2 bg-cyan-100/10 dark:bg-cyan-900/20 text-indigo-100 rounded-full text-sm font-semibold tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-200 hover:text-indigo-400 text-base font-medium transition-colors duration-200"
                      >
                        <Github className="w-6 h-6 mr-2" />
                        View Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-200 hover:text-indigo-400 text-base font-medium transition-colors duration-200"
                      >
                        <ExternalLink className="w-6 h-6 mr-2" />
                        Live Demo
                      </a>
                      <div className="flex-1" />
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white text-base font-semibold rounded-lg hover:bg-indigo-500 transition-colors duration-200 shadow-md"
                      >
                        Explore Project
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Scrollable Project Image (Right) */}
                  {/* <div className="lg:w-1/3 w-full h-[368px] overflow-y-auto rounded-t-lg rounded-b-xs  scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-cyan-100/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </div> */}
                  {/* Browser-Style Project Website Preview (Right) */}
                  <div className="lg:w-1/3 w-full h-[365px] rounded-t-lg rounded-b-xs border border-cyan-100/20 bg-gray-900">
                    {/* Browser Header */}
                    <div className="flex items-center px-3 py-2 bg-gray-800 border-b border-cyan-100/20">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 mx-4 px-3 py-1 bg-gray-700 text-indigo-200 text-sm rounded">
                        {project.live}
                      </div>
                    </div>
                    {/* Scrollable Website Screenshot */}
                    <div className="h-[325px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-cyan-100/10">
                      {/* <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      > */}
                      <img
                        src={project.image} // Website screenshot
                        alt={`${project.title} website preview`}
                        className="w-full h-auto object-cover transition-opacity duration-200"
                      />
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
