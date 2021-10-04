import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
import {
    DarkModeRounded,
    EventAvailableRounded,
    LightModeRounded,
} from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import { ColorModeContext, ThemeContext } from '../contexts/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';


function NavBar() {
    const [auth, setAuth] = useState(true);
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <div style={{ color: theme.text, bgcolor: theme.background }}>
            <AppBar position="static">
                <Toolbar>
                    <EventAvailableRounded fontSize="large" />
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Do Something...
                    </Typography>
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={colorMode.toggleColorMode}
                        color="inherit"
                    >
                        {theme.palette.mode === 'dark' ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                    {/* <FormControlLabel
                        control={
                            <Checkbox
                                icon={
                                    <DarkModeRounded
                                        color="secondary"
                                        fontSize="large"
                                    />
                                }
                                checkedIcon={
                                    <LightModeRounded
                                        color="secondary"
                                        fontSize="large"
                                    />
                                }
                                // checked={auth}
                                // onChange={handleChange}
                                aria-label="login switch"
                            />
                        }
                        label=""
                        // {auth ? 'Logout' : 'Login'}
                    /> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
