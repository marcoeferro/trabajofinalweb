import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserStoriesList from '../UserStoriesList/UserStoriesList';
import { getEpicsByProjectId } from '@/utils/epicManager';
import { getStoriesByEpicId } from '@/utils/storyManager';

const EpicDetails = () => {
  const { projectId, epicId } = useParams();
  const [epic, setEpic] = useState(null)
  const [stories, setStories] = useState(null)

  useEffect(() => {
    getEpicsByProjectId(projectId).then((data) => {
      const epic = data.find((epic) => epic.id === epicId);
      setEpic(epic);
    })
    getStoriesByEpicId(projectId).then((data) => {
      setStories(data);
    })
  }, [projectId, epicId])

  // Verifica si la épica está cargada
  if (!epic) {
    return <p>Épica no encontrada</p>;
  }

  return (
    <div>
      <h2>{epic.name} - Detalles de la Épica</h2>
      <p>{epic.description}</p>
      <img src={epic.icon} alt="Icono de la Épica" />

      {/* Listado de Historias de Usuario utilizando UserStoriesList */}
      <h3>Historias de Usuario:</h3>
      {!stories ? (
        <UserStoriesList stories={stories} />
      ) : (
        <p>No hay historias de usuario definidas para esta épica.</p>
      )}
    </div>
  );
}

export default EpicDetails;