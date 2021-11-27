import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ArrowRightRounded } from '@mui/icons-material';

function DayCardComp({ day, dailyTasks }) {

    return (
        <Card sx={{ minWidth: 220 }}>
            <CardContent>
                <Typography sx={{ fontSize: 24 }} gutterBottom>
                    {day}
                </Typography>
                <List>
                    {dailyTasks.map((task) => {
                        return (
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightRounded fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary={task} />
                            </ListItem>
                        );
                    })}
                </List>
            </CardContent>
        </Card>
    );
}

export default DayCardComp;
