"use client";
import Image from "next/image";
import { FC } from "react";
import styles from "./AboutSlider.module.scss";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import { useState } from 'react'

const AboutSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  let prevId = 'instagram-nav-prev'
  let nextId = 'instagram-nav-next'
  let paginationId = 'instagram-pagination'

  return (
    <div className="container flex items-end over overflow-hidden">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={{
          prevEl: `#${prevId}`,
          nextEl: `#${nextId}`,
          enabled: true,
        }}
        breakpoints={{
          480: {
            spaceBetween: 28,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1360: {
            slidesPerView: 2,
            spaceBetween: 48,
            centeredSlides: false,
          }
        }}
        autoHeight
        onAfterInit={(swiper) => {
          setActiveIndex(swiper.activeIndex)
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex)
        }}
        initialSlide={activeIndex}
        centeredSlides
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.cheir}>
            <Image
              src="/assets/slider/Rectangle 11.png"
              width={400}
              height={250}
              alt="cheir"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cheir}>
            <Image
              src="/assets/slider/Rectangle 11.png"
              width={400}
              height={250}
              alt="cheir"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cheir}>
            <Image
              src="/assets/slider/Rectangle 11.png"
              width={400}
              height={250}
              alt="cheir"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.btns}>
        <button id={prevId}>
          <Image
            src="/assets/logo/logo5.png"
            width={30}
            height={30}
            alt="cheir"
          />
        </button>
        <button id={nextId}>
          <Image
            src="/assets/logo/logo6.png"
            width={30}
            height={30}
            alt="cheir"
          />
        </button>
      </div>
    </div>
  );
};

export default AboutSlider;
