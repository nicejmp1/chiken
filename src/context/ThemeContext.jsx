import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const currentTheme = localStorage.getItem('current_theme') || 'light';
    const [theme, setTheme] = useState(currentTheme);

    useEffect(() => {
        localStorage.setItem('current_theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};