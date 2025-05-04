import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

function Education() {
  const education = [
    {
      school: "Indiana Institute of Technology",
      location: "Fort Wayne, IN, USA",
      degree: "Master of Science in Information Systems",
      period: "Jan 2024 - May 2025",
      gpa: "3.85",
      courses: ["Web Development", "Data Visualization", "Cloud Computing", "Database Management"]
    },
    {
      
      school: "Nalla Narsimha Reddy Education society's Group of Instituitions",
      location: "Hyderabad, India",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      period: "Aug 2017 - June 2021",
      gpa: "7.22",
      courses: ["Java", "MATLAB", "VLSI", "Digital Communications"]

    }
    // REPLACE: Add more education entries if needed
  ];
  
  const certifications = [
    {
      name: "React - The Complete Guide",
      issuer: "Udemy - Maximilian Schwarzmüller",
      date: "2022",
      url: "#" // REPLACE: Add certificate link
    },
    {
      name: "Python Programming",
      issuer: "Udemy",
      date: "2022",
      url: "#" // REPLACE: Add certificate link
    },
    {
      name: "API Automation Testing",
      issuer: "Pluralsight",
      date: "2021",
      url: "#" // REPLACE: Add certificate link
    }
    // REPLACE: Add more certifications if needed
  ];
  
  const awards = [
    {
      name: "Rising Star Award",
      issuer: "Capgemini",
      description: "Recognized for outstanding performance and client satisfaction on the travel insurance project."
    },
    {
      name: "Certificate of Appreciation",
      issuer: "Capgemini (Innovation Day 2021)",
      description: "Awarded for meritorious performance during the Entry Level V&V AT SDET Training Program by L&D India."
    }
    // REPLACE: Add more awards if needed
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title mb-16">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div className="animate-on-scroll">
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <FaGraduationCap className="text-primary mr-2" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div 
                key={index}
                className="mb-8 last:mb-0 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary animate-on-scroll"
              >
                <h4 className="text-lg font-bold text-primary">{edu.degree}</h4>
                <h5 className="text-md font-semibold mb-1">{edu.school}</h5>
                
                <div className="flex flex-wrap gap-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>GPA: {edu.gpa}</span>
                </div>
                
                <div className="mt-4">
                  <h6 className="font-medium mb-2">Relevant Coursework:</h6>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications & Awards */}
          <div>
            {/* Certifications */}
            <div className="mb-12 animate-on-scroll">
              <h3 className="text-xl font-bold mb-8 flex items-center">
                <FaCertificate className="text-primary mr-2" />
                Certifications
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-start animate-on-scroll"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCertificate className="text-primary" />
                    </div>
                    
                    <div className="ml-4">
                      <h4 className="font-semibold">
                        <a 
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {cert.name}
                        </a>
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Awards */}
            <div className="animate-on-scroll">
              <h3 className="text-xl font-bold mb-8 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v1h1a2 2 0 012 2v3.18a3 3 0 01-1.293 2.472l-2.363 1.97a3 3 0 01-.986.467V15h1a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-1a1 1 0 011-1h1v-2.11a3 3 0 01-.986-.467l-2.363-1.97A3 3 0 011 8.18V5a2 2 0 012-2h1V2zm6 15v-1H9v1h2zM3 8.18V5h14v3.18a1 1 0 01-.432.824l-2.363 1.97a1 1 0 01-1.16.041 2 2 0 00-2.298 0 1 1 0 01-1.16-.04l-2.363-1.97A1 1 0 013 8.18z" clipRule="evenodd" />
                </svg>
                Awards & Recognition
              </h3>
              
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-accent animate-on-scroll"
                  >
                    <h4 className="font-semibold">
                      {award.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {award.issuer}
                    </p>
                    <p className="text-sm">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;