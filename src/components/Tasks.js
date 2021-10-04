import {
    IconButton,
    Container,
    FormControl,
    TextField,
    FormGroup,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
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
    const { todoList, days, newTask, setNewTask, taskDay, setTaskDay } =
        useContext(TodoListContext);
    const classes = useStyles();

    return (
        <Box>
            <FormGroup className={classes.formGroup}>
                <FormControl className={classes.inputField}>
                    <TextField variant="standard" label="Add task" />
                </FormControl>
                <FormControl variant="standard" className={classes.inputField}>
                    <InputLabel id="simple-select-label">
                        Select Task Day
                    </InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="simple-select"
                        label="Select Task Day"
                        defaultValue=""
                        // onChange={(e) => console.log(e.target.value)}
                    >
                        {days.map((day) => (
                            <MenuItem value={`${day}`}>{day}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <IconButton>
                    <AddCircleOutlineRounded fontSize="large" color="primary" />
                </IconButton>
            </FormGroup>
            <Container>
                <ListElement />
            </Container>
        </Box>
    );
};

export default Tasks;
