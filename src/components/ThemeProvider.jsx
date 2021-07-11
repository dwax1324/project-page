import React, { useContext, useEffect, useState } from 'react';


const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}




export function ThemeProvider({ children }) {

    const [darkTheme, setDarkTheme] = useState(false);
    console.log(typeof (localStorage.getItem('darkTheme')))
    darkTheme ? document.body.style.backgroundColor = "#111"
        : document.body.style.backgroundColor = "#ccc"
    useEffect(() => {
        if (localStorage.getItem('darkTheme') !== null) {
            if (localStorage.getItem('darkTheme') === "true") {
                setDarkTheme(true);
            } else {
                setDarkTheme(false);
            }
        }
    }, [])

    function toggleTheme() {
        setDarkTheme(prev => !prev)
        localStorage.setItem('darkTheme', !darkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}