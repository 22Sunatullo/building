import { FC } from "react"
import {  IApartament } from "../ApartmentsData"
import ApartmentCard from "../ApartmentCard/ApartmentCard"
import style from './ApartmentList.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

type ListType = {
  apartments: IApartament[]
}

export const ApartmentList: FC<ListType> = ({ apartments }) => {
  return (
    <div>
      <div className={style.btnCatalog}>
        <ul>
          {
            apartments.map(el => <ApartmentCard key={el.id} {...el} />)
          }
        </ul>
      </div>
      <div className={style.mobileCatalog}>
        <Swiper
        spaceBetween={20}
        >
          {
           
             apartments.map(el =><SwiperSlide> <ApartmentCard key={el.id} {...el} /> </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  )
}
