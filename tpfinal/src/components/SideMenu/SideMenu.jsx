import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import profilePlaceholder from './../../assets/img/profileplaceholder.jpg'

export default function TemporaryDrawer({ openSideMenu, handleOpenSideMenu }) {
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            console.log("NASHEI")
            return;
        }

        handleOpenSideMenu(open);
    };

    return (
        <div>
            <Drawer
                anchor="left"
                open={openSideMenu}
                onClose={toggleDrawer(false)}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Box sx={{ p: 2 }}>
                        <div className="menu-header">
                            <p>SARAZA123</p>
                        </div>
                    </Box>
                    <Divider />
                    <Box sx={{ flexGrow: 1, p: 2 }}>
                        <div className="menu-body">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton component={Link} to={"/"} >
                                        <ListItemText primary="Home" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component={Link} to={"/my-projects"} >
                                        <ListItemText primary="My Projects" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component={Link} to={"/my-stories"} >
                                        <ListItemText primary="Stories" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </div>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                        <Avatar alt="profile picture" src={profilePlaceholder} className='footer-profile-picture' />
                        <div className="footer-text">
                            <h5>Louise Joy King</h5>
                            <h6>louisejoyk@email.com</h6>
                        </div>
                    </Box>
                </Box>
            </Drawer>
        </div>
    );
}
