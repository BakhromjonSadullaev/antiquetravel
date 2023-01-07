import React from "react";
import { Link } from "react-router-dom";
import style from "../Photos/Photos.module.scss";

const Photos = () => {
  return (
    <div>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"cities_gallery"}>
            <h1>Города</h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e4/f70/5da/thumb_46_300_300_0_0_crop.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e4/e6e/989/thumb_38_300_300_0_0_crop.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ed/0c4/8b0/thumb_971_300_300_0_0_crop.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e4/f70/485/thumb_45_300_300_0_0_crop.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e4/f70/81b/thumb_48_300_300_0_0_crop.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e5/0af/3e1/thumb_95_300_300_0_0_crop.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e4/f70/346/thumb_44_300_300_0_0_crop.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ed/0af/297/thumb_968_300_300_0_0_crop.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.image_slider}>
          <Link to={"green_gallery"}>
            <h1>Природа</h1>
          </Link>

          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b19/b5f/thumb_374_1140_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b19/c88/thumb_375_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5fd/c8f/52f/thumb_1495_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/4d9/027/thumb_866_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b19/dda/thumb_376_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5f1/154/96d/thumb_1190_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b1a/1da/thumb_379_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5fe/1ca/110/thumb_1499_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e4/f71/77c/thumb_52_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"culture_gallery"}>
            <h1>Культура</h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/52c/ee3/thumb_876_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/c69/4eb/thumb_1118_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b1f/56d/thumb_399_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b21/c7b/thumb_403_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b22/414/thumb_404_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/52d/4ad/thumb_877_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b20/341/thumb_401_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/314/3d1/thumb_1053_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.image_slider}>
          <Link to={"architecture_gallery"}>
            <h1>Архитектура</h1>
          </Link>

          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5fd/89f/2bd/thumb_1461_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/a3d/ede/thumb_361_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/1e1/4c0/thumb_1044_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5fd/8a7/738/thumb_1467_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/9ad/a8b/thumb_1086_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5fd/8a7/738/thumb_1467_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/4fa/f42/thumb_870_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ed/f85/53d/thumb_1016_1140_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b18/5c2/thumb_364_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"people_gallery"}>
            <h1>Люди</h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/351/1ed/thumb_1061_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b25/4d6/thumb_413_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>

            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b24/ffe/thumb_409_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5f1/97a/904/thumb_1216_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/c6b/b5e/thumb_1120_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/62c/f59/thumb_901_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b25/26b/thumb_411_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.image_slider}>
          <Link to={"food_gallery"}>
            <h1>Еда</h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5eb/ce5/28b/thumb_844_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/619/dbd/thumb_879_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/c51/bf3/thumb_1110_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b2a/780/thumb_420_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b2a/a6c/thumb_422_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5eb/cde/573/thumb_826_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b2a/d19/thumb_424_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b2a/d19/thumb_424_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/61b/3c2/thumb_883_600_0_0_0_auto.jpg  "
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"metro_gallery"}>
            <h1>Метро</h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b33/d1b/thumb_431_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b33/f8a/thumb_432_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>

            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/0be/thumb_433_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/40e/thumb_435_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/7b7/thumb_438_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/b17/thumb_441_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/8d9/thumb_439_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.image_slider}>
          <Link to={"art_gallery"}>
            <h1>Искусство</h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/625/32c/thumb_897_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5fd/c82/99c/thumb_1493_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b3b/4c7/thumb_446_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/c67/f24/thumb_1116_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b48/a14/thumb_462_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b3b/04e/thumb_444_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b3b/bb0/thumb_450_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/ca2/373/thumb_1124_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b3b/e7c/thumb_452_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"sport_gallery"}>
            <h1>Экстрим и спорт</h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/f5e/120/thumb_933_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/f5d/253/thumb_930_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>

            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/9ab/dc5/thumb_1083_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b58/01a/thumb_494_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/f5e/694/thumb_934_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b57/ec1/thumb_493_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ec/f5e/120/thumb_933_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.image_slider}>
          <Link to={"historical_gallery"}>
            <h1>Загадки археологии</h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ee/30e/665/thumb_1052_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b59/576/thumb_497_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b59/3a4/thumb_496_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b59/a5a/thumb_500_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5ed/0aa/375/thumb_966_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b59/839/thumb_499_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b59/576/thumb_497_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5e6/b59/6ec/thumb_498_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.wrapper}>
        <div className={style.image_slider}>
          <Link to={"tourism_gallery"}>
            <h1>Объекты зиёрат-туризма</h1>
          </Link>
          <div className={style.image_tracker}>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5fd/8b1/f40/thumb_1472_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/619/e12/7b1/thumb_2020_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5fd/8a7/738/thumb_1467_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/619/e13/6b5/thumb_2022_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/619/e18/446/thumb_2023_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/603/792/9d2/thumb_1591_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5fd/8b2/2db/thumb_1473_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/619/e11/137/thumb_2018_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
            <div className={style.slide}>
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/603/797/474/thumb_1594_600_0_0_0_auto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photos;
