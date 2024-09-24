import { createContext, useState } from "react";


const INITIAL_THEME_VALUE =  JSON.parse(localStorage.getItem('isDarkMode')); 

export const ThemeContext = createContext(INITIAL_THEME_VALUE);

const ThemWrapper  = ({
    children
}) => {
    const [isDarkModeOn, setIsDarkModeOn] = useState(INITIAL_THEME_VALUE);

    return (
        <ThemeContext.Provider value={{
            isDarkModeOn,
            setIsDarkModeOn
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemWrapper; 