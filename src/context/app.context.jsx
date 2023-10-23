import { createContext, useState } from "react";


export const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
    const [link, setLink] = useState({
        1: '',
        2: '',
        3: ''
    });
    const [boxColor, setBoxColor] = useState({
        1: '#ffffff',
        2: '#ffffff',
        3: '#ffffff'
    })


    
    return (
        <AppContext.Provider value={{ link, setLink, boxColor, setBoxColor }}>
            { children }
        </AppContext.Provider>
    )
};