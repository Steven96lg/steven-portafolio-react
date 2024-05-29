
import { createContext, useState } from "react"

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        if(theme === "dark") return setTheme("light")
        if(theme === "light") return setTheme("dark")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}