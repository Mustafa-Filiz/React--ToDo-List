import React, { useContext, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import {
    CheckCircleOutlineRounded,
    DeleteRounded,
    RadioButtonUncheckedRounded,
} from '@mui/icons-material';
import { TodoListContext } from '../contexts/TodoListContext';

function ListElement() {
    const [checked, setChecked] = useState([0]);
    const { todoList, deleteTask } = useContext(TodoListContext);

    const handleTaskDelete = (id) => {
        deleteTask(id);
    };

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
            {todoList.map((todo) => {
                const labelId = `checkbox-list-label-${todo.id}`;

                return (
                    <ListItem
                        // sx={{textDecoration : "line-through", opacity : 0.5}}
                        key={todo.id}
                        id={todo.id}
                        secondaryAction={
                            <Tooltip title="Delete">
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => handleTaskDelete(todo.id)}
                                >
                                    <DeleteRounded color="error" />
                                </IconButton>
                            </Tooltip>
                        }
                        disablePadding
                    >
                        <ListItemButton
                            role={undefined}
                            onClick={handleToggle(todo.id)}
                            dense
                        >
                            <ListItemIcon>
                                <Checkbox
                                    icon={<RadioButtonUncheckedRounded />}
                                    checkedIcon={<CheckCircleOutlineRounded />}
                                    edge="start"
                                    checked={checked.indexOf(todo.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={labelId}
                                primary={todo.task}
                                secondary={todo.day}
                                primaryTypographyProps={{
                                    color: 'forestgreen',
                                    fontSize: 20,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default ListElement;
