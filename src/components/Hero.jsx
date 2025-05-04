import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import kaushik from "../assets/kaushik.jpg"

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Text typing animation
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = "Front-End Developer";
  
  useEffect(() => {
    setIsVisible(true);
    
    const typeTimer = setTimeout(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }
    }, 100);
    
    return () => clearTimeout(typeTimer);
  }, [index]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-10 rounded-full"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-accent opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary opacity-10 rounded-full"></div>
      </div>
      
      <div className="section-container flex flex-col md:flex-row items-center z-10">
        {/* Text Content */}
        <div 
          className={`md:w-1/2 text-center md:text-left mb-10 md:mb-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Sridhara Sai Kaushik</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-6 h-8">
            <span className="text-accent">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg">
            Crafting intuitive, responsive user interfaces and delivering seamless user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-primary"
            >
              Contact Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn-outline"
            >
              View Projects
            </Link>
          </div>
        </div>
        
        {/* Hero Image */}
        <div 
          className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="relative">
            {/* Replace with your profile image */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              {/* Replace with your actual image */}
              <img 
                src= {kaushik}
                alt="Sridhara Sai Kaushik" 
                className="w-full h-full object-cover"
              />
              {/* Add a comment for the user */}
              {/* REPLACE: Add your profile picture here (recommended size: 400x400px) */}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold animate-bounce">
              <span>👋</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={500}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-primary cursor-pointer" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default Hero;