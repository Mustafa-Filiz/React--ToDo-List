import { IconButton, Container, FormControl, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import ListElement from './ListElement';
import { TodoListContext } from '../contexts/TodoListContext';
import { AddCircleOutlineRounded } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    inputField: {
        width: 300,
        margin: '1rem',
    },
    formGroup: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    listContainer: {
        maxWidth: '100% !important',
        display: 'flex',
        justifyContent: 'flex-start',
    },
}));

const Tasks = () => {
    const { days, addTask } = useContext(TodoListContext);
    const classes = useStyles();
    const [newTask, setNewTask] = useState('');
    const [taskDay, setTaskDay] = useState('');

    const handleTaskAdd = (e) => {
        e.preventDefault();
        addTask(newTask, taskDay);
        setNewTask('');
        setTaskDay('');
    };

    return (
        <Box>
            <FormControl variant="standard" className={classes.formGroup}>
                <TextField
                    className={classes.inputField}
                    variant="standard"
                    label="Add task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <TextField
                    select
                    variant="standard"
                    className={classes.inputField}
                    labelId="simple-select-label"
                    id="simple-select"
                    label="Select Task Day"
                    defaultValue=""
                    value={taskDay}
                    onChange={(e) => setTaskDay(e.target.value)}
                >
                    {days.map((day, index) => (
                        <MenuItem key={index} value={`${day}`}>
                            {day}
                        </MenuItem>
                    ))}
                </TextField>
                <IconButton type="submit" size="large" onClick={handleTaskAdd}>
                    <AddCircleOutlineRounded fontSize="large" color="primary" />
                </IconButton>
            </FormControl>
            <Container className={classes.listContainer}>
                <ListElement />
            </Container>
        </Box>
    );
};

export default Tasks;
