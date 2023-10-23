import './Slider.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AppContext } from '../../context/app.context';
import { useContext } from 'react';

const Slider = ({image_link_1, image_link_2, image_link_3}) => {
    const { link } = useContext(AppContext);

    return(
        <div className="slider-container container">
            
            <Carousel>
                <div className="slide slide-1">
                    <img src={link[1]} />
                </div>
                <div className="slide slide-2">
                    <img src={link[2]} />
                </div>
                <div className="slide slide-3">
                    <img src={link[3]} />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;

