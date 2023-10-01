import { useState } from "react";
import { createContext } from "react";

export const ContexDarkModeProvider = createContext()
export default function DarkModeContex({children}){
    const [isDarkMode, setIsDarkMode] = useState(false);
    return(
        <ContexDarkModeProvider.Provider value={[isDarkMode , setIsDarkMode]}>
            {children}
        </ContexDarkModeProvider.Provider>
    )
}