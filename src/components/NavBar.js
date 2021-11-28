import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    DarkModeRounded,
    EventAvailableRounded,
    LightModeRounded,
} from '@mui/icons-material';
import { ColorModeContext } from '../contexts/ThemeContext';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

function NavBar() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <AppBar position="static" sx={{ width: '100%' }}>
            <Toolbar>
                <EventAvailableRounded fontSize="large" />
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Do Something...
                </Typography>
                <IconButton
                    sx={{ ml: 1 }}
                    onClick={colorMode.toggleColorMode}
                    color="inherit"
                >
                    {theme.palette.mode === 'dark' ? (
                        <LightModeRounded fontSize="large" />
                    ) : (
                        <DarkModeRounded fontSize="large" />
                    )}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
