import {
    IconButton,
    Container,
    FormControl,
    TextField,
    FormGroup,
    Input,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import ListElement from './ListElement';
import { TodoListContext } from '../contexts/TodoListContext';
import { AddCircleOutlineRounded } from '@mui/icons-material';

const useStyles = makeStyles({
    inputField: {
        width: 300,
        marginRight: '20px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'row',
    },
});

const Tasks = () => {
    const { todoList, days, addTask } = useContext(TodoListContext);
    const classes = useStyles();
    const [newTask, setNewTask] = useState('');
    const [taskDay, setTaskDay] = useState('');

    const handleTaskAdd = (e) => {
        e.preventDefault();
        addTask(newTask, taskDay);
        setNewTask("");
        setTaskDay("");
    }



    return (
        <Box>
            {/* <FormGroup
                className={classes.formGroup}
                // onSubmit={handleTaskAdd(newTask, taskDay)}
            > */}
            {/* <FormControl className={classes.inputField}>

                </FormControl> */}
            <FormControl variant="standard" className={classes.formGroup} >
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
                    {days.map((day) => (
                        <MenuItem value={`${day}`}>{day}</MenuItem>
                    ))}
                </TextField>
                <IconButton type="submit" onClick={handleTaskAdd}>
                    <AddCircleOutlineRounded fontSize="large" color="primary" />
                </IconButton>
            </FormControl>
            {/* </FormGroup> */}
            <Container>
                <ListElement />
            </Container>
        </Box>
    );
};

export default Tasks;
