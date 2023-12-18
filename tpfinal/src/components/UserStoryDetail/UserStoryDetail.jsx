import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, FormControl, Modal, IconButton } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TaskCard from "../TaskCard/TaskCard";
import { getTasksByStoryId } from "@/utils/taskManager";
import CreateTask from "../CreateTask/CreateTask";
import { getStoriesByEpicId } from "@/utils/storyManager";

const UserStorieDetail = ({ storie }) => {
    if (!storie) {

    }
    //listas
    const [lista, setLista] = useState(null);
    const [listaFiltrada, setListaFiltrada] = useState(null);

    // Inicializa los filtros
    const [filtrado, setFiltrado] = useState(false);
    const [filtroName, setfiltroName] = useState('');
    const [filtroDueDate, setFiltroDueDate] = useState(null);
    const [filtroCreatedDate, setFiltroCreatedDate] = useState('');

    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //setea lista
    useEffect(() => {
        getTasksByStoryId(storie.id).then((data) => {
            setLista(data)
            setListaFiltrada(data)
        })
        getStoriesByEpicId
    }, [storie])

    //Funciones Filtro
    const aplicarFiltro = () => {
        const nuevaListaFiltrada = lista.filter((task) => {
            const coincideNombre = filtroName ? task.name === filtroName : true;
            const coincideDueDate = filtroState ? task.dueDate === filtroState : true;
            const coincideCreatedDate = filtroDate ? task.createdDate === filtroDate : true;
            return coincideNombre && coincideDueDate && coincideCreatedDate;
        });
        setListaFiltrada(nuevaListaFiltrada);
        setFiltrado(true);
    };

    const limpiarFiltros = () => {
        setfiltroName('');
        setFiltroDueDate(null);
        setFiltroCreatedDate('');
        setListaFiltrada(lista);
        setFiltrado(false)
    };

    if (!storie) {
        return <p>Historia no encontrada</p>;
    } else if (storie) {
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
                    <CreateTask storieId={storie.id} onClose={handleClose} />
                </Modal>
                <h2>{storie.name} - Detalles de la Historia</h2>
                <p>{storie.description}</p>
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
                                    id='dueDate'
                                    label="dueDate"
                                    value={filtroDueDate || ''}
                                    onChange={(e) => setfiltroName(e.target.value)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <DatePicker
                                    id='createdDate'
                                    label="createdDate"
                                    value={filtroCreatedDate || ''}
                                    onChange={(e) => setfiltroName(e.target.value)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <IconButton onClick={filtrado ? limpiarFiltros : aplicarFiltro}>
                                    {filtrado ? <FilterAltOffIcon /> : <FilterAltIcon />}
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            {listaFiltrada.map((task) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
                                    <TaskCard task={task} />
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
export default UserStorieDetail;
