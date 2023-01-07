import React from "react";
import style from "../Footer/Footer.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoLocation } from "react-icons/go";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterLogo from "../../images/logo.png";
const Footer = () => {
  return (
    <div className={style.wrapper}>
      <img src={FooterLogo} alt="" />
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
        <div className={style.socialLinks}>
          <TelegramIcon className={style.social} />
          <WhatsAppIcon className={style.social} />
          <InstagramIcon className={style.social} />
        </div>
        <div className={style.cards}>
          <img
            src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg"
            alt=""
          />
          <img
            src="https://icon-library.com/images/mastercard-icon-png/mastercard-icon-png-17.jpg"
            alt=""
          />
          <img
            src="https://kdb.uz/storage/cards/October2021/hNE9Tjbf0qf181qpgGah.jpg"
            alt=""
          />
          <img
            src="https://kdb.uz/storage/cards/October2021/jMrl5N5B9FAwoIwfSNtC.jpg"
            alt=""
          />
        </div>
        <p>Copyright ©2022 Developed By INDEX Team</p>
      </div>
      <img
        src="https://api.uznews.uz/storage/uploads/posts/images/45848/inner/gq3WdeSD43.jpg"
        alt=""
      />
    </div>
  );
};

export default Footer;
