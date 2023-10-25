import './Courses.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

const Courses = () => {

    const { boxColor } = useContext(AppContext)
    const { currentOrder, setOrder } = useContext(AppContext)

    return(
        <div style={{backgroundColor: boxColor[1]}} id="courses" className="container">
            <div className="courses">
                <div style={{order:currentOrder[1]}} className="course">
                    <h2>Historia socjalizmu</h2>
                    <p>Początki w XIX wieku, rewolucja październikowa, upadek Związku Radzieckiego, wpływ na gospodarkę i skutki dla społeczeństwa.</p>
                </div>
                <div style={{order:currentOrder[2]}} className="course">
                    <h2>Problemy socjalizmu</h2>
                    <p>Brak motywacji do pracy, centralne planowanie, brak wolności gospodarczej, ograniczenia wolności obywatelskich i kryzysy gospodarcze.</p>
                </div>
                <div style={{order:currentOrder[3]}} className="course">
                    <h2>Alternatywy dla socjalizmu</h2>
                    <p>Kapitalizm, liberalizm gospodarczy, wolny rynek, demokracja i wolność jednostki.</p>
                </div>
            </div>
        </div>
    )
}

export default Courses;
