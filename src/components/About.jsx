import { FaCode, FaLaptopCode, FaMobile } from 'react-icons/fa';
import kaushik from "../assets/kaushik.jpg"
import resume from "/Sridhara_Sai_Kaushik_updated_resume.pdf"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title mb-16">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* About image */}
          <div className="md:w-2/5 animate-on-scroll">
            <div className="relative">
              {/* Replace with your about image */}
              <div className="w-full h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={kaushik} 
                  alt="About Sridhara" 
                  className="w-full h-full object-cover"
                />
                {/* REPLACE: Add a professional photo of yourself here */}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-lg transform rotate-6 z-0"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-lg transform -rotate-6 z-0"></div>
            </div>
          </div>
          
          {/* About content */}
          <div className="md:w-3/5">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">Front-End Developer & Full-Stack Enthusiast</h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Versatile Front-End Developer with a solid background in React, JavaScript, and web technologies. 
                Known for crafting intuitive, responsive UIs and delivering seamless user experiences. 
                I'm a full-stack enthusiast who blends development and testing to deliver production-ready solutions.
              </p>
              
              {/* REPLACE: Add your personal bio here. Talk about your journey, passion for web development, and what drives you */}
              
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Currently seeking new opportunities to contribute with my real-world development skills and gain 
                hands-on experience in modern web application architecture.
              </p>
            </div>
            
            {/* Services/Specialties */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger-animation">
              <div className="animate-on-scroll p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all">
                <div className="text-primary text-3xl mb-3">
                  <FaCode />
                </div>
                <h4 className="font-bold text-lg mb-2">Frontend Development</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Modern, responsive UIs with React, JavaScript, and cutting-edge web technologies.
                </p>
              </div>
              
              <div className="animate-on-scroll p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all">
                <div className="text-primary text-3xl mb-3">
                  <FaLaptopCode />
                </div>
                <h4 className="font-bold text-lg mb-2">UI/UX Design</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Creating intuitive and visually appealing interfaces that deliver exceptional user experiences.
                </p>
              </div>
              
              <div className="animate-on-scroll p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all">
                <div className="text-primary text-3xl mb-3">
                  <FaMobile />
                </div>
                <h4 className="font-bold text-lg mb-2">Responsive Design</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Ensuring applications work flawlessly across all devices and screen sizes.
                </p>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="mt-10 animate-on-scroll">
              <a 
                href= {resume} 
                className="btn-primary"
                download="Sridhara_Sai_Kaushik_Resume.pdf"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              {/* REPLACE: Add link to your downloadable resume */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

