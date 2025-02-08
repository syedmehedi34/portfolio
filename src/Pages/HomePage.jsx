import About from "../components/About";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
