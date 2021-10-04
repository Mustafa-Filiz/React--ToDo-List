import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ArrowRightRounded } from '@mui/icons-material';
// import { todoListContext } from '../contexts/TodoListContext';

function DayCardComp({ day, dailyTasks }) {
    // const { todoList } = useContext(todoListContext);

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
