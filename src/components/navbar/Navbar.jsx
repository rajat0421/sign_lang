import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assests/logo2.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="signlang_navbar gradient__bg">
      <div className="singlang_navlinks">
        <div className="signlang_navlinks_logo">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="signlang_navlinks_container">
          <p>
            <Link to="/home">Home</Link>
          </p>
          <p>
            <Link to="/detect">Detect</Link>
          </p>
        </div>
      </div>

      <div className="signlang__navbar-menu">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
            aria-label="Close menu"
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggle(true)}
            aria-label="Open menu"
          />
        )}
        {toggle && (
          <div className="signlang__navbar-menu_container scale-up-center">
            <div className="signlang__navbar-menu_container-links">
              <p>
                <Link to="/" onClick={() => setToggle(false)}>
                  Home
                </Link>
              </p>
              <p>
                <Link to="/detect" onClick={() => setToggle(false)}>
                  Detect
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;