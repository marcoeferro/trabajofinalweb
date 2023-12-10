// src/components/ProjectComponents/ProjectDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find((p) => String(p.id) === projectId);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <div>
      <h2>{project.name} - Detalles del Proyecto</h2>
      <p>{project.description}</p>
      <h3>Epics:</h3>
      <ul>
      {project.epics ? (
          project.epics.map((epic, index) => (
            <li key={index}>
              <Link to={`/my-projects/${projectId}/epics/${epic.id}`}>
                {epic.name}
              </Link>
            </li>
          ))
        ) : (
          <li>No hay Epics definidas para este proyecto.</li>
        )}
      </ul>
    </div>
  );
};

export default ProjectDetails;
