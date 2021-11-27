import React, { useContext, useState } from 'react';
import { Grid, Paper } from '@mui/material';
import { TodoListContext } from '../contexts/TodoListContext';
import DayCardComp from './DayCardComp';
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
    const [dailyTasks, setDailyTasks] = useState([]);

    // console.log(todoList);

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
                    <Paper className={classes.paper} key={index}>
                        {day}
                        {items.map((item) => (
                            <li key={item.id}> {item.task}</li>
                        ))}
                    </Paper>
                );
            })}
        </Grid>
    );
}

export default ThisWeek;
