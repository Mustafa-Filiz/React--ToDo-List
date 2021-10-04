import React, { useState, createContext } from 'react';

export const TodoListContext = createContext();

const initialState = [];

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
        deleteTask,
    };

    return (
        <TodoListContext.Provider value={values}>
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListContextProvider;
