import React, { useState, createContext } from 'react';

export const TodoListContext = createContext();

const initialState = {
    Mustafa: ['merhaba dünya ', 'world'],
    Tuesday: ['hello', 'world'],
    Wednesday: ['hello', 'world'],
    Thursday: ['hello', 'world'],
    Friday: ['hello', 'world'],
    Saturday: ['hello', 'world'],
    Sunday: ['hello', 'world'],
};

const TodoListContextProvider = ({ children }) => {

    const [todoList, setTodoList] = useState(initialState);

    return (
        <TodoListContext.Provider value={{ todoList }}>
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListContextProvider;
