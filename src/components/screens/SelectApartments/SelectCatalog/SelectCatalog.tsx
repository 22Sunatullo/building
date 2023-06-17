"use client";
import { SelectCard } from "../SelectCard/SelectCard";
import { SelectData } from "../SelectData";
import style from "./SelectCatalog.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export const SelectCatalog = () => {
  return (
    <>
      <div className={style.Catalog}>
        {SelectData.map((el) => (
          <SelectCard key={el.id} {...el} />
        ))}
      </div>
      <div className={style.mobile}>
        <Swiper
        spaceBetween={20}
        >
          {SelectData.map((el) => {
            return (
              <SwiperSlide>
                <SelectCard key={el.id} {...el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
