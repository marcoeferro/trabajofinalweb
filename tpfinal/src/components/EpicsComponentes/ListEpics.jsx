import React from 'react';
import { Link } from 'react-router-dom';

const ListEpics = ({ projects }) => {
  return (
    <div>
      <h2>Lista de Épicas</h2>
      <ul>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.name}</h3>
            <ul>
              {project.epics.map((epic) => (
                <li key={epic.id}>
                  <Link to={`/my-projects/${project.id}/epics/${epic.id}`}>
                    {epic.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListEpics;