import React, { useState, useEffect } from 'react';
import './ProyectsList.scss';
import { Modal } from '@mui/material';
import CreateProject from '../create-project';
import { getProjects } from '@/utils/projectManager';

const ProyectsList = () => {
    



    const datos = [
        {
            id: 1,
            name: "Proyecto de mentira 1",
            state: "En progreso",
            dueDate: "2024-07-20",
            avance: 50,
        },
        {
            id: 2,
            name: "Proyecto de mentira 2",
            state: "Completado",
            dueDate: "2023-12-25",
            avance: 100,
        },
        {
            id: 3,
            name: "Proyecto de mentira 3",
            state: "Cancelado",
            dueDate: "2023-08-15",
            avance: 20,
        },
    ];

    //listas
    const [lista, setLista] = useState([]);
    const [listaFiltrada, setListaFiltrada] = useState([]);

    // Inicializa los filtros
    const [filtroName, setfiltroName] = useState('');
    const [filtroDate, setFiltroDate] = useState(null);
    const [filtroState, setFiltroState] = useState('');

    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    //Funciones Filtro
    const filtrarLista = () => {
        if (!filtroName && !filtroDate && !filtroState) {
            limpiarFiltros()
        } else {
            const nuevaListaFiltrada = lista.filter((proyecto) => (proyecto.name == filtroName || proyecto.dueDate == filtroDate || proyecto.state == filtroState))
            setListaFiltrada(nuevaListaFiltrada)
        }

    };

    const limpiarFiltros = () => {
        setfiltroName('');
        setFiltroDate(null);
        setFiltroState('');
        setListaFiltrada(lista);
    };

    //Renderizado para cambios de la lista
    useEffect(() => {
        getProjects().then((data) => setLista(data))
    }, [listaFiltrada]);
    useEffect(()=>{
        getProjects().then((data) => setLista(data))
    },[])

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
                    value={filtroName || ''}
                    onChange={(e) => setfiltroName(e.target.value)}
                    placeholder='Ingrese el Name'
                />

                {/* <span className="material-symbols-outlined">
                    calendar_month
                </span> */}

                <input
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
                </select>
                <button onClick={filtrarLista}>Filtrar</button>
                <button onClick={limpiarFiltros}>Limpiar Filtros</button>
            </div>
            <div className='lista'>
                {listaFiltrada.map((proyecto) => (
                    <div key={proyecto.id}>
                        <div className='info-proyecto'>
                            <h1>{proyecto.name}</h1>
                            <div className='info-proyecto-upper'>
                                <button>{proyecto.state}</button>
                                <h2>{proyecto.dueDate}</h2>
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
