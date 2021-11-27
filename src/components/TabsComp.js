import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Tasks from './Tasks';
import ThisWeek from './ThisWeek';

const useStyles = makeStyles(theme => ({
    tabField: {
        width: 200,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function TabsComp() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                display: 'flex',
                height: "90vh",
            }}
        >
            <Tabs
                className={classes.tabField}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Tasks" />
                <Tab label="This Week" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Tasks />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ThisWeek />
            </TabPanel>
        </Box>
    );
}

export default TabsComp;
