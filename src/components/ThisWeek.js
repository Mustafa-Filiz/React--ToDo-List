import React, { useContext, useState } from 'react';
import { Grid } from '@mui/material';
import { TodoListContext } from '../contexts/TodoListContext';
import DayCardComp from './DayCardComp';

function ThisWeek() {
    const { todoList, days } = useContext(TodoListContext);
    const [dailyTasks, setDailyTasks] = useState([]);

    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ margin: 0, padding: 0, maxWidth: 1300 }}
        >
            Hello
        </Grid>
    );
}

export default ThisWeek;
