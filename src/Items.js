import React from 'react';
import './Items.css';
import Truck from './truck.svg';
import Ruppee from './ruppee.svg';
import Phone from './phone.svg';
import "bootstrap/dist/css/bootstrap.css";
import ImageSlider from './component/ImageSlider';
import { SliderData } from './component/SliderData';
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import CarouselContainer from './component/CarouselContainer.js';
import Service1 from './service.svg';
import Service2 from './service1.svg';
import Service3 from './service2.svg';
import Service4 from './service3.svg';
import * as Icons from '@material-ui/icons'





function Items() {
    return (
        <div className="items">
            <div className="carousel">
                <ImageSlider slides={SliderData} />;
            </div>

            <div className="services__offered">
                <div className="service__details1">
                    <div className="details__line1">
                        <div className="service__logo">
                            < img src={Service1} alt=""  width="40px" height="40px"/>
                        </div>
                        <div className="service__title">
                            Vehicle Serciving
                        </div>
                        <div className="service__description">
                        Fabulous and clean service. Really appreciate the person who did my service.
                        </div>
                    </div>
                      
                    
                    <div className="details__line1">
                        <div className="service__logo">
                            < img src={Service2} alt=""  width="40px" height="40px"/>
                        </div>
                        <div className="service__title">
                            Vehicle Detailing
                        </div>
                        <div className="service__description">
                        Fabulous and clean service. Really appreciate the person who did my service.
                        </div>
                    </div> 

                    <div className="details__line1">
                        <div className="service__logo">
                            < img src={Service3} alt=""  width="40px" height="40px"/>
                        </div>
                        <div className="service__title">
                            Vehicle Parts Change
                        </div>
                        <div className="service__description">
                        Fabulous and clean service. Really appreciate the person who did my service.
                        </div>
                    </div>
                </div>

                <div className="service__details1"> 

                    <div className="details__line1">
                        <div className="service__logo">
                            < img src={Service4} alt=""   width="40px" height="40px"/>
                        </div>
                        <div className="service__title">
                            Vehicle Washing
                        </div>
                        <div className="service__description">
                        Fabulous and clean service. Really appreciate the person who did my service.
                        </div>
                    </div>
                    
                    <div className="details__line1">
                        <div className="service__logo">
                            < img src={Service3} alt=""   width="40px" height="40px"/>
                        </div>
                        <div className="service__title">
                            Vehicle 
                        </div>
                        <div className="service__description">
                        Fabulous and clean service. Really appreciate the person who did my service.
                        </div>
                    </div>

                    <div className="details__line1">
                        <div className="service__logo">
                            < img src={Service1} alt=""  width="40px" height="40px"/>
                        </div>
                        <div className="service__title">
                            Vehicle Serciving
                        </div>
                        <div className="service__description">
                        Fabulous and clean service. Really appreciate the person who did my service.
                        </div>
                    </div>  
                </div>            
            </div>
            
            <div className="key__features">
                <div className="feature__details">
                    <div className="feature__image">
                        <img src={Ruppee} alt="" width="80px" height="80px"/>
                    </div>
                    <div className="feature__description">Cost Effective</div>
                </div>

                <div className="feature__details">
                    <div className="feature__image">
                        <img src={Truck} alt="" width="80px" height="80px"/>
                    </div>
                    <div className="feature__description">All Vehicle</div>
                </div>

                <div className="feature__details">
                    <div className="feature__image">
                        <img src={Phone} alt="" width="80px" height="80px"/>
                    </div>
                    <div className="feature__description"> Phonecall Away</div>
                </div> 
            </div>

            

            <div className="about__us">
                <div className="about__usHeading">ABOUT US</div>
                <div className="about__usdescription">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
            </div>

        
            <div className="contact__us">
                < Icons.Instagram   fontSize="large"/>
                <Icons.Facebook fontSize="large"/>
                <Icons.WhatsApp fontSize="large"/>
                <Icons.Call fontSize="large"/>
                <Icons.Email fontSize="large"/>
            </div>

        <div className="footer">
            <div className="footer__copyright">
                © 2021 HappyBots
            </div>
            <div className="footer__text">
                Designed with ❤ in TSEC
            </div>
        </div>
        </div>
    )
}

export default Items
