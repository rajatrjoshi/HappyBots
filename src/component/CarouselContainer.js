import React from 'react';
import {Carousel} from 'react-bootstrap';

const CarouselContainer = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.pinimg.com/originals/60/1c/03/601c039fa86f3a4aec76b4446647d886.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.pinimg.com/originals/60/1c/03/601c039fa86f3a4aec76b4446647d886.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.pinimg.com/originals/60/1c/03/601c039fa86f3a4aec76b4446647d886.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;