import React, { useContext } from 'react';
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
    const { todoList, deleteTask, toggleCompleted } = useContext(TodoListContext);

    const handleTaskDelete = (id) => {
        deleteTask(id);
    };

    const handleToggle = (id) => () => {
        toggleCompleted(id)
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
        >
            {todoList.map((todo) => {
                const labelid = `checkbox-list-label-${todo.id}`;

                return (
                    <ListItem
                        sx={todo.completed ? {textDecoration: 'line-through', opacity: 0.5} : {}}
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
                                    checked={todo.completed}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelid }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={labelid}
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
