"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";


export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 90,
          modifier: 3.5,
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
        <div className="sliders-controler">
          <button></button>
          <button>  </button>
        </div>
      </Swiper>
    </>
  );
}
