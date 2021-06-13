import React, { useState } from "react";
import { NavbarItems } from "./NavbarItems";
import { NavbarButton } from "./NavbarButton";
import "./Navbar.css";
//import "./Dropdown.css";
import { Dropdown } from "../Common/Dropdown";
import { Link } from "react-router-dom";
import { DropdownMenuItems } from "./DropdownMenuItems";
export const Navbar = () => {
  let [clicked, setClicked] = useState(false);
  let [dropdown, setDropDown] = useState(false);
  const handleClick = () => setClicked(!clicked);

  //drop down event action
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropDown(false);
    } else {
      setDropDown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-logo">
          makotobot
          <i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {NavbarItems.map((item, index) => {
            return (
              <li
                className="nav-item"
                key={index}
                onMouseEnter={item.dropdownItmes ? onMouseEnter : null}
                onMouseLeave={item.dropdownItmes ? onMouseLeave : null}
              >
                <Link to={item.url} className={item.cName}>
                  {item.title}
                  {item.dropdownItmes && dropdown && (
                    <Dropdown menuItems={DropdownMenuItems} />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <NavbarButton>Log In</NavbarButton>
      </nav>
    </>
  );
};
