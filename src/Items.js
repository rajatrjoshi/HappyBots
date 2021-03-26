import React from 'react';
import './Items.css';
import Truck from './truck.svg';
import Ruppee from './ruppee.svg';
import Phone from './phone.svg';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import CarouselContainer from './component/CarouselContainer.js';


function Items() {
    return (
        <div className="items">
                {/* <CarouselContainer /> */}
            <div className="key__features">
                <div className="feature__details">
                    <div className="feature__image">
                        <img src={Ruppee} alt="" width="100px" height="100px"/>
                    </div>
                    <div className="feature__description">Feasible</div>
                </div>

                <div className="feature__details">
                    <div className="feature__image">
                        <img src={Truck} alt="" width="100px" height="100px"/>
                    </div>
                    <div className="feature__description">All Vehicles</div>
                </div>

                <div className="feature__details">
                    <div className="feature__image">
                        <img src={Phone} alt="" width="100px" height="100px"/>
                    </div>
                    <div className="feature__description"> A Phonecall Away</div>
                </div>                
            </div>

            <div className="about__us">
                <div className="about__usHeading">ABOUT US</div>
                <div className="about__usdescription">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
            </div>
        </div>
    )
}

export default Items
