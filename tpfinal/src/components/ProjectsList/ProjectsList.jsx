import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, IconButton, Grid, Select, MenuItem } from '@mui/material';
import CreateProject from '../CreateProject/CreateProject';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import ProjectCard from '../ProjectCard/ProjectCard';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import dayjs from 'dayjs';

const ProjectsList = ({ listaProyectos }) => {

    //listas
    const [lista, setLista] = useState(listaProyectos);
    const [listaFiltrada, setListaFiltrada] = useState(listaProyectos);

    // Inicializa los filtros
    const [filtrado, setFiltrado] = useState(false);
    const [filtroName, setfiltroName] = useState('');
    const [filtroDate, setFiltroDate] = useState(dayjs(Date.now()));
    const [filtroState, setFiltroState] = useState('');

    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Inicializador de estados
    useEffect(() => {
        setLista(listaProyectos);
        setListaFiltrada(listaProyectos);
    }, [listaProyectos]);

    //Funciones Filtro
    const aplicarFiltro = () => {
        const nuevaListaFiltrada = lista.filter((proyecto) => {
            const coincideNombre = filtroName ? proyecto.name === filtroName : true;
            const coincideEstado = filtroState ? proyecto.state === filtroState : true;
            const coincideFecha = filtroDate ? proyecto.date === filtroDate : true;
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
        setFiltrado(!filtrado)
    };
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                    <div>
                        <CreateProject onClose={handleClose} />
                    </div>
                </Modal>
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
                            onChange={(e) => setfiltroName(e.target.value)}
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
                    {listaFiltrada && listaFiltrada.map((proyecto) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={proyecto.id}>
                            <ProjectCard project={proyecto} />
                        </Grid>
                    ))}
                </Grid>
            </LocalizationProvider>

        </div >
    );
};

export default ProjectsList;
