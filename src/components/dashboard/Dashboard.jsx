import './Dashboard.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';


const Dashboard = () => {
    // TO PRZENOSIMY DO  CONTEXTU -> W DASHBOARD JEST JEDNA FUNKCJA, KTÓRA USTAWIA LINK DLA WYBRANEGO SLIDE'U
   const { setLink, boxColor, setBoxColor } = useContext(AppContext);

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
                        <h2>Box color picker</h2>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;




