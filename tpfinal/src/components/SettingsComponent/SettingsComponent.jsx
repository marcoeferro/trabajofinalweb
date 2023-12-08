import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import './SettingsComponent.scss';
import SideMenu from '../SideMenu/SideMenu';
import profilePlaceholder from './../../assets/img/profileplaceholder.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
const SettingsComponent = () => {

    const [mode, setMode] = useState(false);

    const changeMode = () => setMode(!mode)
    return (
        <div className='settings-container'>
            <div className='settings-header'>
                <SettingsIcon className='settings-icon' />
                <h1>Settings</h1>
            </div>
            <div className='settings-body'>
                <div className=''>

                </div>
                <div className='settings-body-header'>
                    <div className='settings-body-back'>
                        <div className='settings-body-back-header'>
                            <ArrowBackIcon className='settings-icon' />
                            <h4 className='settings-icon'>home</h4>
                        </div>
                        <h2>Settings</h2>
                    </div>
                    <div className="menu-footer">
                        <img src={profilePlaceholder} alt="profile picture" className='footer-profile-picture' />
                        <div className="footer-text">
                            <h5>Louise Joy King</h5>
                            <h6>louisejoyk@email.com</h6>
                        </div>
                    </div>

                </div>
                <div className='settings-opciones'>
                    <div className='settings-option' onClick={changeMode}>
                        {mode ? <DarkModeIcon /> : <LightMode />}<span>Theme</span>
                    </div>
                    <div className='settings-option'>
                        <LogoutIcon /><span>loguout</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsComponent;
