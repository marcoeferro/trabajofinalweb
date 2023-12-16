import React from 'react';
import { Modal, Button, Box, Grid } from '@mui/material';
import CreateProject from '../create-project';
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
            <Grid container spacing={2}>
                {listaProyectos && listaProyectos.map((proyecto) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={proyecto.id}>
                        <ProjectCard project={proyecto} />
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default Home;
