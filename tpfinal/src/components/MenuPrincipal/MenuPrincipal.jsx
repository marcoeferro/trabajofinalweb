import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography, Toolbar, AppBar, Box, IconButton } from '@mui/material';
import getProjects from '@/utils/projectManager';
import { getEpics } from '@/utils/epicManager';
import { getStories } from '@/utils/storyManager';

const MenuPrincipal = ({ handleOpenSideMenu }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);
    const [proyecto, setProyecto] = useState();
    const [epica, setEpica] = useState();
    const [historia, setHistoria] = useState();


    useEffect(() => {
        getProjects().then((data) => {
            const selectedProyect = data.find(a => a.id === pathnames[1])
            setProyecto(selectedProyect)
        })
        getEpics().then((data) => {
            const selectedEpic = data.find(a => a.id === pathnames[2])
            setEpica(selectedEpic)
        })
        getStories().then((data) => {
            const selectedStory = data.find(a => a.id === pathnames[3])
            setHistoria(selectedStory)
        })
    }, [])

    return (
        <Box sx={{ flexGrow: 1, margin: '30px' }}>
            <AppBar position="absolute">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        {(pathnames.length == 1 && pathnames[0] == 'settings') ? (
                            <IconButton component={Link} to="/">
                                <ArrowBackIcon />
                            </IconButton>
                        ) : <MenuIcon onClick={handleOpenSideMenu} />}
                    </Box>
                    <Box sx={{ flexGrow: 8, textAlign: 'center' }}>
                        {(pathnames.length == 4) ?
                            (<Breadcrumbs separator="›" aria-label="breadcrumb">
                                <Link color="inherit" to={`/my-projects/${pathnames[1]}`}>
                                    <Typography variant="h6">Proyecto {`${proyecto ? proyecto.name : ''}`}</Typography>
                                </Link>
                                <Link color="inherit" to={`/my-projects/${pathnames[1]}/${pathnames[2]}`}>
                                    <Typography variant="h6">Epica {`${epica ? epica.name : ''}`}</Typography>
                                </Link>
                                <Typography color="textPrimary" variant="h6">Historia {`${historia ? historia.name : ''}`}</Typography>
                            </Breadcrumbs>
                            ) : (pathnames.length == 3) ? (
                                <Breadcrumbs separator="›" aria-label="breadcrumb">
                                    <Link color="inherit" to={`/my-projects/${pathnames[1]}`}>
                                        <Typography variant="h6">Proyecto {`${proyecto ? proyecto.name : ''}`}</Typography>
                                    </Link>
                                    <Typography color="textPrimary" variant="h6">Epica {`${epica ? epica.name : ''}`}</Typography>
                                </Breadcrumbs>
                            ) : (pathnames.length == 2) ? (
                                <Breadcrumbs separator="›" aria-label="breadcrumb">
                                    <Typography color="textPrimary" variant="h6">Proyecto {`${proyecto ? proyecto.name : ''}`}</Typography>
                                </Breadcrumbs>
                            ) : (pathnames.length == 1 && pathnames[0] == 'settings') ? (
                                <Breadcrumbs separator="›" aria-label="breadcrumb">
                                    <Typography color="textPrimary" variant="h6">Settings</Typography>
                                </Breadcrumbs>
                            )
                                : <Typography variant="h6">MENU</Typography>}
                    </Box>
                    <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                        {(pathnames.length == 1 && pathnames[0] == 'settings') ? (
                            <></>
                        ) : <IconButton component={Link} to="/settings">
                            <SettingsIcon />
                        </IconButton>}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MenuPrincipal;
