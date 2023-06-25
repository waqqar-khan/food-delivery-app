import React from "react";
import "../styles/Header.scss";

const Header = () => {
    return (
        <>
        <div className="header-wrapper">
            <div className="header-logo">
                <img src="https://images.freecreatives.com/wp-content/uploads/2016/03/Restaurant-logos.jpg" alt="Restaurent Logo" />
            </div>
            <div className="header-ryt-side-items">
                <ul>
                    <li>HOME</li> 
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
        </>
    )
};

export default Header;