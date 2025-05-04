import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      company: "Capgemini | Zurich Insurance",
      title: "Senior Software Engineer",
      location: "Hyderabad, India",
      period: "Sept 2021 - Dec 2023",
      description: [
        "Developed modern UI for Zurich's Travel Insurance application with Azure B2C for authentication.",
        "Created user-friendly 4-step flow: Travel Details, Plan Selection, User Info, and Payment.",
        "Designed and integrated policy portfolio where users can view, modify, cancel, or claim policies.",
        "Applied reusable components, custom hooks, and responsive design using React, HTML5, and CSS3.",
        "Collaborated with backend MuleSoft team to align frontend APIs with INSIS insurance plan data.",
        "Also contributed to Japan's Earthquake Insurance platform, co-branded with Docomo, ensuring seamless integration within Docomo's native app.",
      ],
      technologies: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Azure B2C",
        "RESTful APIs",
      ],
    },

    {
      company: "Indiana Tech",
      title: "Summer Student Employee",
      period: "May 2024 - Aug 2024",
      description: [
        "Assisted with technology-related questions via phone and walk-ins, ensuring courteous and friendly service.",

        "Documented issues in Help Desk tracking software and provided remote troubleshooting.",

        "Performed basic computer maintenance and software installations across campus.",

        "Created documentation for problem solutions and contributed to the user self-help knowledge base.",

        "Participated in training sessions to enhance IT skills.",

        "Collaborated with team members to ensure efficient completion of projects.",
      ],
      technologies: [
        "Remote Troubleshooting",
        "PC Hardware Maintenance",
        "Software Installation & Configuration",
        "Technical Documentation & Knowledge-base Authoring",
      ],
    },
    // REPLACE: Add more work experiences if you have any
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title mb-16">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 animate-on-scroll ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-primary flex items-center justify-center z-10">
                <FaBriefcase className="text-primary" />
              </div>

              {/* Content */}
              <div
                className={`md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all">
                  <h3 className="text-xl font-bold text-primary">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>

                  <div className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400 space-x-4">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul
                    className={`space-y-2 mb-4 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-700 dark:text-gray-300 flex items-start"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}

          {/* Add more experiences indicator */}
          <div className="flex justify-center mt-10">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 animate-on-scroll">
              <p className="text-gray-500 dark:text-gray-400 italic text-center">
                {/* REPLACE: Update or remove this section based on your experience */}
                I'm always looking to expand my professional experience. Let's
                connect and discuss opportunities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
