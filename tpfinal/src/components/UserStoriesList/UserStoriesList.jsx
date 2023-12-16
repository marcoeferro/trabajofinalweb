import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, IconButton } from '@mui/material';
import CreateStory from '../create-story';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import UserStorieCard from '../UserStorieCard/UserStorieCard';
import getStories from './../../utils/storyManager'
import { InputAdornment } from "@mui/material";

const UserStoriesList = () => {
  const [stories, setStories] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await getStories();
        setStories(projectsData);
      } catch (error) {
        console.error('Error al obtener historias:', error);
      }
    };

    fetchData();
  }, []);

  //listas
  const [lista, setLista] = useState(stories);
  const [listaFiltrada, setListaFiltrada] = useState(stories);

  // Inicializa los filtros
  const [filtrado, setFiltrado] = useState(false);
  const [filtroName, setfiltroName] = useState('');

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Inicializador de estados
  useEffect(() => {
    setLista(stories);
    setListaFiltrada(stories);
  }, [stories]);

  //Funciones Filtro
  const filtrarLista = () => {
    if (!filtroName) {
      limpiarFiltros()
    } else {
      const nuevaListaFiltrada = lista.filter((lista) => (lista.name == filtroName))
      setListaFiltrada(nuevaListaFiltrada)
    }
    setFiltrado(!filtrado)
  };

  const limpiarFiltros = () => {
    setfiltroName('');
    setListaFiltrada(lista);
    setFiltrado(!filtrado)
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>+</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <CreateStory onClose={handleClose} />
        </div>
      </Modal>
      <div>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="filtroName"
          label="Ingrese el Name"
          name="filtroName"
          autoComplete="filtroName"
          autoFocus
          value={filtroName || ''}
          onChange={(e) => setfiltroName(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!filtrado && <IconButton onClick={filtrarLista}><FilterAltIcon /></IconButton>}
                {filtrado && <IconButton onClick={limpiarFiltros}><FilterAltOffIcon /></IconButton>}
              </InputAdornment>
            ),
          }}
        />

      </div >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {listaFiltrada && listaFiltrada.map((storie) => (
          <div key={storie.id}>
            <div>
              <UserStorieCard storie={storie} />
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default UserStoriesList;
