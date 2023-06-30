import React from "react";
import "../styles/Footer.scss";
import PageContainer from "./PageContainer";

const Footer = () => {
  return (
    <>
      <PageContainer />
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img
            src="https://images.freecreatives.com/wp-content/uploads/2016/03/Restaurant-logos.jpg"
            alt="Restaurent Logo"
          />
          <span> © Dummy Food Website</span>
        </div>
        <div className="footer-ryt-side-items">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>CART</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
