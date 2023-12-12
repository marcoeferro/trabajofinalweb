import { getEpicsByProjectId } from "@/utils/epicManager";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const ListEpics = ({ projectId, projectName }) => {
//   const [epics, setEpics] = useState([]);

//   useEffect(() => { //obtiene el resultado de una promesa y lo guarda en epics
//     getEpicsByProjectId(projectId).then((data) => setEpics(data));
//   }, []);

const Epicslist = ({ projects }) => {
  return (
    <div>
      <ul>
        <h3>{projectName}</h3>
        {epics.map((epic) => (
          <li key={epic.id}>
            <Link to={`/my-projects/${projectId}/epics/${epic.id}`}>
              {epic.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Epicslist;
