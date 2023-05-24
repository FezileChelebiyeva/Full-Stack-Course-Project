import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  const [navbar, setNavbar] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 66) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  });
  return (
    <div id={`${navbar ? "header" : "active"}`}>
      <div className="container">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <Link to={"/"}>OneSchool</Link>
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/add-course"}>Add Course</NavLink>
                </li>
                <li>
                  <NavLink to={"/wishlist"}>Wishlist</NavLink>
                </li>
              </ul>
            </nav>
            <div className="btn">
              <button>CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
