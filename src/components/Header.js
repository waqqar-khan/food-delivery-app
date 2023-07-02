import React, { useState } from "react";
import "../styles/Header.scss";
import { LOGO_URL } from "../utils/constants";

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
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
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
