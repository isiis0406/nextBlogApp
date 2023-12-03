"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

// Get the current theme from local storage
const getFromLocalStorages = () => {
    // If the transition is completed, we get the theme from the local storage
    if (typeof window !== undefined) {
        const value = localStorage.getItem('theme')
        return value || 'light'
    }
} 


export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorages()
    })

    const toggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])
    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}