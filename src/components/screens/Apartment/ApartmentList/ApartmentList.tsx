import { FC } from "react"
import { IApartament } from "../ApartmentsData"
import ApartmentCard from "../ApartmentCard/ApartmentCard"
import style from './ApartmentList.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

type ListType = {
  apartments: IApartament[]
}

export const ApartmentList: FC<ListType> = ({ apartments }) => {

  let prevId = "instagram-prev";
  let nextId = "instagram-next";

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
          spaceBetween={20}
          navigation={{
            prevEl: `#${prevId}`,
            nextEl: `#${nextId}`,
            enabled: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {

            apartments.map(el => <SwiperSlide key={el.id}> <ApartmentCard {...el} /> </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  )
}
