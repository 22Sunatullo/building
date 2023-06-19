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
  let prevId = "instagram-nav-prev";
  let nextId = "instagram-nav-next";

  return (
    <>
      <div className={style.Catalog}>
        {SelectData.map((el) => (
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
          pagination={{
            dynamicBullets: true,
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
              <SwiperSlide>
                <SelectCard key={el.id} {...el} />
              </SwiperSlide>
            );
          })}
          <div className={style.pagination}></div>
        </Swiper>
        <button id={nextId} className={style.nextbtn}>
          <Image
            src="/assets/logo/logo7.png"
            width={20}
            height={20}
            alt="new"
          />
        </button>

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
