import React from 'react';

const Skills = () => {
  // Array of skills and tools
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB",
    "Express.js", "Git"
  ];

  return (
    <section className="skills">
      {/* Heading for the skills section */}
      <h2 className="skills__heading">My Skills & Tools</h2>

      {/* List of skills */}
      <ul className="skills__list">
        {/* Iterate over the skills array and render each skill as a list item */}
        {skills.map((skill, index) => (
          <li key={index} className="skills__item">
            <span className="skills__icon">{skill[0]}</span> {/* Icon from the first letter */}
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
