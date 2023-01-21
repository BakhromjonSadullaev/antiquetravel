import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./Cities.module.scss";
import { useTranslation, Trans } from "react-i18next";

const Cities = () => {
  const { t } = useTranslation();

  return (
    <div className={style.body}>
      {" "}
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        infiniteLoop
        autoPlay={true}
        interval={10000}
        transitionTime={500}
        swipeScrollTolerance={6}
        animationHandler="fade"
        stopOnHover={true}
      >
        <div className={style.cityCarousel}>
          <img src="https://atp.com.pk/wp-content/uploads/2020/01/tashkant.jpg" />
          <div className={style.info}>
            <h1>Tashkent</h1>
            <p>
              <Trans t={t}>tashkentstory</Trans>
            </p>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src="https://i.pinimg.com/originals/4a/d3/6f/4ad36f8b32177d3acf00319e7b5c6f10.jpg" />
          <div className={style.info}>
            <h1>Samarkand</h1>
            <p>
              <Trans t={t}>samarqandstory</Trans>
            </p>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src="https://img.tourister.ru/files/2/5/0/0/2/3/6/0/original.jpg" />
          <div className={style.info}>
            <h1>Bukhara</h1>
            <p>
              <Trans t={t}>bukharastory</Trans>
            </p>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src="https://countrysideindia.com/wp-content/uploads/2019/10/Itchan-Kala-Khiva-Uzbekistan._526336663.jpg" />
          <div className={style.info}>
            <h1>Khiva</h1>
            <p>
              <Trans t={t}>khivastory</Trans>
            </p>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src="https://www.adictosaljetlag.com/wp-content/uploads/2016/08/MadrassaNarboutabek.jpg" />
          <div className={style.info}>
            <h1>Ferghana</h1>
            <p>
              <Trans t={t}>ferganastory</Trans>
            </p>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src="https://a.d-cd.net/3216679s-1920.jpg" />
          <div className={style.info}>
            <h1>Shakhrisabz</h1>
            <p>
              <Trans t={t}>shakhrisabzstory</Trans>
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Cities;
