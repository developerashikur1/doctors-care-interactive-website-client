import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    const carousels = {
        slider_1: "https://i.ibb.co/18svGrw/5-Jp8na8-YZz-LIrs4aqi7ww-OD93-V1-ASPG892q-Mzy-H3.jpg",
        slider_2: "https://i.ibb.co/QMJjLsr/M67mk-Fhv-YAz1-EDCVv-CAYf-K4-P0-Qg-Bmk-Ew-Uagk-H4q-L.jpg",
        slider_3: "https://i.ibb.co/gvdHskH/Mke-LXBu-Lo-TQq-Zw-A0um-TUE99u-Bcm-RRCe-Ix-B7jx6-Go.jpg",
        slider_4: "https://i.ibb.co/3Fg0kPj/Mph7d79-KMft6-Hi-Vifb0ha-SWklki-Wh-Aqej0qw-Bmk-P.jpg",


    }
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carousels.slider_1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carousels.slider_2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carousels.slider_3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carousels.slider_4}
                        alt="Forth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;