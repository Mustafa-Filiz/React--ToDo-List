import React, { useState, createContext, useEffect } from 'react';

export const TodoListContext = createContext();

const initialState = [];

const TodoListContextProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(initialState);
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    const addTask = (todo, day) => {
        if (!todo) return
        setTodoList([
            ...todoList,
            { task: todo, day, id: Math.random()},
        ]);
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== Number(id)));
    };

    useEffect(() => {
        const localList = window.localStorage.getItem('todo List');
        if (localList.length) {
            setTodoList(JSON.parse(localList));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('todo List', JSON.stringify(todoList));
    }, [todoList]);

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
