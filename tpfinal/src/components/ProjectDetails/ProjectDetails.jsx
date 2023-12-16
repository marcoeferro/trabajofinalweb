// src/components/ProjectComponents/ProjectDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './ProjectDetails.scss'
import { getEpicsByProjectId } from "@/utils/epicManager";
import EditProject from "../edit-project";
import { Modal } from '@mui/material';

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const [epics,setEpics] = useState([]);

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [project, setProject] = useState(null);
  const [onProjectUpdate, setOnProjectUpdate] = useState(null);

  useEffect(()=>{
    getEpicsByProjectId(projectId).then((data)=>setEpics(data));
  },[])

  if (!projects) {
    return <p>Proyecto no encontrado</p>;
  }
  else {
    const project = projects.find((p) => String(p.id) === projectId);
    return (
      <div>
        <h2>{project.name} - Detalles del Proyecto</h2>
        <p className="project-detail-description">{project.description}</p>
        <button onClick={handleOpen}>Editar</button>
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                  <EditProject project={project} onProjectUpdate={onProjectUpdate} onClose={handleClose} />
                </div>
        </Modal>
        <h3>Epics:</h3>
        <div>
          {epics ? (
            epics.map((epic, index) => (
              <div key={index}>
                <Link to={`/my-projects/${projectId}/epics/${epic.id}`}>
                  {epic.name}
                </Link>
              </div>
            ))
          ) : (
            <li>No hay Epics definidas para este proyecto.</li>
          )}
        </div>
      </div>
    );
  }


};

export default ProjectDetails;
