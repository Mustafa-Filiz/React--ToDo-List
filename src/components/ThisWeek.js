import React, { useContext } from 'react';
import { Grid, Paper } from '@mui/material';
import { TodoListContext } from '../contexts/TodoListContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
    return {
        paper: {
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
            sx={{ margin: 0, padding: 0, maxWidth: 1300 }}
        >
            {days.map((day, index) => {
                const items = todoList.filter((todo) => todo.day === day);
                return (
                    <Grid item key={index}>
                        <Paper className={classes.paper}>
                            {day}
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
