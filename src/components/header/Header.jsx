import './Header.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

const Header = () => {

    const { boxColor } = useContext(AppContext)

    return(
        <div style={{backgroundColor: boxColor[3]}} className="header-container container">
            <h1 className="logo">#<span>Wolność</span>_Przeciwko_Lewakom</h1>
            <ul className="menu">
                <li><a href="#boxes">Historia</a></li>
                <li><a href="#courses">Problemy</a></li>
            </ul>
        </div>
    )
}

export default Header;
