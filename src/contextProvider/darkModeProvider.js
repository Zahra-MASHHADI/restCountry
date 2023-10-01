import { useState } from "react";
import { createContext } from "react";

export const ContextDarkModeProvider = createContext()
export default function DarkModeContext({children}){
    const [isDarkMode, setIsDarkMode] = useState(false);
    return(
        <ContextDarkModeProvider.Provider value={[isDarkMode , setIsDarkMode]}>
            {children}
        </ContextDarkModeProvider.Provider>
    )
}