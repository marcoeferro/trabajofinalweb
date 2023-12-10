// src/components/List-Epics/EpicDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import UserStories from '../UserStories/UserStories';

const EpicDetails = ({ projects }) => {
  const { projectId, epicId } = useParams();

  // Buscar la épica específica en todos los proyectos
  const selectedProject = projects.find(p => String(p.id) === projectId);
  const epic = selectedProject?.epics.find(e => e.id === epicId);

  if (!epic) {
    return <p>Épica no encontrada</p>;
  }

  return (
    <div>
      <h2>{epic.name} - Detalles de la Épica</h2>
      <p>{epic.description}</p>
      <img src={epic.icon} alt="Icono de la Épica" />

      {/* Listado de Historias de Usuario utilizando UserStories */}
      <h3>Historias de Usuario:</h3>
      {epic.userStories && epic.userStories.length > 0 ? (
        <UserStories stories={epic.userStories} />
      ) : (
        <p>No hay historias de usuario definidas para esta épica.</p>
      )}
    </div>
  );
};

export default EpicDetails;