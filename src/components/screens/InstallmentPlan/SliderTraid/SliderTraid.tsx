"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { AutoTraid } from "../AutoTraid/AutoTraid";
import { InstallmentPlanCard } from "../InstallmentPlanCard/InstallmentPlanCard";
import style from './SliderTraid.module.scss'
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Image from "next/image";

export default function SliderTraid() {
  const slideStyles = {
    backgroundColor: 'none',
    display: 'flex',
    margin: '2em auto',
    alignItems: 'stretch'
  };

  let prevId = 'instagram-nav-prev'
  let nextId = 'instagram-nav-next'

  return (

    <>
      <div className={style.Traid}>
        <div>
          <button id={nextId} className={style.btnLeft}><Image src='/assets/logo/buttonLeft.png' width={30} height={30} alt="button" /></button>

          <Swiper
            style={slideStyles}
            pagination= {{
              clickable: true,
              el: '#pagination-for-sale',
              bulletClass: style.bullet,
              bulletActiveClass: style.bulletActive
            }}
            spaceBetween={20}
            navigation={{
              prevEl: `#${prevId}`,
              nextEl: `#${nextId}`,
              enabled: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
          >
            <SwiperSlide>
              <InstallmentPlanCard />
            </SwiperSlide>
            <SwiperSlide>
              <AutoTraid />
            </SwiperSlide>
          </Swiper>
          <div id="pagination-for-sale" className={style.swiperPagination}></div>

          <button id={prevId} className={style.btnRight}><Image src='/assets/logo/buttonRight.png' width={30} height={30} alt="button" /></button>
        </div>
      </div>
    </>
  );
}
