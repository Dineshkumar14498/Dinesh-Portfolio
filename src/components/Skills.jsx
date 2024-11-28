import React from 'react';

const Skills = () => {
  // Array of skills and tools
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🌲" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express.js", icon: "🚀" },
    { name: "Git", icon: "🔧" }
  ];

  return (
    <section className="skills">
      {/* Heading for the skills section */}
      <h2 className="skills__heading">My Skills & Tools</h2>

      {/* List of skills */}
      <ul className="skills__list">
        {skills.map((skill, index) => (
          <li key={index} className="skills__item">
            <span className="skills__icon">{skill.icon}</span>
            <span className="skills__name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
