import { useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProjects from "./components/ProjectComponents/ListProjects";
import ProjectDetails from "./components/ProjectComponents/ProjectDetails";
import ListEpics from "./components/EpicsComponentes/ListEpics";
import EpicDetails from "./components/EpicsComponentes/EpicDetails";
import ProyectsList from "./components/ProyectsList/ProyectsList";
import { getProjects } from "./utils/projectManager";
import CreateEpic from "./components/create-epic";
import EditEpic from "./components/edit-epic";

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  const epic = {
    name: "test 3",
    description: "d",
    icon: "",
    id: 1702314291688,
    projectId: 1701992079608,
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/my-projects"
            element={<ProyectsList listaProyectos={projects} />}
          />
          <Route
            path="/my-projects/:projectId"
            exact
            element={<ProjectDetails projects={projects} />}
          />
          <Route
            path="/test"
            exact
            element={
              <EditEpic
                epic={epic}
              />
            }
          />
          {/* Nueva ruta para la lista de épicas */}
          <Route
            path="/my-projects/:projectId/epics"
            element={<ListEpics projects={projects} />}
          />
          {/* Nueva ruta para los detalles de épicas */}
          <Route
            path="/my-projects/:projectId/epics/:epicId"
            element={<EpicDetails projects={projects} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
