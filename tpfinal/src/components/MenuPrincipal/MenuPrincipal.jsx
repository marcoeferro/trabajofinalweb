import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography, Toolbar, AppBar, Box, IconButton } from '@mui/material';

const MenuPrincipal = ({ handleOpenSideMenu }) => {
    const [openSettings, setOpenSettings] = useState(false)
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);
    const handleOpenSettings = () => setOpenSettings(!openSettings)

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
                        {(pathnames.length == 5) ?
                            (<Breadcrumbs separator="›" aria-label="breadcrumb">
                                <Link color="inherit" to={`/my-projects/${pathnames[1]}`}>
                                    <Typography variant="h6">Proyecto {`${pathnames[1]}`}</Typography>
                                </Link>
                                <Link color="inherit" to={`/my-projects/${pathnames[4]}/epics/${pathnames[3]}`}>
                                    <Typography variant="h6">Epica {`${pathnames[3]}`}</Typography>
                                </Link>
                                <Typography color="textPrimary" variant="h6">Historia {`${pathnames[4]}`}</Typography>
                            </Breadcrumbs>
                            ) : (pathnames.length == 4) ? (
                                <Breadcrumbs separator="›" aria-label="breadcrumb">
                                    <Link color="inherit" to={`/my-projects/${pathnames[1]}`}>
                                        <Typography variant="h6">Proyecto {`${pathnames[1]}`}</Typography>
                                    </Link>
                                    {pathnames.length > 3 && <Typography color="textPrimary" variant="h6">Epica {`${pathnames[3]}`}</Typography>}
                                </Breadcrumbs>
                            ) : (pathnames.length == 2) ? (
                                <Breadcrumbs separator="›" aria-label="breadcrumb">
                                    <Typography color="textPrimary" variant="h6">Proyecto {`${pathnames[1]}`}</Typography>
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
                            <SettingsIcon onClick={handleOpenSettings} />
                        </IconButton>}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MenuPrincipal;
