import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
import DayCardComp from './DayCardComp';

function ThisWeek() {
    const { todoList } = useContext(TodoListContext);
    const days = Object.keys(todoList);
    const tasks = Object.values(todoList);
    let task;


    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{margin : 0, padding : 0, maxWidth : 1300}}>
            {days.map((day) => {
              tasks.map((item) => {return task=item})
              return (
                <Grid item>
                  <DayCardComp day={day} task={task} />
                </Grid>
              )
            })}
        </Grid>
    );
}

export default ThisWeek;
