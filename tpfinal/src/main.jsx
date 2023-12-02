import React from 'react'
import ReactDOM from 'react-dom/client'
import SideMenu from './components/SideMenu/SideMenu'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import CreateEpic from './components/routes/my-projects/project-n/epic-k/create-epic'
import CreateStory from './components/routes/my-stories/create-story'
import TaskList from './components/routes/my-stories/task-list'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>
  },
  {
    path: "/my-projects",
    element: <div>my-projects</div>
  },
  {
    path: "/create-epic",
    element: <CreateEpic/>
  },
  {
    path: "/create-story",
    element: <CreateStory/>
  },
  {
    path: "/task-list",
    element: <TaskList/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
//<RouterProvider router={router} /> --test