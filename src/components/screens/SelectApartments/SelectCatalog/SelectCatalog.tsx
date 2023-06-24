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
import Image from "next/image";

export const SelectCatalog = () => {
  let prevId = "nav-prev";
  let nextId = "nav-next";

  return (
    <>
      <div className={style.Catalog}>
        {
          SelectData.map((el) => (
            <SelectCard key={el.id} {...el} />
          ))}
      </div>

      <div className={style.mobile}>
        <button id={prevId} className={style.prevbtn}>
          <Image
            src="/assets/logo/logo8.png"
            width={20}
            height={20}
            alt="new"
          />
        </button>
        <Swiper
          spaceBetween={20}
          pagination= {{
            clickable: true,
            el: '#pagination-container',
            bulletClass: style.bullet,
            bulletActiveClass: style.bulletActive
          }}
          navigation={{
            prevEl: `#${prevId}`,
            nextEl: `#${nextId}`,
            enabled: true,
          }}
          modules={[Pagination, Navigation]}
        >

          {SelectData.map((el) => {
            return (
              <SwiperSlide key={el.id} >
                <SelectCard {...el} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button id={nextId} className={style.nextbtn}>
          <Image
            src="/assets/logo/logo7.png"
            width={20}
            height={20}
            alt="new"
          />
        </button>
        <div id="pagination-container" className={style.pagination}></div>
        <div className={style.btnGold}>
          <button>
            Все квартиры
            <Image
              src="/assets/logo/ArrowLeftXL.svg"
              width={20}
              height={20}
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};
