import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { ThemeProvider } from "./Provider/ThemeContext.js";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ThemeProvider>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
