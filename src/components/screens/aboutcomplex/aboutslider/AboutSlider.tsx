"use client";
import Image from "next/image";
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
        slidesPerView={2}
        spaceBetween={90}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={style.imgAuto}
      >
        <SwiperSlide>
          <Image width={200} height={300} alt="smm" src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={200} height={300} alt="smm" src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={200} height={300} alt="smm" src="/assets/slider/Rectangle 8.png" />
        </SwiperSlide>
        <div className={style.sliderController}>
          <div className={style.sliderBtnW}>
            <button className={style.btnImg} id={prevId}><Image width={200} height={300} alt="smm" src="/assets/logo/logo5.png" /></button>
            <button className={style.btnImg2} id={nextId}><Image width={200} height={300} alt="smm" src="/assets/logo/logo6.png" /></button>
          </div>
        </div>
      </Swiper>

    </>
  );
}
