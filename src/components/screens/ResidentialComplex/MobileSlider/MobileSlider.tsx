'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { AllApartment } from "../AllApartment/AllApartment";
import { ResidentalCard } from "../ResidentalCard/ResidentalCard";

import style from "./MobileSlider.module.scss";

export const MobileSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        className={style.slider}
        pagination= {{
          clickable: true,
          el: '#pagination-container',
          bulletClass: style.bullet,
          bulletActiveClass: style.bulletActive
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <ResidentalCard />
        </SwiperSlide>
        <SwiperSlide>
          <AllApartment />
        </SwiperSlide>
      </Swiper>
      
      <div id="pagination-container" className={style.swiperPagination}></div>
    </div>
  );
};