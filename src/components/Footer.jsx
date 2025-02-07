import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Syed Mehedi Hasan</h3>
            <p className="text-gray-400">Front-End Developer & ETE Student</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/syedmehedi34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/syedmehedi34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#1559c2]"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/syedmehedi34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#084b8e]"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:syedmehedi34@gmail.com"
                className="text-[#EA4335] hover:text-[#d33426]"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Syed Mehedi Hasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
