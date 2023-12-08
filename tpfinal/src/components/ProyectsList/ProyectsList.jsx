import React, { useState, useEffect } from 'react';
import './ProyectsList.scss';
import { Modal } from '@mui/material';
import CreateProject from '../create-project';

const ProyectsList = ({ listaProyectos }) => {


    //listas
    const [lista, setLista] = useState(listaProyectos);
    const [listaFiltrada, setListaFiltrada] = useState(listaProyectos);

    // Inicializa los filtros
    const [filtroTitulo, setfiltroTitulo] = useState('');
    const [filtroFecha, setFiltroFecha] = useState(null);
    const [filtroEstado, setFiltroEstado] = useState('');

    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    //Funciones Filtro
    const filtrarLista = () => {
        if (!filtroTitulo && !filtroFecha && !filtroEstado) {
            limpiarFiltros()
        } else {
            const nuevaListaFiltrada = lista.filter((proyecto) => (proyecto.titulo == filtroTitulo || proyecto.fechaVencimiento == filtroFecha || proyecto.estado == filtroEstado))
            setListaFiltrada(nuevaListaFiltrada)
        }

    };

    const limpiarFiltros = () => {
        setfiltroTitulo('');
        setFiltroFecha(null);
        setFiltroEstado('');
        setListaFiltrada(lista);
    };

    //Renderizado para cambios de la lista
    useEffect(() => {
    }, [listaFiltrada]);

    return (

        <div className='container'>
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
                    value={filtroTitulo || ''}
                    onChange={(e) => setfiltroTitulo(e.target.value)}
                    placeholder='Ingrese el Titulo'
                />

                <input
                    id='datepicker'
                    type="date"
                    value={filtroFecha || ''}
                    onChange={(e) => setFiltroFecha(e.target.value)}
                />

                <select name="Estados" id="" onChange={(e) => setFiltroEstado(e.target.value)}>
                    <option value="Por Empezar">Por Empezar</option>
                    <option value="En progreso">En progreso</option>
                    <option value="Cancelado">Cancelado</option>
                    <option value="Completado">Completado</option>
                </select>
                <button onClick={filtrarLista}>Filtrar</button>
                <button onClick={limpiarFiltros}>Limpiar Filtros</button>
            </div>
            <div className='lista'>
                {listaFiltrada.map((proyecto) => (
                    <div key={proyecto.id}>
                        <div className='info-proyecto'>
                            <h1>{proyecto.titulo}</h1>
                            <div className='info-proyecto-upper'>
                                <button>{proyecto.estado}</button>
                                <h2>{proyecto.fechaVencimiento}</h2>
                                <span className="material-symbols-outlined">
                                    shield_person
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ProyectsList;
