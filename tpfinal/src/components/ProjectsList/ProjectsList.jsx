import React, { useState, useEffect } from 'react';
import './ProjectsList.scss';
import { Modal } from '@mui/material';
import CreateProject from '../create-project';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Link } from 'react-router-dom';

const ProjectsList = ({ listaProyectos }) => {

    //listas
    const [lista, setLista] = useState(listaProyectos);
    const [listaFiltrada, setListaFiltrada] = useState(listaProyectos);

    // Inicializa los filtros
    const [filtrado, setFiltrado] = useState(false);
    const [filtroName, setfiltroName] = useState('');
    const [filtroDate, setFiltroDate] = useState(null);
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
    const filtrarLista = () => {
        if (!filtroName && !filtroDate && !filtroState) {
            limpiarFiltros()
        } else {
            const nuevaListaFiltrada = lista.filter((proyecto) => (proyecto.name == filtroName))
            setListaFiltrada(nuevaListaFiltrada)
        }
        setFiltrado(!filtrado)
    };

    useEffect(() => {
        console.log(open)
    }, [filtroName, filtroState, filtroDate])



    const limpiarFiltros = () => {
        setfiltroName('');
        setFiltroDate(null);
        setFiltroState('');
        setListaFiltrada(lista);
        setFiltrado(!filtrado)
    };
    return (

        <div className='Projects-list-container'>
            <button onClick={handleOpen}>+</button>
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
            <div className='filtro'>
                <input
                    type="text"
                    value={filtroName || ''}
                    onChange={(e) => setfiltroName(e.target.value)}
                    placeholder='Ingrese el Name'
                />

                {/* <input
                    id='datepicker'
                    type="date"
                    value={filtroDate || ''}
                    onChange={(e) => setFiltroDate(e.target.value)}
                />

                <select name="States" id="" onChange={(e) => setFiltroState(e.target.value)}>
                    <option value="Por Empezar">Por Empezar</option>
                    <option value="En progreso">En progreso</option>
                    <option value="Cancelado">Cancelado</option>
                    <option value="Completado">Completado</option>
                </select> */}
                {!filtrado && <span onClick={filtrarLista}><FilterAltIcon /></span>}
                {filtrado && <span onClick={limpiarFiltros}><FilterAltOffIcon /></span>}
            </div >
            <div className='lista'>
                {listaFiltrada && listaFiltrada.map((proyecto) => (
                    <div key={proyecto.id}>
                        <div className='info-proyecto'>
                            <Link to={`/my-projects/${proyecto.id}`}>
                                <h1>{proyecto.name}</h1>
                            </Link>
                            <div className='info-proyecto-upper'>
                                <p>{proyecto.description}</p>
                                <h2>{proyecto.icon}</h2>
                                <span className="material-symbols-outlined">
                                    shield_person
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >

    );
};

export default ProjectsList;
