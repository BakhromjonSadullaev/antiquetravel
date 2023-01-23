import React from "react";
import { Link } from "react-router-dom";
import style from "../Photos/Photos.module.scss";
import goroda1 from "../../images/goroda1.jpg";
import goroda2 from "../../images/goroda2.jpg";
import goroda3 from "../../images/goroda3.jpg";
import goroda4 from "../../images/goroda4.jpg";
import goroda5 from "../../images/goroda5.jpg";
import goroda6 from "../../images/goroda6.jpg";
import goroda7 from "../../images/goroda7.jpg";
import goroda8 from "../../images/goroda8.jpg";
import nature1 from "../../images/nature1.jpg";
import nature2 from "../../images/nature2.jpg";
import nature3 from "../../images/nature3.jpg";
import nature4 from "../../images/nature4.jpg";
import nature5 from "../../images/nature5.jpg";
import nature6 from "../../images/nature6.jpg";
import nature7 from "../../images/nature7.jpg";
import nature8 from "../../images/nature8.jpg";
import culture1 from "../../images/culture1.jpg";
import culture2 from "../../images/culture2.jpg";
import culture3 from "../../images/culture3.jpg";
import culture4 from "../../images/culture4.jpg";
import culture5 from "../../images/culture5.jpg";
import culture6 from "../../images/culture6.jpg";
import culture7 from "../../images/culture7.jpg";
import culture8 from "../../images/culture8.jpg";
import arch1 from "../../images/arch1.jpg";
import arch2 from "../../images/arch2.jpg";
import arch3 from "../../images/arch3.jpg";
import arch4 from "../../images/arch4.jpg";
import arch5 from "../../images/arch5.jpg";
import arch6 from "../../images/arch6.jpg";
import arch7 from "../../images/arch7.jpg";
import arch8 from "../../images/arch8.jpg";
import people1 from "../../images/peop1.jpg";
import people2 from "../../images/peop2.jpg";
import people3 from "../../images/peop3.jpg";
import people4 from "../../images/peop4.jpg";
import people5 from "../../images/peop5.jpg";
import people6 from "../../images/peop6.jpg";
import people7 from "../../images/peop7.jpg";
import people8 from "../../images/peop8.jpg";
import food1 from "../../images/food1.jpg";
import food2 from "../../images/food2.jpg";
import food3 from "../../images/food3.jpg";
import food4 from "../../images/food4.jpg";
import food5 from "../../images/food5.jpg";
import food6 from "../../images/food6.jpg";
import food7 from "../../images/food7.jpg";
import food8 from "../../images/food8.jpg";
import metro1 from "../../images/metro1.jpg";
import metro2 from "../../images/metro2.jpg";
import metro3 from "../../images/metro3.jpg";
import metro4 from "../../images/metro4.jpg";
import metro5 from "../../images/metro5.jpg";
import metro6 from "../../images/metro6.jpg";
import art1 from "../../images/art1.jpg";
import art2 from "../../images/art2.jpg";
import art3 from "../../images/art3.jpg";
import art4 from "../../images/art4.jpg";
import art5 from "../../images/art5.jpg";
import art6 from "../../images/art6.jpg";
import art7 from "../../images/art7.jpg";
import sport1 from "../../images/sport1.jpg";
import sport2 from "../../images/sport2.jpg";
import sport3 from "../../images/sport3.jpg";
import sport4 from "../../images/sport4.jpg";
import sport5 from "../../images/sport5.jpg";
import mistery1 from "../../images/mistery1.jpg";
import mistery2 from "../../images/mistery2.jpg";
import mistery3 from "../../images/mistery3.jpg";
import mistery4 from "../../images/mistery4.jpg";
import mistery5 from "../../images/mistery5.jpg";
import ziyorat1 from "../../images/ziyorat1.jpg";
import ziyorat2 from "../../images/ziyorat2.jpg";
import ziyorat3 from "../../images/ziyorat3.jpg";
import ziyorat4 from "../../images/ziyorat4.jpg";
import ziyorat5 from "../../images/ziyorat5.jpg";
import ziyorat6 from "../../images/ziyorat6.jpg";
import ziyorat7 from "../../images/ziyorat7.jpg";
import ziyorat8 from "../../images/ziyorat8.jpg";
import ziyorat9 from "../../images/ziyorat9.jpg";
import ziyorat10 from "../../images/ziyorat10.jpg";
import { useTranslation, Trans } from "react-i18next";
const Photos = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={style.body}>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/cities_gallery"}>
            <h1>
              <Trans t={t}>goroda</Trans>
            </h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={goroda1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={goroda2} alt="" />
            </div>
            <div className={style.slide}>
              <img src={goroda3} alt="" />
            </div>
            <div className={style.slide}>
              <img src={goroda4} alt="" />
            </div>
            <div className={style.slide}>
              <img src={goroda5} alt="" />
            </div>
            <div className={style.slide}>
              <img src={goroda6} alt="" />
            </div>
            <div className={style.slide}>
              <img src={goroda7} alt="" />
            </div>
            <div className={style.slide}>
              <img src={goroda8} alt="" />
            </div>
          </div>
        </div>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/green_gallery"}>
            <h1>
              <Trans t={t}>nature</Trans>
            </h1>
          </Link>

          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={nature1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={nature2} alt="" />
            </div>
            <div className={style.slide}>
              <img src={nature3} alt="" />
            </div>
            <div className={style.slide}>
              <img src={nature4} alt="" />
            </div>
            <div className={style.slide}>
              <img src={nature5} alt="" />
            </div>
            <div className={style.slide}>
              <img src={nature6} alt="" />
            </div>
            <div className={style.slide}>
              <img src={nature7} alt="" />
            </div>
            <div className={style.slide}>
              <img src={nature8} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/culture_gallery"}>
            <h1>
              <Trans t={t}>culture</Trans>
            </h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={culture1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={culture2} alt="" />
            </div>
            <div className={style.slide}>
              <img src={culture3} alt="" />
            </div>
            <div className={style.slide}>
              <img src={culture4} alt="" />
            </div>
            <div className={style.slide}>
              <img src={culture5} alt="" />
            </div>
            <div className={style.slide}>
              <img src={culture6} alt="" />
            </div>
            <div className={style.slide}>
              <img src={culture7} alt="" />
            </div>
            <div className={style.slide}>
              <img src={culture8} alt="" />
            </div>
          </div>
        </div>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/architecture_gallery"}>
            <h1>
              <Trans t={t}>arch</Trans>
            </h1>
          </Link>

          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={arch1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={arch2} alt="" />
            </div>
            <div className={style.slide}>
              <img src={arch3} alt="" />
            </div>
            <div className={style.slide}>
              <img src={arch4} alt="" />
            </div>
            <div className={style.slide}>
              <img src={arch5} alt="" />
            </div>
            <div className={style.slide}>
              <img src={arch6} alt="" />
            </div>
            <div className={style.slide}>
              <img src={arch7} alt="" />
            </div>
            <div className={style.slide}>
              <img src={arch8} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/people_gallery"}>
            <h1>
              <Trans t={t}>people</Trans>
            </h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={people1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={people2} alt="" />
            </div>
            <div className={style.slide}>
              <img src={people3} alt="" />
            </div>
            <div className={style.slide}>
              <img src={people4} alt="" />
            </div>
            <div className={style.slide}>
              <img src={people5} alt="" />
            </div>
            <div className={style.slide}>
              <img src={people6} alt="" />
            </div>
            <div className={style.slide}>
              <img src={people7} alt="" />
            </div>
            <div className={style.slide}>
              <img src={people8} alt="" />
            </div>
          </div>
        </div>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/food_gallery"}>
            <h1>
              <Trans t={t}>food</Trans>
            </h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={food1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={food2} alt="" />
            </div>
            <div className={style.slide}>
              <img src={food3} alt="" />
            </div>
            <div className={style.slide}>
              <img src={food4} alt="" />
            </div>
            <div className={style.slide}>
              <img src={food5} alt="" />
            </div>
            <div className={style.slide}>
              <img src={food6} alt="" />
            </div>
            <div className={style.slide}>
              <img src={food7} alt="" />
            </div>
            <div className={style.slide}>
              <img src={food8} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/metro_gallery"}>
            <h1>
              <Trans t={t}>metro</Trans>
            </h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={metro1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={metro2} alt="" />
            </div>
            <div className={style.slide}>
              <img src={metro3} alt="" />
            </div>
            <div className={style.slide}>
              <img src={metro4} alt="" />
            </div>
            <div className={style.slide}>
              <img src={metro5} alt="" />
            </div>
            <div className={style.slide}>
              <img src={metro6} alt="" />
            </div>
          </div>
        </div>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/art_gallery"}>
            <h1>
              <Trans t={t}>art</Trans>
            </h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={art1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={art2} alt="" />
            </div>{" "}
            <div className={style.slide}>
              <img src={art3} alt="" />
            </div>{" "}
            <div className={style.slide}>
              <img src={art4} alt="" />
            </div>{" "}
            <div className={style.slide}>
              <img src={art5} alt="" />
            </div>{" "}
            <div className={style.slide}>
              <img src={art6} alt="" />
            </div>{" "}
            <div className={style.slide}>
              <img src={art7} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/sport_gallery"}>
            <h1>
              <Trans t={t}>sport</Trans>
            </h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={sport1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={sport2} alt="" />
            </div>
            <div className={style.slide}>
              <img src={sport3} alt="" />
            </div>
            <div className={style.slide}>
              <img src={sport4} alt="" />
            </div>
            <div className={style.slide}>
              <img src={sport5} alt="" />
            </div>
          </div>
        </div>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/historical_gallery"}>
            <h1>
              <Trans t={t}>mistery</Trans>
            </h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={mistery1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={mistery2} alt="" />
            </div>
            <div className={style.slide}>
              <img src={mistery3} alt="" />
            </div>
            <div className={style.slide}>
              <img src={mistery4} alt="" />
            </div>
            <div className={style.slide}>
              <img src={mistery5} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"/Photo_Gallery/tourism_gallery"}>
            <h1>
              <Trans t={t}>historic</Trans>
            </h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img src={ziyorat1} alt="" />
            </div>
            <div className={style.slide}>
              <img src={ziyorat2} alt="" />
            </div>
            <div className={style.slide}>
              <img src={ziyorat3} alt="" />
            </div>
            <div className={style.slide}>
              <img src={ziyorat4} alt="" />
            </div>
            <div className={style.slide}>
              <img src={ziyorat5} alt="" />
            </div>
            <div className={style.slide}>
              <img src={ziyorat6} alt="" />
            </div>
            <div className={style.slide}>
              <img src={ziyorat7} alt="" />
            </div>
            <div className={style.slide}>
              <img src={ziyorat8} alt="" />
            </div>
            <div className={style.slide}>
              <img src={ziyorat9} alt="" />
            </div>
            <div className={style.slide}>
              <img src={ziyorat10} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photos;
