import React, { Component } from 'react'

import {Carousel} from 'react-bootstrap'


import Cal1 from "../images/cal.jpg";
import Cal2 from "../images/cal2.png";
import Cal3 from "../images/cal3.jpg";

 class carousel extends Component {
    render() {

        return (
            <div>
                                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Cal1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Cal2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Cal3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                   
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default carousel;