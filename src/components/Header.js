import React, { useState } from "react";
import "../styles/Header.scss";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnLoginLogout, setBtnLoginLogout] = useState("Login");

  return (
    <>
      <div className="header-wrapper">
        <div className="header-logo">
          <img src={LOGO_URL} alt="Restaurent Logo" />
        </div>
        <div className="header-ryt-side-items">
          <ul>
            <li>
              <Link className="link" to="/">HOME</Link>
            </li>
            <li>
              <Link className="link" to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link className="link" to="/contact">CONTACT US</Link>
            </li>
            <li>CART</li>
            <button
              className="login-logout-btn"
              onClick={() => {
                btnLoginLogout === "Login"
                  ? setBtnLoginLogout("Logout")
                  : setBtnLoginLogout("Login");
              }}
            >
              {btnLoginLogout}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
