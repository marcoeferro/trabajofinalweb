// src/components/List-Epics/EpicDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import UserStories from '../UserStories/UserStories';
import styles from './EpicDetails.module.scss'
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { ImBug } from "react-icons/im";
import { GoChevronRight } from "react-icons/go";

const EpicDetails = ({ projects }) => {
  const { projectId, epicId } = useParams();

  // Buscar la épica específica en todos los proyectos
  const selectedProject = projects.find(p => String(p.id) === projectId);
  const epic = selectedProject?.epics.find(e => e.id === epicId);

  if (!epic) {
    return <p>Épica no encontrada</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <IoIosArrowBack className={styles.icon}></IoIosArrowBack>
      <GoChevronRight className={styles.icon_4}></GoChevronRight>
      <HiOutlineCog6Tooth className={styles.icon_2}></HiOutlineCog6Tooth> 
      <ImBug className={styles.icon_5}></ImBug>
      <h2>Proyecto {projectId}</h2>
      <h2>{epicId}</h2>
      </div>
      <div> <p className={styles.description}>{epic.description}</p>
      </div>
    
      {/* Listado de Historias de Usuario utilizando UserStories */}
      <div className={styles.epics}> 
      <h3>Historias de Usuario </h3>
      <ImBug className={styles.icon_3}></ImBug>
      {epic.userStories && epic.userStories.length > 0 ? (
        <UserStories stories={epic.userStories} />
      ) : (
        <p>No hay historias de usuario definidas para esta épica.</p>
      )}
      </div>
      
    </div>
  );
};

export default EpicDetails;