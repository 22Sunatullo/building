"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import style from './AboutSlider.module.scss'
import { EffectCoverflow, Pagination, Navigation } from "swiper";


export default function App() {
  let prevId = 'instagram-nav-prev'
  let nextId = 'instagram-nav-next'
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={{
          prevEl: `#${prevId}`,
          nextEl: `#${nextId}`,
          enabled: true,
        }}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
        }}
        breakpoints={{
          480: {
            spaceBetween: 28,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: false,
          },
          1360: {
            slidesPerView: 2,
            spaceBetween: 48,
            centeredSlides: false,
          }
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <div className={style.sliderController}>
          <button id={prevId}><img src="/assets/logo/logo5.png" alt="" /></button>
          <button  id={nextId}><img src="/assets/logo/logo6.png" alt="" /></button>
        </div>
      </Swiper>
    </>
  );
}
