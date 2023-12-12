import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import './MenuPrincipal.scss';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';

const MenuPrincipal = ({ handleOpenSideMenu }) => {
    const [openSettings, setOpenSettings] = useState(false)
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const handleOpenSettings = () => setOpenSettings(!openSettings)

    return (
        <>
            <div className='menu-principal-container'>
                <MenuIcon className='menu-lateral-icon' onClick={handleOpenSideMenu} />
                {(pathnames.length == 5) ?
                    (<Breadcrumbs separator="›" aria-label="breadcrumb">

                        <Link color="inherit" to={`/my-projects/${pathnames[1]}`}>
                            Proyecto {`${pathnames[1]}`}
                        </Link>
                        <Link color="inherit" to={`/my-projects/${pathnames[4]}/epics/${pathnames[3]}`}>
                            Epica {`${pathnames[3]}`}
                        </Link>
                        <Typography color="textPrimary">Historia {`${pathnames[4]}`}</Typography>
                    </Breadcrumbs>
                    ) : (pathnames.length == 4) ? (
                        <Breadcrumbs separator="›" aria-label="breadcrumb">
                            <Link color="inherit" to={`/my-projects/${pathnames[1]}`}>
                                Proyecto {`${pathnames[1]}`}
                            </Link>
                            {pathnames.length > 3 && <Typography color="textPrimary">Epica {`${pathnames[3]}`}</Typography>}
                        </Breadcrumbs>
                    ) : (pathnames.length == 2) ? (
                        <Breadcrumbs separator="›" aria-label="breadcrumb">
                            <Typography color="textPrimary">Proyecto {`${pathnames[3]}`}</Typography>
                        </Breadcrumbs>
                    )
                        : "MENU"}
                <Link className='menu-principal-link' to={'/settings'}>
                    <SettingsIcon className='settings-icon' onClick={handleOpenSettings} />
                </Link>
            </div>
        </>
    );
};

export default MenuPrincipal;