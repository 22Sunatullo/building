"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import style from "./Gelery.module.scss";
import { ButtonsSlider } from "./buttons/ButtonsSlider";
import { Cardg } from "./cardg/Cardg";

const Gelery = () => {
  let prevId = "instagram-nav-prev";
  let nextId = "instagram-nav-next";
  return (
    <div className={style.gelery}>
      <h1>Галерея фотографий</h1>
      <Swiper
      navigation={{
        prevEl: `#${prevId}`,
        nextEl: `#${nextId}`,
        enabled: true,
      }}
      modules={[
        Navigation
      ]}
      centeredSlides = {true}
       loop = {true}
        spaceBetween={24}
      >
        <SwiperSlide>
          <div className={style.gelerycont}>
            <div className={style.glrcont}>
              <Cardg />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.gelerycont}>
            <div className={style.glrcont}>
              <Cardg />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.gelerycont}>
            <div className={style.glrcont}>
              <Cardg />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <ButtonsSlider btnNprev = {prevId} btnNnext={nextId} />
    </div>
  );
};

export default Gelery;
