import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X, FileDown, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../Provider/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all sections
      const sections = [
        "home",
        "about",
        "skills",
        "education",
        "projects",
        "contact",
      ];

      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some buffer for better UX)
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
        isScrolled ? "bg-white dark:bg-gray-800 shadow-lg" : "bg-transparent"
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
              <h1 className="relative text-3xl text-indigo-600 dark:text-gray-50">
                <span className="fugaz-one-regular ">Mehedi</span>

                <span className="absolute -top-2 -right-[20px]">
                  <Sparkle size={18} />
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
                    className={`text-gray-700 dark:text-gray-100 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer capitalize transition-colors duration-300 ${
                      activeSection === item ? "text-indigo-600" : ""
                    }`}
                  >
                    {item}
                  </ScrollLink>
                  {activeSection === item && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={underlineVariants}
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-indigo-600 origin-left"
                    />
                  )}
                </div>
              ))}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Resume
              </a>

              {/* // */}
              <div className="ml-3">
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    className="theme-controller"
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                  />

                  <p className="swap-off h-10 w-10 fill-current flex items-center justify-center text-black">
                    <MdSunny size={28} />
                  </p>
                  <p className="swap-on h-10 w-10 fill-current flex items-center justify-center text-white">
                    <FaMoon size={25} />
                  </p>
                </label>
              </div>
              {/* // */}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
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

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-transparent dark:bg-gray-800 shadow-2xl">
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
                      ? "text-indigo-600"
                      : "text-gray-700 dark:text-gray-100 hover:text-indigo-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  {activeSection === item && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={underlineVariants}
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-indigo-600 origin-left"
                    />
                  )}
                </ScrollLink>
              </div>
            ))}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full justify-center"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Resume
            </a>
            {/* // */}
            <div className="ml-3 flex items-center mt-3 gap-3">
              <p>Dark Mode </p>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />

                <p className="swap-off h-10 w-10 fill-current flex items-center justify-center text-black">
                  <MdSunny size={26} />
                </p>
                <p className="swap-on h-10 w-10 fill-current flex items-center justify-center text-white">
                  <FaMoon size={22} />
                </p>
              </label>
            </div>
            {/* // */}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
