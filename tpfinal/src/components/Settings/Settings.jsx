import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import './Settings.scss';
import profilePlaceholder from './../../assets/img/profileplaceholder.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
const Settings = () => {

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
                            <Link className='settings-link' to={`/`}>
                                <ArrowBackIcon className='settings-icon' />
                            </Link>
                            <Link className='settings-link' to={`/`}>
                                <h4 className='settings-icon'>HOME</h4>
                            </Link>
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

export default Settings;
