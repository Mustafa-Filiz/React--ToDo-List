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
import { ThemeContext } from '../contexts/ThemeContext';

function NavBar() {
    const [auth, setAuth] = useState(true);
    const { isDark, lightTheme, darkTheme, handleTheme } =
        useContext(ThemeContext);

    const theme = isDark ? lightTheme : darkTheme;

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };

    return (
        <div
            style={{ color: theme.text, background: theme.background }}
        >
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
                    <FormControlLabel
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
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
