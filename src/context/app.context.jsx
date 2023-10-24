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
    });
    const [currentOrder, setOrder] = useState({
        1: 1,
        2: 2,
        3: 3
    });
    const [footerText, setFooter] = useState({
        1: ''
    });


    
    return (
        <AppContext.Provider value={{ link, setLink, boxColor, setBoxColor, currentOrder, setOrder, footerText, setFooter }}>
            { children }
        </AppContext.Provider>
    )
};