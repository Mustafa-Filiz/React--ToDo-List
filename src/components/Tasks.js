import { Container, FormControl, FormGroup, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React, {useContext} from 'react';
import ListElement from './ListElement';
import { TodoListContext } from '../contexts/TodoListContext';

const useStyles = makeStyles({
    inputField: {
        width: 300,
        margin: "20px"
    },
});

const Tasks = () => {
    const {todoList} = useContext(TodoListContext)
    const classes = useStyles();
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    return (
        <Box>
            <FormControl className={classes.inputField}>
                <TextField
                    
                    variant="standard"
                    label="Add task"
                />
            </FormControl>
            <FormControl variant="standard" className={classes.inputField}>
                <InputLabel id="simple-select-label">
                    Select Task Day
                </InputLabel>
                <Select
                    
                    labelId="simple-select-label"
                    id="simple-select"
                    // value={age}
                    label="Select Task Day"
                    // onChange={handleChange}
                >
                    {days.map((day) => (
                        <MenuItem value={day}>{day}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Container>
                <ListElement />
            </Container>
        </Box>
    );
};

export default Tasks;
