import './Footer.scss';
import { AppContext } from '../../context/app.context';
import { useContext } from 'react';

const Footer = () => {

    const { footerText } = useContext(AppContext)

    return(
        <div className="footer-container container">
            <h2>{ footerText[1] }</h2>
        </div>
    )
}

export default Footer;