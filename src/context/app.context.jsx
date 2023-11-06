import { createContext, useState } from "react";
export const AppContext = createContext();

/*
localStorage.removeItem('link')
localStorage.removeItem('boxColor')
localStorage.removeItem('footerText')
localStorage.removeItem('currentOrder')
*/

export const AppContextProvider = ({ children }) => {
    const [link, setLink] = useState(JSON.parse(localStorage.getItem('link')) || {
        1: '',
        2: '',
        3: ''
    });
    const [boxColor, setBoxColor] = useState(JSON.parse(localStorage.getItem('boxColor')) || {
        1: '#ffffff',
        2: '#ffffff',
        3: '#ffffff'
    });
    const [currentOrder, setOrder] = useState(JSON.parse(localStorage.getItem('currentOrder')) || {
        1: 1,
        2: 2,
        3: 3
    });
    const [footerText, setFooter] = useState(JSON.parse(localStorage.getItem('footerText')) || {
        1: ''
    });

 
    
    return (
        <AppContext.Provider value={{ link, setLink, boxColor, setBoxColor, currentOrder, setOrder, footerText, setFooter }}>
            { children }
        </AppContext.Provider>
    )
};