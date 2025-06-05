import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X, FileDown, Sparkle } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "skills",
        "education",
        "projects",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "contact",
  ];

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyan-950/30 backdrop-blur-md border-y border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RouterLink to="/">
              <h1 className="relative text-3xl text-cyan-600">
                <span className="fugaz-one-regular">Mehedi</span>
                <span className="absolute -top-2 -right-[20px]">
                  <Sparkle size={18} className="text-cyan-600" />
                </span>
              </h1>
            </RouterLink>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item} className="relative">
                  <ScrollLink
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`text-white hover:text-cyan-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer capitalize transition-colors duration-300 ${
                      activeSection === item ? "text-cyan-600" : ""
                    }`}
                  >
                    {item}
                  </ScrollLink>
                  {activeSection === item && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={underlineVariants}
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-600 origin-left"
                    />
                  )}
                </div>
              ))}
              <a
                href="./my_resume.pdf"
                target="_blank"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Resume
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cyan-950/30 backdrop-blur-md border border-white/20 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item} className="relative">
                <ScrollLink
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer capitalize ${
                    activeSection === item
                      ? "text-cyan-600"
                      : "text-white hover:text-cyan-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  {activeSection === item && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={underlineVariants}
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-600 origin-left"
                    />
                  )}
                </ScrollLink>
              </div>
            ))}
            <a
              href="./my_resume.pdf"
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 w-full justify-center"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
