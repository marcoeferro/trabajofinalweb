import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography, Toolbar, AppBar, Box } from '@mui/material';

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
                        <MenuIcon onClick={handleOpenSideMenu} />
                    </Box>
                    <Box sx={{ flexGrow: 8, textAlign: 'center' }}>
                        {(pathnames.length == 5) ?
                            (<Breadcrumbs separator="›" aria-label="breadcrumb">
                                <Link color="inherit" to={`/my-projects/${pathnames[1]}`}>
                                    <Typography variant="body1">Proyecto {`${pathnames[1]}`}</Typography>
                                </Link>
                                <Link color="inherit" to={`/my-projects/${pathnames[4]}/epics/${pathnames[3]}`}>
                                    <Typography variant="body1">Epica {`${pathnames[3]}`}</Typography>
                                </Link>
                                <Typography color="textPrimary" variant="body1">Historia {`${pathnames[4]}`}</Typography>
                            </Breadcrumbs>
                            ) : (pathnames.length == 4) ? (
                                <Breadcrumbs separator="›" aria-label="breadcrumb">
                                    <Link color="inherit" to={`/my-projects/${pathnames[1]}`}>
                                        <Typography variant="body1">Proyecto {`${pathnames[1]}`}</Typography>
                                    </Link>
                                    {pathnames.length > 3 && <Typography color="textPrimary" variant="body1">Epica {`${pathnames[3]}`}</Typography>}
                                </Breadcrumbs>
                            ) : (pathnames.length == 2) ? (
                                <Breadcrumbs separator="›" aria-label="breadcrumb">
                                    <Typography color="textPrimary" variant="body1">Proyecto {`${pathnames[1]}`}</Typography>
                                </Breadcrumbs>
                            )
                                : <Typography variant="h6">MENU</Typography>}
                    </Box>
                    <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                        <Link to={'/settings'}>
                            <SettingsIcon onClick={handleOpenSettings} />
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MenuPrincipal;
