// src/componentes/ProjectComponents/Projects.jsx
import React from "react";
import './Projects.scss';

const Project = ({ project }) => {
  return (
    <div className="CaseProject">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="IconContainer">
        {[...Array(4)].map((_, index) => (
          <img key={index} src={project.icon}/>
        ))}
      </div>
      <p>Members: {project.members.join(', ')}</p>
    </div>
  );
};

export default Project;
