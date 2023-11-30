import React from 'react'
import ReactDOM from 'react-dom/client'
import SideMenu from './components/SideMenu/SideMenu'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>
  },
  {
    path: "/my-projects",
    element: <div>my-projects</div>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
//<RouterProvider router={router} /> --test