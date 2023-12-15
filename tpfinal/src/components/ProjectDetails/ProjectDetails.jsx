// src/components/ProjectComponents/ProjectDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './ProjectDetails.scss'
import { getEpicsByProjectId } from "@/utils/epicManager";
import EpicCard from "../EpicCard/EpicCard";

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const [epics, setEpics] = useState([]);


  useEffect(() => {
    getEpicsByProjectId(projectId).then((data) => setEpics(data));
  }, [])

  if (!projects) {
    return <p>Proyecto no encontrado</p>;
  }
  else {
    const project = projects.find((p) => String(p.id) === projectId);
    return (
      <div>
        <h2>{project.name} - Detalles del Proyecto</h2>
        <p className="project-detail-description">{project.description}</p>
        <h3>Epics:</h3>
        <div>
          {epics ? (
            epics.map((epic, index) => (
              <div key={index} >
                <EpicCard epica={epic} />
              </div>
            ))
          ) : (
            <li>No hay Epics definidas para este proyecto.</li>
          )}
        </div>
      </div >
    );
  }


};

export default ProjectDetails;
