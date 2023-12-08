import './App.scss'
import ProyectsList from './components/ProyectsList/ProyectsList';
import CreateProject from './components/create-project';
import MenuPrincipal from './components/MenuPrincipal/MenuPrincipal';
import SettingsComponent from './components/SettingsComponent/SettingsComponent';
function App() {
  const datos = [
    {
      id: 1,
      titulo: "Proyecto de mentira 1",
      estado: "En progreso",
      fechaVencimiento: "2024-07-20",
      avance: 50,
    },
    {
      id: 2,
      titulo: "Proyecto de mentira 2",
      estado: "Completado",
      fechaVencimiento: "2023-12-25",
      avance: 100,
    },
    {
      id: 3,
      titulo: "Proyecto de mentira 3",
      estado: "Cancelado",
      fechaVencimiento: "2023-08-15",
      avance: 20,
    },
  ];
  return (
    <>
      <SettingsComponent />
    </>
  )
}

export default App
