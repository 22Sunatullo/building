'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import Image from "next/image";
import { NewsCard } from "../NewsCard/NewsCard";
import NewsInfo from "../NewsInfo";
import style from './NewsMap.module.scss';

export const NewsMap = () => {
  let prevId = "news-nav-prev";
  let nextId = "news-nav-next";

  return (
    <>
      <div className={style.cardG}>
        {
          NewsInfo.map(el => {
            return <NewsCard key={el.id} {...el} />
          })
        }
      </div>
      <div className={style.mobile}>
        <button id={nextId} className={style.nextbtn}>
          <Image
            src="/assets/logo/logo7.png"
            width={20}
            height={20}
            alt="new"
          />
        </button>
        <button id={prevId} className={style.prevbtn}>
          <Image
            src="/assets/logo/logo8.png"
            width={20}
            height={20}
            alt="new"
          />
        </button>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: '#pagination',
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
          {
            NewsInfo.map(el => {
              return <SwiperSlide key={el.id}>
                <NewsCard  {...el} />
              </SwiperSlide>
            })
          }
        </Swiper>
        <div id="pagination" className={style.swiperPagination}></div>
        
      </div>
    </>
  )
}
