import './Boxes.scss';
import { AppContext } from '../../context/app.context';
import { useContext } from 'react';

const Boxes = () => {

    const { boxColor } = useContext(AppContext)

    return(
        <div style={{backgroundColor: boxColor[2]}} id="boxes" className="container">
            <div className="boxes">
                <div className="box">
                    <h2>Historia socjalizmu</h2>
                    <ul>
                        <li>Początki w XIX wieku</li>
                        <li>Revolucja październikowa</li>
                        <li>Upadek Związku Radzieckiego</li>
                        <li>Wpływ na gospodarkę</li>
                        <li>Skutki dla społeczeństwa</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Problemy socjalizmu</h2>
                    <ul>
                        <li>Brak motywacji do pracy</li>
                        <li>Centralne planowanie</li>
                        <li>Brak wolności gospodarczej</li>
                        <li>Ograniczenia wolności obywatelskich</li>
                        <li>Kryzysy gospodarcze</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Alternatywy dla socjalizmu</h2>
                    <ul>
                        <li>Kapitalizm</li>
                        <li>Liberalizm gospodarczy</li>
                        <li>Wolny rynek</li>
                        <li>Demokracja</li>
                        <li>Wolność jednostki</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Boxes;
