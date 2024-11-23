import React from 'react';

const Projects = () => {
  // Array of project details
  const projects = [
    {
      name: "TastyVault",
      description: "A food recipe app with interactive features.",
      link: "https://tastyvault.netlify.app/"
    },
    {
      name: "Portfolio 2",
      description: "Another creative project.",
      link: "https://delightful-maamoul-0dfaf9.netlify.app/"
    }
  ];

  return (
    <section className="projects">
      {/* Heading for the projects section */}
      <h2>Projects</h2>
      
      {/* Container for all project cards */}
      <div className="project-list">
        {/* Iterate over the projects array and render a card for each */}
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Project title */}
            <h3>{project.name}</h3>
            {/* Project description */}
            <p>{project.description}</p>
            {/* Link to view the project */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
