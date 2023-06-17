"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { AutoTraid } from "../AutoTraid/AutoTraid";
import { InstallmentPlanCard } from "../InstallmentPlanCard/InstallmentPlanCard";

export default function SliderTraid() {
  return (
    <>
      <div>
        <Swiper 
        autoHeight={true}
        spaceBetween={30}
         centeredSlides={true}>
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
