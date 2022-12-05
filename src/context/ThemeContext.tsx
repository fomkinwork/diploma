import React, {createContext, FC, useContext, useEffect, useMemo, useState} from 'react';
import {WithChildren} from "../types/withChildren";

enum ThemeVariant {
    light = "light",
    dark = "dark"
}

interface ThemeContextValue {
    theme: string
    setTheme: (theme: ThemeVariant) => void
    isLightTheme: boolean
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const ThemeProvider: FC<WithChildren> = ({ children }) =>  {
    const activeTheme = localStorage.getItem("theme");

    const [theme, setTheme] = useState(activeTheme || ThemeVariant.dark);

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
            setTheme(currentTheme);
        }
    },[theme])

    const handleSetTheme = (newTheme: ThemeVariant) => {
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    const isLightTheme = useMemo(()=> theme === ThemeVariant.light, [theme])

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: handleSetTheme,
            isLightTheme: isLightTheme
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