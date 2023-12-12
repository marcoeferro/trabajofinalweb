// src/components/ProjectComponents/ProjectDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from './ProjectDetails.module.scss'
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { ImBug } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";


const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find((p) => String(p.id) === projectId);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}> 
      <IoIosArrowBack className={styles.icon}></IoIosArrowBack>
      <HiOutlineCog6Tooth className={styles.icon_2}></HiOutlineCog6Tooth> 
      <h2>{project.name}</h2>
      </div>
      <p className={styles.description}>{project.description}
      <br></br>
      </p>
      <div className={styles.epics}>
        <h3>Epica </h3>
        <ImBug className={styles.icon_3}></ImBug>
        <div className={styles.linea}></div>
        <br></br>
        El Club Atlético Boca Juniors es una entidad deportiva argentina, con sede en el barrio de La Boca, Buenos Aires. Fue fundado el 3 de abril de 1905 por seis vecinos adolescentes hijos de italianos. El fútbol masculino es su disciplina más destacada, aunque también compite a nivel profesional, nacional e internacionalmente, en baloncesto, voleibol, futsal, fútbol femenino y balonmano mientras que deportes como el boxeo, judo, karate, taekwondo, gimnasia rítmica, gimnasia artística y hockey se practican a nivel amateur. Actualmente se desempeña en la Liga Profesional de Fútbol Argentino. Boca Juniors participa de la Primera División Argentina desde 1913 y, a partir del Torneo Inicial 2013, se convirtió en el único club que disputó todas las temporadas en Primera División desde el comienzo del profesionalismo en 1931. Además, es el equipo con mayor cantidad de partidos disputados.6​ A partir del 8 de junio de 2015, Boca Juniors batió el récord de mayor permanencia ininterrumpida en Primera División, con 37 312 días.7​ El equipo juega sus partidos como local en el estadio Alberto J. Armando, conocido mundialmente como «La Bombonera»; allí también ha sido localista en numerosas ocasiones la Selección Argentina de fútbol, donde mantiene un invicto histórico en partidos oficiales. A nivel local, el club cuenta con 35 campeonatos de liga de Primera División8​ y 17 copas nacionales (récord argentino), entre las que se destacan cuatro ediciones de la Copa Argentina (máximo ganador del certamen: 1969, 2011-12, 2014-15 y 2019-20) y dos ediciones de la Copa de la Liga Profesional (máximo ganador del certamen: 2020, 2022).9​ También posee un título honorífico de la era amateur: la Copa de Honor, obtenida en 1925; un reconocimiento de la AFA a su exitosa gira por Europa en dicho año.
          <ul>
            {project.epics ? (
            project.epics.map((epic, index) => (
            <li key={index}>
              <Link to={`/my-projects/${projectId}/epics/${epic.id}`}>
                <IoMdArrowDropdown color='FF6B71'></IoMdArrowDropdown>
              </Link>
            </li>
          ))
        ) : (
          <li>No hay Epics definidas para este proyecto.</li>
        )}
          </ul>
      </div>
      
    </div>
  );
};

export default ProjectDetails;
