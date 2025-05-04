import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiVite } from "react-icons/si";
import  tictactoeimg  from "../assets/tictactoe.png";
import queuemgmt from "../assets/queuemgmt.png";

function Projects() {
  // this below state is for adding fiters for the projects see the project filter code below(commented one)
  //const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Queue Ease",
      description:
        "Web-based queue management solution with user ticket booking, service provider dashboard, and real-time queue updates.",
      image: queuemgmt, // Replace with project image
      tags: ["web-app", "full-stack"],
      technologies: [
        { name: "React.js (Vite)", icon: <SiVite /> },
        { name: "Django REST Framework", icon: <SiDjango /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
      links: {
        github: "https://github.com/SaiKaushik121/VQM", // REPLACE: Add your GitHub repo link
        //live: "#" // REPLACE: Add your live demo link if available
      },
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Interactive Tic-tac-toe application where 2 users can play together, featuring state management, components and Context API.",
      image: tictactoeimg, // Replace with project image
      tags: ["web-app", "frontend"],
      technologies: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "State Management", icon: null },
        { name: "Context API", icon: null },
      ],
      links: {
        github: "https://github.com/SaiKaushik121/Tic-tac_Toe", // REPLACE: Add your GitHub repo link
        //live: "#" // REPLACE: Add your live demo link if available
      },
    },
    // REPLACE: Add more projects as needed
  ];

  // const filteredProjects = activeFilter === 'all'
  //   ? projects
  //   : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title mb-16">Projects</h2>

        {/* {Project filters} */}

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group overflow-hidden animate-on-scroll"
            >
              {/* Project image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* REPLACE: Add actual project screenshots */}

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-primary hover:text-white transition-all"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-primary hover:text-white transition-all"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech.icon && <span className="mr-1">{tech.icon}</span>}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/SaiKaushik121" // REPLACE: Add your GitHub profile or projects page link
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
