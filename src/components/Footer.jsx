import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' }
  ];
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and short description */}
          <div className="md:col-span-1">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-bold cursor-pointer mb-4 inline-block"
            >
              <span className="text-primary">S</span>SK
            </Link>
            <p className="text-gray-400 mb-6">
              Front-End Developer specializing in creating intuitive and responsive user interfaces with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/sai-kaushik-sridhara-366624201/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://github.com/SaiKaushik121" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            
              <a 
                href="mailto:sridharakaushik121@gmail.com" 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Navigation
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Frontend Development</span></li>
              <li><span className="text-gray-400">UI/UX Design</span></li>
              <li><span className="text-gray-400">Responsive Web Design</span></li>
              <li><span className="text-gray-400">Web Application Development</span></li>
              <li><span className="text-gray-400">Performance Optimization</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-400">sridharakaushik121@gmail.com</span>
              </li>
              <li>
                <span className="text-gray-400">Fort Wayne, 46835, IN, USA</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and back to top */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Sridhara Sai Kaushik. All rights reserved.
          </p>
          
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}