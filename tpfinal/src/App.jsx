import { useState, useEffect } from "react";
import "./App.scss";
import SideMenu from "./components/SideMenu/SideMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import EpicsList from "./components/EpicsList/EpicsList";
import EpicDetails from "./components/EpicsDetails/EpicDetails";
import MenuPrincipal from "./components/MenuPrincipal/MenuPrincipal";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import UserStories from "./components/UserStoriesList/UserStoriesList";
import Settings from "./components/Settings/Settings";
import getProjects from "./utils/projectManager";
import Home from './components/Home/Home'
import ProjectCard from "./components/ProjectCard/ProjectCard";
import UserStorieCard from "./components/UserStorieCard/UserStorieCard";
function App() {

  const [projects, setProjects] = useState(null)
  useEffect(() => {
    // Puedes llamar a getProjects aquí o en cualquier otro lugar del componente
    const fetchData = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
        // console.log(projectsData);
        // Haz algo con los proyectos recuperados, por ejemplo, establecerlos en el estado del componente.
      } catch (error) {
        console.error('Error al obtener proyectos:', error);
      }
    };

    fetchData();
  }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente.
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const handleOpenSideMenu = () => setOpenSideMenu(!openSideMenu)

  const epica = {
    description: "d",
    projectId: "1701992079608",
    icon: "📈",
    name: "test 1,"
  }
  return (
    <Router>
      <MenuPrincipal handleOpenSideMenu={handleOpenSideMenu} />
      <SideMenu openSideMenu={openSideMenu} handleOpenSideMenu={handleOpenSideMenu} />
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home listaProyectos={projects} />}
          />
          <Route
            path="/my-stories"
            element={<UserStories />}
          />
          <Route
            path="/settings"
            element={<Settings />}
          />
          <Route
            path="/my-projects"
            element={<ProjectsList listaProyectos={projects} />}
          />
          <Route
            path="/my-projects/:projectId"
            exact
            element={<ProjectDetails projects={projects} />}
          />
          {/* Nueva ruta para la lista de épicas */}
          <Route
            path="/my-projects/:projectId/epics"
            element={<EpicsList projects={projects} />}
          />
          {/* Nueva ruta para los detalles de épicas */}
          <Route
            path="/my-projects/:projectId/epics/:epicId"
            element={<EpicDetails projects={projects} />}
          />
          {/* Nueva ruta para los detalles de historias */}
          <Route
            path="/my-projects/:projectId/epics/:epicId/:storyId"
            element={<h1>Detalle de la tarea ??</h1>}
          />
          {/* Nueva ruta para los detalles de historias */}
          <Route
            path="/test"
            element={<UserStorieCard />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
