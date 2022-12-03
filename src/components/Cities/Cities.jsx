import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./Cities.module.scss";

const Cities = () => {
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
        dynamicHeight={true}
        stopOnHover={true}
      >
        <div className={style.cityCarousel}>
          <img src="https://atp.com.pk/wp-content/uploads/2020/01/tashkant.jpg" />
          <div className={style.info}>
            <h1>Tashkent</h1>
            <p>
              It is in northeastern Uzbekistan, near the border with Kazakhstan.
              Tashkent comes from the Turkic tash and kent, literally translated
              as "Stone City" or "City of Stones".
            </p>
            <button>Explore Now</button>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src="https://i.pinimg.com/originals/4a/d3/6f/4ad36f8b32177d3acf00319e7b5c6f10.jpg" />
          <div className={style.info}>
            <h1>Samarkand</h1>
            <p>
              Samarqand, is a city in southeastern Uzbekistan and among the
              oldest continuously inhabited cities in Central Asia.
            </p>
            <button>Explore Now</button>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src="https://img.tourister.ru/files/2/5/0/0/2/3/6/0/original.jpg" />
          <div className={style.info}>
            <h1>Bukhara</h1>
            <p>
              Bukhara, which is situated on the Silk Route, is more than 2,000
              years old. It is the most complete example of a medieval city in
              Central Asia, with an urban fabric that has remained largely
              intact.
            </p>
            <button>Explore Now</button>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src="https://countrysideindia.com/wp-content/uploads/2019/10/Itchan-Kala-Khiva-Uzbekistan._526336663.jpg" />
          <div className={style.info}>
            <h1>Khiva</h1>
            <p>
              Khiva is a beautiful oasis city with ancient walls, minarets and
              unique clay buildings. Khiva was declared as the tourist capital
              of the Islamic world in 2024! Khiva is over 2500 years old.
            </p>
            <button>Explore Now</button>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src="https://www.adictosaljetlag.com/wp-content/uploads/2016/08/MadrassaNarboutabek.jpg" />
          <div className={style.info}>
            <h1>Ferghana</h1>
            <p>
              Fergana first appears in written records in the 5th-century.
              However, archeological evidence demonstrates that the city had
              been populated since the Chalcolithic period.
            </p>
            <button>Explore Now</button>
          </div>
        </div>
        <div className={style.cityCarousel}>
          <img src="https://a.d-cd.net/3216679s-1920.jpg" />
          <div className={style.info}>
            <h1>Shakhrisabz</h1>
            <p>
              Shakhrisabz is one of the most ancient and picturesque cities of
              Uzbekistan. Its historical centre is included in the UNESCO World
              Heritage List. The great commander Amir Temur was born in this
              city.
            </p>
            <button>Explore Now</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Cities;
