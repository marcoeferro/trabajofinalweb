import React, { useState } from 'react';
import './SideMenu.scss';
import profilePlaceholder from './../../assets/img/profileplaceholder.jpg';

function SideMenu() {
    const [menuExpanded, setMenuExpanded] = useState(false);

    const handleMenuToggle = () => {
        setMenuExpanded(!menuExpanded);
    };

    return (
        <div className={`menu-container ${menuExpanded ? 'expanded' : ''}`}>
            <div className='menu-content'>
                <div className="menu-header">
                    <p>SARAZA123</p>
                </div>
                <div className="menu-body">
                    <button type="button" className="btn btn-primary">Home</button>
                    <button type="button" className="btn btn-primary">My Projects</button>
                    <button type="button" className="btn btn-primary">Stories</button>
                </div>
                <div className="menu-footer">
                    <img src={profilePlaceholder} alt="profile picture" className='footer-profile-picture' />
                    <div className="footer-text">
                        <h5>Louise Joy King</h5>
                        <h6>louisejoyk@email.com</h6>
                    </div>
                </div>
            </div>
            <div className='menu-burgermenu' onClick={handleMenuToggle}>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
        </div>
    );
}

export default SideMenu;
