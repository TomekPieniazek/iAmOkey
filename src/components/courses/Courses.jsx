import './Courses.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import App from '../../App';

const Courses = () => {

    const { boxColor } = useContext(AppContext)
    const { currentOrder, setOrder } = useContext(AppContext)


    return(
        <div style={{backgroundColor: boxColor[1]}} id="courses" className="container">
            <div className="courses">
                <div style={{order:currentOrder[1]}} className="course">
                    <h2>Kurs HTML</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero, eaque.</p>
                </div>
                <div style={{order:currentOrder[2]}} className="course">
                    <h2>Kurs CSS</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero, eaque.</p>
                </div>
                <div style={{order:currentOrder[3]}} className="course">
                    <h2>Kurs JavaScript</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero, eaque.</p>
                </div>
            </div>
        </div>
    )
}

export default Courses;