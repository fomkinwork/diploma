import React, {createContext, FC, useContext, useState} from 'react';
import {WithChildren} from "../types/withChildren";

enum ThemeVariant {
    light = "light",
    dark = "dark"
}

interface ThemeContextValue {
    theme: string
    setTheme: (theme: ThemeVariant) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const ThemeProvider: FC<WithChildren> = ({ children }) =>  {
    const activeTheme = localStorage.getItem("theme");

    const [theme, setTheme] = useState(activeTheme || ThemeVariant.dark);

    const handleSetTheme = (newTheme: string) => { setTheme(newTheme) }

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: handleSetTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used with ThemeProvider")
    }

    return context
}

export {useTheme, ThemeProvider, ThemeVariant}