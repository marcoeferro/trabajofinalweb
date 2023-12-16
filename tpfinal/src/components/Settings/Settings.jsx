import React, { useState } from 'react';
import { Box, Typography, IconButton, Avatar, Link as MuiLink, Container, Grid } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
import profilePlaceholder from './../../assets/img/profileplaceholder.jpg'

const Settings = () => {
    const [mode, setMode] = useState(false);
    const changeMode = () => setMode(!mode);

    return (
        <Grid container direction="column" style={{ height: '100vh' }}>
            <Grid item container xs={8} alignItems={'center'} justifyContent={'center'} direction={'column'}>
                <Box>
                    <IconButton onClick={changeMode}>
                        {mode ? <DarkModeIcon /> : <LightMode />}
                    </IconButton>
                    <Typography display="inline">Theme</Typography>
                </Box>
                <Box>
                    <IconButton>
                        <LogoutIcon />
                    </IconButton>
                    <Typography display="inline">Logout</Typography>
                </Box>
            </Grid>
            <Grid item container xs={2} alignItems="center">
                <Avatar src={profilePlaceholder} alt="profile picture" />
                <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle1">Louise Joy King</Typography>
                    <Typography variant="subtitle2">louisejoyk@email.com</Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Settings;
