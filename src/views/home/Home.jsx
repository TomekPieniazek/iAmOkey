import './Home.scss';
import { Header, Slider, Boxes, Courses, Footer } from './../../components';


const Home = () => {

    let Link1 = localStorage.getItem('Link1')
    let Link2 = localStorage.getItem('Link2')
    let Link3 = localStorage.getItem('Link3')

    return (
        <div className="home-container">
            <Header/>
            <Slider image_link_1={Link1} image_link_2={Link2} image_link_3={Link3}/>
            <Boxes/>
            <Courses/>
            <Footer/>
        </div>
    )
}
export default Home;