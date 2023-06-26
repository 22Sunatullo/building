"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

import style from "./Gelery.module.scss";
import { ButtonsSlider } from "./buttons/ButtonsSlider";
import { Cardg } from "./cardg/Cardg";
import { MobileSlider } from "./MobileSlider/MobileSlider";

const Gelery = () => {
  let prevId = "instagram-nav-prev";
  let nextId = "instagram-nav-next";
  return (
    <div id="galery">
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
          centeredSlides={true}
          loop={true}
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
        <ButtonsSlider btnNprev={prevId} btnNnext={nextId} />
      </div>

      <div className={style.mobileGalery}>
        <button id={prevId} className={style.prev}><Image src='/assets/logo/logo8.png' width={30} height={30} alt="logo8" /></button>
        <Swiper
          navigation={{
            prevEl: `#${prevId}`,
            nextEl: `#${nextId}`,
            enabled: true,
          }}
          pagination={{
            clickable: true,
            el: '#pagination-galery',
            bulletClass: style.bullet,
            bulletActiveClass: style.bulletActive
          }}
         
          modules={[Pagination, Navigation]}
        >

          <SwiperSlide>
            <MobileSlider image="/assets/galery/slider1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <MobileSlider image="/assets/galery/slider1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <MobileSlider image="/assets/galery/slider1.png" />
          </SwiperSlide>
        </Swiper>
        <div id="pagination-galery" className={style.swiperPagination}></div>
        <button id={nextId} className={style.next}><Image src='/assets/logo/logo7.png' width={30} height={30} alt="logo8" /></button>
      </div>
    </div>
  );
};

export default Gelery;
