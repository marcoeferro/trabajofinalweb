// src/components/List-Epics/EpicDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import UserStories from '../UserStories/UserStories';

const EpicDetails = ({ projects }) => {
  const { projectId, epicId } = useParams();

  // Verifica si projects está cargado
  if (!projects) {
    return <p>Cargando proyectos...</p>;
  }

  // Buscar la épica específica en todos los proyectos
  const selectedProject = projects.find(p => String(p.id) === projectId);

  // Verifica si el proyecto está cargado
  if (!selectedProject) {
    return <p>Proyecto no encontrado</p>;
  }

  const epic = selectedProject?.epics.find(e => e.id === epicId);

  // Verifica si la épica está cargada
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