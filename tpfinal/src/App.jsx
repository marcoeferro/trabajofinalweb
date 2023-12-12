import { useState } from "react";
import "./App.scss";
import SideMenu from "./components/SideMenu/SideMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProjects from "./components/ProjectComponents/ListProjects";
import ProjectDetails from "./components/ProjectComponents/ProjectDetails";
import ListEpics from "./components/EpicsComponentes/ListEpics";
import EpicDetails from "./components/EpicsComponentes/EpicDetails";

function App() {
  const projects = [
    {
      id: 1,
      name: "Proyecto 1",
      description: "Descripción del Proyecto 1",
      icon: "icon-1.png",
      members: [101, 102, 103],
      epics: [
        {
          id: "epic-a",
          name: "Epic A",
          description: "Descripción de Epic A",
          icon: "icon-epic-a.png",
        },
        {
          id: "epic-b",
          name: "Epic B",
          description: "Descripción de Epic B",
          icon: "icon-epic-b.png",
        },
      ],
    },
    {
      id: 2,
      name: "Proyecto 2",
      description: "Descripción del Proyecto 2",
      icon: "icon-2.png",
      members: [104, 105, 106],
      epics: [
        {
          id: "epic-x",
          name: "Epic X",
          description: "Descripción de Epic X",
          icon: "icon-epic-x.png",
          userStories: [
            {
              id: "story-1",
              title: "Historia 1",
              description: "Descripción de Historia 1",
            },
            {
              id: "story-2",
              title: "Historia 2",
              description: "Descripción de Historia 2",
            },
          ],
        },
        {
          id: "epic-y",
          name: "Epic Y",
          description: "Descripción de Epic Y",
          icon: "icon-epic-y.png",
          userStories: [
            {
              id: "story-1",
              title: "Historia 1",
              description: "Descripción de Historia 1",
            },
            {
              id: "story-2",
              title: "Historia 2",
              description: "Descripción de Historia 2",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/my-projects"
            element={<ListProjects projects={projects} />}
          />
          <Route
            path="/my-projects/:projectId"
            exact
            element={<ProjectDetails projects={projects} />}
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
