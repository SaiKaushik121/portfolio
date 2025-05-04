import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiRedux, SiMaterialdesign, SiTailwindcss, SiBootstrap, SiJest, SiSelenium } from 'react-icons/si';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "JavaScript (ES6+)", icon: <FaJs />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
        { name: "Redux", icon: <SiRedux />, level: 80 },
      ]
    },
    {
      title: "UI Libraries",
      skills: [
        { name: "Material-UI", icon: <SiMaterialdesign />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
        { name: "Bootstrap", icon: <SiBootstrap />, level: 85 },
      ]
    },
    {
      title: "Testing & QA",
      skills: [
        { name: "Selenium", icon: <SiSelenium />, level: 75 },
        { name: "Jest", icon: <SiJest />, level: 70 },
        { name: "React Testing Library", icon: <FaReact />, level: 75 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "Node.js", icon: <FaNodeJs />, level: 70 },
        { name: "API Integration", icon: null, level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title mb-16">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-on-scroll">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-1 bg-accent rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="animate-on-scroll">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        {skill.icon && (
                          <span className="text-primary text-2xl mr-2">
                            {skill.icon}
                          </span>
                        )}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%`, transitionDelay: `${skillIndex * 100}ms` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Languages & Soft Skills */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-accent rounded-full mr-3"></span>
              Programming Languages
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {["Java", "Python", "C"].map((lang, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-sm border border-gray-200 dark:border-gray-600 text-sm font-medium hover:border-primary dark:hover:border-primary transition-all"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-accent rounded-full mr-3"></span>
              Soft Skills
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {[
                "Problem-solving", 
                "Team collaboration", 
                "Agile/Scrum experience",
                "Communication",
                "Critical thinking",
                "Attention to detail"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-sm border border-gray-200 dark:border-gray-600 text-sm font-medium hover:border-primary dark:hover:border-primary transition-all"
                >
                  {skill}
                </span>
              ))}
              
              {/* REPLACE: Add or modify soft skills as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;