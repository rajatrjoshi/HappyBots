import React from 'react';
import './Header.css';
import Logo from './logo.svg';
import PersonIcon from '@material-ui/icons/Person';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img className="logo__image" src={Logo} width="60px" height="60px" alt="logo_image" />
                <div className="logo__name"> HAPPYBOTS</div>
            </div>
            
            <div className="header__center">
                <a href="#">Find a center</a>
                <a href="#">About Us</a>
                <a href="#about__us">Contact Us</a>
                <a href="#">Contact Us</a>
            </div>

            <div className="header__right">
                <PersonIcon fontSize="large"/>
                <div className="login__text">Login</div>
            </div>
        
        
        </div>


    )
}

export default Header
