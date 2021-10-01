import React, { useState } from 'react';
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

function NavBar() {
    const [auth, setAuth] = useState(true);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <EventAvailableRounded fontSize="large" />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Do Something...
                    </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<DarkModeRounded color="secondary" />}
                                checkedIcon={<LightModeRounded color="secondary"/>}
                                checked={auth}
                                onChange={handleChange}
                                aria-label="login switch"
                            />
                        }
                        label=""
                        // {auth ? 'Logout' : 'Login'}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
