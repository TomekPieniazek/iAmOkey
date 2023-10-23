import './Boxes.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

const Boxes = () => {


    const { boxColor } = useContext(AppContext)

    return(
        <div style={{backgroundColor: boxColor[2]}} id="boxes" className="container">
            <div className="boxes">
                <div className="box">
                    <h2>Kurs HTML</h2>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Kurs CSS</h2>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Kurs JavaScript</h2>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Boxes;