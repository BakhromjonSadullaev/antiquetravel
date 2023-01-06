import React, { useState } from "react";
import style from "./Nav1.module.scss";

import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Nav1 = () => {
  const { t, i18n } = useTranslation();
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <div className={style.body}>
      <div className={style.container}>
        <ul>
          <li className={style.active}>{t("Home")}</li>
          <li>{t("AboutUs")}</li>
          <li>{t("Tours")}</li>
          <li>{t("Hotels")}</li>
          <li>{t("Transportation")}</li>
          <li>{t("Destination")}</li>
          <li>{t("Services")}</li>
          <li>{t("Staff")}</li>
          <li>{t("PhotoGallery")}</li>
        </ul>
        <div className={style.lang}>
          <p onClick={() => i18n.changeLanguage("en")}>
            {" "}
            <img
              src="https://flagcdn.com/w20/us.png"
              srcset="https://flagcdn.com/w40/us.png 2x"
              width="20"
              alt="United States"
            />
            Eng
          </p>
          <p onClick={() => i18n.changeLanguage("ru")}>
            <img
              src="https://flagcdn.com/w20/ru.png"
              srcset="https://flagcdn.com/w40/ru.png 2x"
              width="20"
              alt="Russia"
            />
            Rus
          </p>
          <p onClick={() => i18n.changeLanguage("de")}>
            <img
              src="https://flagcdn.com/w20/de.png"
              srcset="https://flagcdn.com/w40/de.png 2x"
              width="20"
              alt="Germany"
            />
            Ger
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
