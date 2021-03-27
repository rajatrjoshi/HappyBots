import React from 'react';
import './Header.css';
import Logo from './logo.svg';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/home">
                <img className="logo__image" src={Logo} width="60px" height="60px" alt="logo_image" />
                </Link>
                <div className="logo__text">HAPPYBOTS</div>
                
            </div>
            
            <div className="header__center">
                <Link to="/service-center">Find a mechanic</Link>
                <Link to="#">Our Store</Link>
                <Link to="#about__us">About Us</Link>
                <Link to="#">Contact Us</Link>
            </div>

            <div className="header__right">
                <PersonIcon fontSize="large"/>
                <div className="login__text">Login</div>
            </div>
        
        
        </div>


    )
}

export default Header
