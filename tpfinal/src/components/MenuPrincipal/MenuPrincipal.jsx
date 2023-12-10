import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import './MenuPrincipal.scss';
import SideMenu from '../SideMenu/SideMenu';


const MenuPrincipal = ({ listaProyectos }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false)

    const handleOpenSideMenu = () => setOpenSideMenu(!openSideMenu)

    const [openSettings, setOpenSettings] = useState(false)

    const handleOpenSettings = () => setOpenSettings(!openSettings)

    useEffect(() => {
        console.log(open)
    }, [open])

    return (
        <>
            <div className='container'>
                <MenuIcon className='menu-lateral-icon' onClick={handleOpenSideMenu} />
                <h1 className='titulo'>Titulo</h1>
                <SettingsIcon className='settings-icon' onClick={handleOpenSettings} />
            </div>
            {openSideMenu ? <SideMenu /> : null}
            {openSettings ? <SideMenu /> : null}

        </>



    );
};

export default MenuPrincipal;
