import React, { useContext } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { TodoListContext } from '../contexts/TodoListContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
    return {
        paper: {
            width: 'calc(100vw - 400px)',
            height: '9rem',
            padding: '2rem',
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
            sx={{ margin: 0, padding: 0 }}
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
