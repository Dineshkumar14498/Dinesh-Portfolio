import React from 'react';

const Projects = () => {
  // Array of project details
  const projects = [
    {
      name: "Mobile Web application with Price Card",
      description: "Responsive web Mobile application built with React.js.Users can easily add and remove products to from the cart Get real-time updates on the total selected price and product count",
      link: "https://delightful-maamoul-0dfaf9.netlify.app/"
    },
    {
      name: "UserManagement",
      description: "Axios Curd-Operation Create in React. Interact with a mock API using Axios to fetch, add, edit, and delete user records.",
      link: "https://usermanagementdk.netlify.app/"
    },

    {
      name: "Guvi-Blog-Clone",
      description: "The GUVI Blog Application is a sleek platform for sharing and exploring blogs.and interact with posts,responsive design, and easy navigation, it’s perfect for blogging anytime, anywhere!",
      link: "https://curious-griffin-19bf4d.netlify.app/"
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
