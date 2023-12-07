import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CreateEpic from './components/create-epic'
import CreateStory from './components/create-story'
import CreateProject from './components/create-project'
import TaskList from './components/task-list'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>hello</div>
//   },
//   {
//     path: "/my-projects",
//     element: <div>my-projects</div>
//   },
//   {
//     path: "/create-epic",
//     element: <CreateEpic />
//   },
//   {
//     path: "/create-story",
//     element: <CreateStory />
//   },
//   {
//     path: "/task-list",
//     element: <TaskList />
//   },
//   {
//     path: "/create-project",
//     element: <CreateProject />
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
