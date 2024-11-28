import React from 'react';

const Projects = () => {
  // Array of project details
  const projects = [
    {
      name: "Guvi-Blog-Clone",
      description: "The GUVI Blog Application is a sleek platform for sharing and exploring blogs.With responsive design and easy navigation, it’s perfect for blogging anytime, anywhere!",
      link: "https://curious-griffin-19bf4d.netlify.app/",
    },
    {
      name: "UserManagement",
      description: "Axios CRUD Operation in React. Interact with a mock API using Axios to fetch, add, edit, and delete user records.",
      link: "https://usermanagementdk.netlify.app/",
    },
  ];

  return (
    <section className="projects">
      {/* Heading for the projects section */}
      <h2 className="projects__heading">Projects</h2>

      {/* List of projects */}
      <ul className="projects__list">
        {projects.map((project, index) => (
          <li className="projects__item" key={index}>
            <div className="projects__content">
              {/* Project title */}
              <h3 className="projects__title">{project.name}</h3>
              {/* Project description */}
              <p className="projects__description">{project.description}</p>
              {/* Link to view the project */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link"
              >
                View Project
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
