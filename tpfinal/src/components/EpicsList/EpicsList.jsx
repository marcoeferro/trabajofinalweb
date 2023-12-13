import { getEpicsByProjectId } from "@/utils/epicManager";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Epic from "../Epic/Epic";


const Epicslist = ({ projects }) => {
  const [epics, setEpics] = useState(null)

  useEffect(() => { //obtiene el resultado de una promesa y lo guarda en epics
    if (projects) {
      getEpicsByProjectId(projects.id).then((data) => setEpics(data));
    }
  }, [projects]);

  if (!projects) {
    return (<h1>ERROR</h1>)
  } else if (!epics) {
    return (<h1>Cargando...</h1>) // Muestra un mensaje de carga mientras se resuelve la promesa
  } else {
    return (
      <div>
        <h3>SARAZA</h3>
        {epics.map((epic) => (
          <Link to={`/my-projects/${projects.id}/epics/${epic.id}`}>
            <Epic Epica={epic} />
          </Link>
        ))}
      </div>
    );
  }
};
export default Epicslist;
