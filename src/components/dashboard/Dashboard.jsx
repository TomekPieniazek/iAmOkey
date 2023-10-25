import './Dashboard.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';

const Dashboard = () => {
    // TO PRZENOSIMY DO  CONTEXTU -> W DASHBOARD JEST JEDNA FUNKCJA, KTÓRA USTAWIA LINK DLA WYBRANEGO SLIDE'U
   const { setLink, boxColor, setBoxColor,currentOrder, setOrder, footerText, setFooter } = useContext(AppContext);

    const setFooterText = (e) => {
        const fNumber = e.target.name;
        const fValue = e.target.value;

        setFooter(prevState => ({
            ...prevState,
            [fNumber]: fValue
        }));
    }

   const setImage = (e) => {
    const imageNumber = e.target.name;
    const imageValue = e.target.value;

    setLink(prevState => {
        prevState[imageNumber] = imageValue;

        console.log(prevState)
        return prevState;
    })
   }

    const handleColorChange = (e) => {
        const boxNumber = e.target.name;
        const newColor = e.target.value;
    
        setBoxColor(prevState => ({
            ...prevState,
            [boxNumber]: newColor
        }));
    }

    const handleOrderChange = (e) => {
        const bNumber = e.target.name;
        const nValue = e.target.value;

        setOrder(prevState => ({
            ...prevState,
            [bNumber]: parseInt(nValue, 10) 
        }));
    }

    

    

    const navigate = useNavigate()
    const LogOut = () => {
        navigate("/", {replace: true})
    }

    const setSliderUrl = (event) => {
        const inputNumber = event.target.name;
    }

    useEffect(() => {
        const isLogged = localStorage.getItem("IsLogged");

        console.log(isLogged);

        if (!isLogged) {
            return navigate("/", {replace: true});
        }
    }, [])

    // useEffect(() => {
        // TO MA SIĘ USTAWIAĆ JAKO JEDNO POLE JSON.STRINGIFY / JSON.PARSE W CONTEXT
        // localStorage.setItem('Link1', Link1);
        // localStorage.setItem('Link2', Link2);
        // localStorage.setItem('Link3', Link3);
    // }, [Link1, Link2, Link3]);



    
    return (
        
        <div className="dashboard-container">
            <div className="section-settings">
                <div className="title">
                    <h2>Slider</h2>
                    <button>ON/OFF</button>
                </div>
                <div className="settings">
                    <button onClick={LogOut}>Log out</button>
                    <input
                    name="1"
                    // value={Link1}

                    onChange={(e)=> {
                        setImage(e)
                    }}
                    type='text'
                    placeholder='1st Link'
                    ></input>
                    <input

                    // value={Link2}
                    onChange={(e)=> {
                        setImage(e)
                    }}
                    type='text'
                    name="2"
                    placeholder='2nd Link'
                    ></input>
                    <input  

                    // value={Link3}
                    name="3"
                    onChange={(e)=> {
                        setImage(e)
                    }}
                    type='text'
                    placeholder='3nd Link'
                    ></input>

                    <div className="color-picker">
                        <h4>Box one</h4>
                        <input
                            type="color"
                            id="1"
                            name="1"
                            className="colorPicker"
                            value={boxColor[1]}
                            onChange={handleColorChange}
                        />
                        <h4>Box two</h4>
                        <input
                            type="color"
                            id="2"
                            name="2"
                            className="colorPicker"
                            value={boxColor[2]}
                            onChange={handleColorChange}
                        />
                        <h4>Box three</h4>
                        <input
                            type="color"
                            id="3"
                            name="3"
                            className="colorPicker"
                            value={boxColor[3]}
                            onChange={handleColorChange}                        
                        />

                        <h4>Order Changer</h4>
                        <input
                            type='number'
                            id='1'
                            name='1'
                            className='orderPicker'
                            value={currentOrder[1]}
                            onChange={handleOrderChange}
                        />
                        <input
                            type='number'
                            id='2'
                            name='2'
                            className='orderPicker'
                            value={currentOrder[2]}
                            onChange={handleOrderChange}
                        />
                        <input
                            type='number'
                            id='3'
                            name='3'
                            className='orderPicker'
                            value={currentOrder[3]}
                            onChange={handleOrderChange}
                        />
                        <h4>Footer text changer</h4>
                        <input
                            type='text'
                            id='1'
                            name='1'
                            className='picker'
                            value={footerText[1]}
                            onChange={setFooterText}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;




