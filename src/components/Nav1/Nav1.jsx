import React, { useState } from "react";
import style from "./Nav1.module.scss";

import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

const Nav1 = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <div className={style.body}>
      <div className={style.container}>
        <ul>
          <li className={style.active}>Home</li>
          <li>About Us</li>
          <li>Tours</li>
          <li>Hotels</li>
          <li>Transportation</li>
          <li>Destination</li>
          <li>Services</li>
          <li>Staff</li>
          <li>Photo Gallery</li>
        </ul>
        <div className={style.lang}>
          <p>Eng</p>
          <p>Rus</p>
          <p>Ger</p>
        </div>

        <div
          onClick={() => setShowNavMenu(!showNavMenu)}
          className={style.menu}
        >
          <MenuIcon />
        </div>
      </div>

      <div
        className={clsx({
          [style.navMenu]: true,
          [style.showMenu]: showNavMenu,
        })}
      >
        <ul>
          <li className={style.active}>Home</li>
          <li>About Us</li>
          <li>Tours</li>
          <li>Hotels</li>
          <li>Transportation</li>
          <li>Destination</li>
          <li>Services</li>
          <li>Staff</li>
          <li>Photo Gallery</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav1;
