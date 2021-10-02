import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ArrowRightRounded } from '@mui/icons-material';

function DayCardComp({ day, task }) {
    return (
        <Card sx={{ minWidth: 220 }}>
            <CardContent>
                <Typography sx={{ fontSize: 24 }} gutterBottom>
                    {day}
                </Typography>
                <List>
                    {task.map((item) => {
                        return (
                            <ListItem>
                                <ListItemIcon><ArrowRightRounded fontSize="large" /></ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        );
                    })}
                </List>
            </CardContent>
        </Card>
    );
}

export default DayCardComp;
