import React, { useState, createContext } from 'react';

export const TodoListContext = createContext();

const initialState = [
    { id: 1, task: 'ptesi', day: 'Monday' },
    { id: 2, task: 'salı', day: 'Tuesday' },
    { id: 3, task: 'çarş', day: 'Wednesday' },
    { id: 4, task: 'perş', day: 'Thursday' },
    { id: 5, task: 'cum', day: 'Friday' },
    { id: 6, task: 'cts', day: 'Saturday' },
    { id: 7, task: 'paz', day: 'Sunday' },
];

const TodoListContextProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(initialState);
    const [days, setDays] = useState([
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]);


    const addTask = (todo, day) => {
        setTodoList([
            ...todoList,
            {task : todo, day, id : Math.random() }
        ])
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== Number(id)))
    }

    const values = {
        todoList,
        days,
        addTask,
        deleteTask
    };

    return (
        <TodoListContext.Provider value={values}>
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListContextProvider;
