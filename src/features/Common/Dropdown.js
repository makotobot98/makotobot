import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

export const Dropdown = ({ menuItems }) => {
  let [click, setClick] = useState(false);
  let dropdownListItems = menuItems.map((item, index) => {
    return (
      <li key={index}>
        <Link
          className={item.cName}
          to={item.url}
          onClick={() => setClick(!click)}
        >
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        onClick={() => setClick(!click)}
      >
        {dropdownListItems}
      </ul>
    </>
  );
};
