"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { AutoTraid } from "../AutoTraid/AutoTraid";
import { InstallmentPlanCard } from "../InstallmentPlanCard/InstallmentPlanCard";

export default function SliderTraid() {
  const slideStyles = {
    backgroundColor: 'none',
    display: 'flex',
    margin: '2em 0',
    alignItems: 'stretch'
  };

  return (
    <>
      <div>
        <Swiper 
         style={slideStyles}
         spaceBetween={20}
        >
          <SwiperSlide>
            <InstallmentPlanCard />
          </SwiperSlide>
          <SwiperSlide>
            <AutoTraid />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
