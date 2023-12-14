import React from 'react';
import './Home.scss';
import { Modal, Button, Box } from '@mui/material';
import CreateProject from '../create-project';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
const Home = ({ listaProyectos }) => {

    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Button variant='outlined' onClick={handleOpen}>+</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <CreateProject onClose={handleClose} />
                </Box>
            </Modal>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '800px', overflow: 'auto' }}>
                {listaProyectos && listaProyectos.map((proyecto) => (
                    <Box key={proyecto.id}>
                        <ProjectCard project={proyecto} />
                    </Box>
                ))}
            </Box>
        </Box >

    );
};

export default Home;
