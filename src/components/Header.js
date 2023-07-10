import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLoginLogout, setBtnLoginLogout] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <>
      <div className="flex align-middle justify-between px-0 py-4 bg-lime-200 sticky top-0">
        <div className="top-3 ">
          <img src={LOGO_URL} alt="Restaurent Logo" className="w-56 mt-1"/>
        </div>
        <div className="header-ryt-side-items">
          <ul className="flex no-underline">
          <li className="text-orange-700">
              Online: {onlineStatus ? ":green_circle" : ":red_circle"}
            </li>
            <li className="text-orange-700">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="text-orange-700">
              <Link className="link" to="/about">ABOUT US</Link>
            </li>
            <li className="text-orange-700">
              <Link className="link" to="/contact">CONTACT US</Link>
            </li>
            <li className="text-orange-700">
              <Link className="link" to="/grocery">Grocery</Link>
            </li>
            <li className="text-orange-700">CART</li>
            <button
              className="px-2 py-1 bg-orange-800 text-white rounded border-solid border-2 border-orange-800"
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
