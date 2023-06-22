'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsCard } from "../NewsCard/NewsCard";
import NewsInfo from "../NewsInfo";
import style from './NewsMap.module.scss';
import "swiper/css/pagination";

export const NewsMap = () => {
  return (
    <>
    <div className={style.cardG}>
        {
          NewsInfo.map(el =>{
            return <NewsCard key={el.id} {...el}/>
          })
        }
    </div>
    <div className={style.mobile}>
      <Swiper
      spaceBetween={30}
      >
        {
          NewsInfo.map(el =>{
            return <SwiperSlide key={el.id}>
               <NewsCard  {...el}/>
            </SwiperSlide>
          } )
        }
      </Swiper>
    </div>
    </>
  )
}
