import React, { useState } from "react";
import style from "./Nav1.module.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

const Nav1 = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <div className={style.body}>
      <div className={style.container}>
        <ul>
          <Link to="/">
            {" "}
            <li className={style.active}>Home</li>
          </Link>
          <Link to={"AboutUs"}>
            <li>About Us</li>
          </Link>

          <li>Tours</li>
          <li>Hotels</li>
          <li>Transportation</li>
          <Link to="Photo_Gallery" className={style.gallery_link}>
            <li>Photo Gallery</li>
          </Link>
        </ul>
        <div className={style.lang}>
          <p>
            {" "}
            <img
              src="https://flagcdn.com/w20/us.png"
              srcset="https://flagcdn.com/w40/us.png 2x"
              width="20"
              alt="United States"
            />
            ENG
          </p>
          <p>
            <img
              src="https://flagcdn.com/w20/ru.png"
              srcset="https://flagcdn.com/w40/ru.png 2x"
              width="20"
              alt="Russia"
            />
            RUS
          </p>
          <p>
            <img
              src="https://flagcdn.com/w20/de.png"
              srcset="https://flagcdn.com/w40/de.png 2x"
              width="20"
              alt="Germany"
            />
            DE
          </p>
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
          <li>Photo Gallery</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav1;
