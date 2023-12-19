import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, FormControl, Modal, Select, MenuItem, IconButton, InputLabel } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useParams } from "react-router-dom";
import { getEpicsByProjectId } from "@/utils/epicManager";
import CreateEpic from "../CreateEpic/CreateEpic";
import getProjects from "@/utils/projectManager";
import EpicCard from "../EpicCard/EpicCard";
import dayjs from "dayjs";

const ProjectsDetails = ({ projects }) => {
  const { projectId, epicId } = useParams()
  const [project, setProject] = useState(null)

  //listas
  const [lista, setLista] = useState(null);
  const [listaFiltrada, setListaFiltrada] = useState(null);

  // Inicializa los filtros
  const [filtrado, setFiltrado] = useState(false);
  const [filtroName, setfiltroName] = useState('');
  const [filtroDate, setFiltroDate] = useState(dayjs(Date.now()));
  const [filtroState, setFiltroState] = useState('');

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getProjects().then((data) => {
      const selectedProject = data.find(a => String(a.id) === projectId)
      setProject(selectedProject)
    })
    getEpicsByProjectId(projectId).then((data) => {
      setLista(data);
      setListaFiltrada(data)
    })

  }, [epicId, projectId])

  //Funciones Filtro
  const aplicarFiltro = () => {
    const nuevaListaFiltrada = lista.filter((storie) => {
      const coincideNombre = filtroName ? storie.name === filtroName : true;
      const coincideEstado = filtroState ? storie.state === filtroState : true;
      const coincideFecha = filtroDate ? storie.date === filtroDate : true;
      return coincideNombre && coincideEstado && coincideFecha;
    });
    setListaFiltrada(nuevaListaFiltrada);
    setFiltrado(true);
  };

  const limpiarFiltros = () => {
    setfiltroName('');
    setFiltroDate(null);
    setFiltroState('');
    setListaFiltrada(lista);
    setFiltrado(false)
  };

  // Verifica si la épica está cargada
  if (!project) {
    return <p>Proyecto no encontrada</p>;
  } else if (project) {
    return (
      <div>
        <Grid container justifyContent={'center'} spacing={1} margin={'10px'}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Button variant="outlined" onClick={handleOpen}>+</Button>
            </FormControl>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CreateEpic projectId={projectId} onClose={handleClose} />
        </Modal>
        <h2>{project.name} - Detalles del Proyecto</h2>
        <p>{project.description}</p>
        {listaFiltrada ? (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={1} margin={'10px'}>
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="filtroName"
                  label="Ingrese el Name"
                  name="filtroName"
                  autoComplete="filtroName"
                  autoFocus
                  value={filtroName || ''}
                  onChange={(e) => setfiltroName(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <DatePicker
                  id='date'
                  label="Fecha"
                  value={filtroDate || ''}
                  onChange={(e) => setFiltroDate(e.target.value)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filtroState || ''}
                    label="Estado"
                    onChange={(e) => setFiltroState(e.target.value)}
                  >
                    <MenuItem value={"Por Empezar"}>Por Empezar</MenuItem>
                    <MenuItem value={"En progreso"}>En progreso</MenuItem>
                    <MenuItem value={"Cancelado"}>Cancelado</MenuItem>
                    <MenuItem value={"Completado"}>Completado</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <IconButton onClick={filtrado ? limpiarFiltros : aplicarFiltro}>
                  {filtrado ? <FilterAltOffIcon /> : <FilterAltIcon />}
                </IconButton>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              {listaFiltrada.map((epic) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={epic.id}>
                  <EpicCard epica={epic} />
                </Grid>
              ))}
            </Grid>
          </LocalizationProvider>
        ) : (
          <p>No hay epicas definidas para este Proyecto.</p>
        )
        }
      </div >
    );
  }


}
export default ProjectsDetails;
