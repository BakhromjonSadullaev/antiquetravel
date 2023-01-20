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
          <a
            target="_blank"
            href="https://www.booking.com/searchresults.html?checkout_year=&ss=tashkent&checkin_month=&checkin_year=&from_sf=1&aid=100994&sb=1&checkout_month=&b_h4u_keep_filters=&is_ski_area=0&src=theme_landing_index&sb_lp=1&sid=f19086fdf868f8b68bbf49632d8c2fb5&group_children=0&no_rooms=1&group_adults=2&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Findex.html%3Faid%3D100994%26sid%3Df19086fdf868f8b68bbf49632d8c2fb5%26"
          >
            {" "}
            <li>Hotels</li>
          </a>
          <a href="#transportation_accordion">
            <li>Transportation</li>
          </a>
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
