import React, { useState, useEffect } from "react";
import { getStoriesByEpicId } from "@/utils//storyManager";
import UserStorieCard from "./../UserStorieCard/UserStorieCard";
import { Button, TextField, Grid, FormControl, Modal, Select, MenuItem, IconButton, InputLabel } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import CreateStory from "../CreateStory/CreateStory";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useParams } from "react-router-dom";
import { getEpicsByProjectId } from "@/utils/epicManager";

const EpicDetails = () => {
  const { projectId, epicId } = useParams()

  const [epic, setEpic] = useState(null)

  //listas
  const [lista, setLista] = useState(null);
  const [listaFiltrada, setListaFiltrada] = useState(null);

  // Inicializa los filtros
  const [filtrado, setFiltrado] = useState(false);
  const [filtroName, setfiltroName] = useState('');
  const [filtroDate, setFiltroDate] = useState(null);
  const [filtroState, setFiltroState] = useState('');

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getEpicsByProjectId(projectId).then((data) => {
      const epica = data.find((a) => String(a.id) === epicId)
      setEpic(epica);
    })
    getStoriesByEpicId(epicId).then((data) => {
      setLista(data);
      setListaFiltrada(data);
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

  const handleStoryCreated = (newStory) => {
    setLista(lista => [...lista, newStory]);
    setListaFiltrada(listaFiltrada => [...listaFiltrada, newStory]);
  };

  // Verifica si la épica está cargada
  if (!epic) {
    return <p>Épica no encontrada</p>;
  } else if (epic) {
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
          <CreateStory onClose={handleClose} onStoryCreated={handleStoryCreated} epicaId={epic.id} />
        </Modal>
        <h2>{epic.name} - Detalles de la Épica</h2>
        <p>{epic.description}</p>
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
                  onChange={(value) => setFiltroDate(value)}
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
              {listaFiltrada.map((storie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={storie.id}>
                  <UserStorieCard storie={storie} />
                </Grid>
              ))}
            </Grid>
          </LocalizationProvider>
        ) : (
          <p>No hay historias de usuario definidas para esta épica.</p>
        )
        }
      </div >
    );
  }


}
export default EpicDetails;
