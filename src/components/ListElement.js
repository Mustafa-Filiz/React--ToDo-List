import React, { useContext, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { Container, Tooltip } from '@mui/material';
import {
    CheckCircleOutlineRounded,
    DeleteRounded,
    EditRounded,
    RadioButtonUncheckedRounded,
} from '@mui/icons-material';
import { TodoListContext } from '../contexts/TodoListContext';

function ListElement() {
    const [checked, setChecked] = useState([0]);
    const {todoList} = useContext(TodoListContext);

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
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        // sx={{textDecoration : "line-through", opacity : 0.5}}
                        key={value}
                        secondaryAction={
                            <Container>
                                <Tooltip title="Edit">
                                <IconButton edge="end" aria-label="comments">
                                    <EditRounded color="success" />
                                </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                <IconButton edge="end" aria-label="comments">
                                    <DeleteRounded color="error" />
                                </IconButton>
                                </Tooltip>
                            </Container>
                        }
                        disablePadding
                    >
                        <ListItemButton
                            role={undefined}
                            onClick={handleToggle(value)}
                            dense
                        >
                            <ListItemIcon>
                                <Checkbox
                                    icon={<RadioButtonUncheckedRounded />}
                                    checkedIcon={<CheckCircleOutlineRounded />}
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={labelId}
                                primary={`Task item ${value + 1}`}
                                secondary={'Task Day'}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default ListElement;
