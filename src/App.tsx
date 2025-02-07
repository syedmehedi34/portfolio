import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import { ThemeProvider } from "./Provider/ThemeContext";

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
