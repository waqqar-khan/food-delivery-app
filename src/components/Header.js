import React from "react";
import "../styles/Header.scss";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <>
        <div className="header-wrapper">
            <div className="header-logo">
                <img src={LOGO_URL} alt="Restaurent Logo" />
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