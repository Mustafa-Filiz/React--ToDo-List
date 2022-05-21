import React, { useContext } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { TodoListContext } from '../contexts/TodoListContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
    return {
        paper: {
            width: 'calc((100vw - 550px) / 7)',
            height: 'calc(100vh - 400px)',
            padding: "10px", 
        },
    };
});

function ThisWeek() {
    const classes = useStyles();
    const { todoList, days } = useContext(TodoListContext);

    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            {days.map((day, index) => {
                const items = todoList.filter((todo) => todo.day === day);
                return (
                    <Grid item key={index}>
                        <Paper className={classes.paper} elevation={8}>
                            <Typography variant="h6"> {day}</Typography>
                            {items.map((item) => (
                                <li key={item.id}> {item.task}</li>
                            ))}
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default ThisWeek;
