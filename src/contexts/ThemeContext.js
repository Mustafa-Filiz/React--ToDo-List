import React, {createContext, useState} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const [isDark, setIsDark] = useState(true);
    const [lightTheme, setLightTheme] = useState({
        text : "#000",
        background : "primary"
    });
    const [darkTheme, setDarkTheme] = useState({
        text : "#fff",
        background : "secondary"
    })

    const handleTheme = () => {
        setIsDark(!isDark)
    }




    return (
        <ThemeContext.Provider value={{isDark, lightTheme, darkTheme, handleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;