import React from "react";
import style from "./Header.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import navLogo from "../../images/logo.png";

const Header = () => {
  return (
    <div className={style.body}>
      <div className={style.headerOverlay}>
        <nav>
          <img src={navLogo} alt="" />
          <div className={style.contactInfo}>
            <p>
              <span>
                <LocationOnIcon />
              </span>{" "}
              Uzbekistan, Bukhara, 200100, Center-05-05
            </p>
            <p>
              <span>
                <LocalPhoneIcon />{" "}
              </span>{" "}
              +99897 725-52-55 +99895 220-05-50
            </p>
            <p>
              <span>
                <EmailIcon />{" "}
              </span>{" "}
              info@antiquetravel.com
            </p>
            <div className={style.socialLinks}>
              <p>
                {" "}
                <span>
                  <TelegramIcon />
                </span>{" "}
                Telegram
              </p>
              <p>
                {" "}
                <span>
                  <WhatsAppIcon />
                </span>{" "}
                WhatsApp
              </p>
              <p>
                <span>
                  <InstagramIcon />
                </span>{" "}
                Instagram
              </p>
            </div>
          </div>
        </nav>
      </div>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={false}
        showStatus={false}
        interval={3000}
        dynamicHeight={100}
      >
        <div className={style.carousel}>
          <img src="https://novotours.uz/wp-content/uploads/2017/03/Travel-Uzbekistan.jpg" />
        </div>
        <div className={style.carousel}>
          <img src="https://novotours.uz/wp-content/uploads/2017/03/tour-to-Uzbekistan.jpg" />
        </div>
        <div className={style.carousel}>
          <img src="https://novotours.uz/wp-content/uploads/2017/03/Aydarkul-Lake-yurt-camp.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
