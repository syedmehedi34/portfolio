import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, FileDown, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../Provider/ThemeContext";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-lg"
          : "bg-transparent dark:bg-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="relative text-3xl text-indigo-600 dark:text-gray-50">
              <span className="fugaz-one-regular ">Mehedi</span>
              <span className="absolute -top-2 -right-[20px]">
                <Sparkle size={18} />
              </span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer capitalize dark:text-[#E0E0E0] hover:font-bold"
                >
                  {item}
                </Link>
              ))}
              <a
                href="https://drive.google.com/uc?export=download&id=1z5w7Ya-Eyg2ykrAuwWx16Y_5QeRf7XLD"
                // target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full justify-center"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-indigo-600  block px-3 py-2 rounded-md text-base font-medium cursor-pointer capitalize "
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <a
              href="https://drive.google.com/uc?export=download&id=1z5w7Ya-Eyg2ykrAuwWx16Y_5QeRf7XLD"
              // target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full justify-center"
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
