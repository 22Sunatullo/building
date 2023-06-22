'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import style from './MobileSlider.module.scss'
import { AllApartment } from "../AllApartment/AllApartment";
import { ResidentalCard } from "../ResidentalCard/ResidentalCard";

export const MobileSlider = () => {
  return (
    <div>
        <Swiper
        spaceBetween={20}
        className={style.slider}
        pagination={{
          dynamicBullets: true,
          el: '.swiper-pagination' // добавьте этот параметр
        }}
        modules={[Pagination]}
        >
            <SwiperSlide>
                <ResidentalCard/>
            </SwiperSlide>
            <SwiperSlide>
                <AllApartment/>
            </SwiperSlide>
            <div className={style.pagination + ' swiper-pagination'}></div>
        </Swiper>
    </div>
  )
}
