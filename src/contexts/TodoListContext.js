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
        setTodoList((prevTodos) => {
            return [
                ...prevTodos,
                {  id: Math.random(), task: todo, day, completed: false},
            ]
        });
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== Number(id)));
    };

    const toggleCompleted = (id) => {
        setTodoList(todoList.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    useEffect(() => {
        const localList = window.localStorage.getItem('todo List');
        if (!localList) return

        setTodoList(JSON.parse(localList));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('todo List', JSON.stringify(todoList));
    }, [todoList]);

    const values = {
        todoList,
        days,
        addTask,
        deleteTask,
        toggleCompleted,
    };

    return (
        <TodoListContext.Provider value={values}>
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListContextProvider;
