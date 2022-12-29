import React from "react";
import style from "../Footer/Footer.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoLocation } from "react-icons/go";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <h1>Contact Us</h1>
        <ul>
          <li>
            <FaPhoneAlt /> +99897 725-52-55 +99895 220-05-50
          </li>
          <li>
            <RxEnvelopeClosed /> info@antiquetravel.com
          </li>
          <li>
            <GoLocation /> Uzbekistan, Bukhara, 200100, Center-05-05
          </li>
        </ul>
      </div>
      <p>Copyright © 2022 Developed By INDEX TEAM</p>
    </div>
  );
};

export default Footer;
