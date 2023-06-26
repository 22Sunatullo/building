'use client'
import { useState } from "react";
import { ApartmentList } from "./ApartmentList/ApartmentList";
import { ApartmentCategories } from "./ApartmentsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";


import style from './Apartment.module.scss'


function Apartment() {
  const [apartCategoriesId, setApartCategoriesId] = useState(ApartmentCategories[0]?.id)

  const activeApartment = ApartmentCategories.find(el => apartCategoriesId == el.id)


  return (
    <>
      <div id="apartments" className={style.TitleA}>
        <h1 className="text-[36px] font-bold text-white mb-12">
          Выберите квартиру
        </h1>
        <div className={style.btnCont}>
          {ApartmentCategories.map(el => <button 
          onClick={() => { setApartCategoriesId(el.id) }}  className={el.id === apartCategoriesId ? "btnApr active" : "btnApr"} key={el.id}>{el.name}</button>)}

        </div>
        <div className={style.mobileBtn}>
          <Swiper
          slidesPerView={3}
          >
            {
              ApartmentCategories.map(el => <SwiperSlide key={el.id}><button onClick={() => { setApartCategoriesId(el.id) }} className="btnApr">{el.name}</button>
              </SwiperSlide>)
            }
          </Swiper>
        </div>
        <div className={style.compApart}>
          {activeApartment !== undefined && <ApartmentList apartments={activeApartment?.apartments} />}
        </div>
      </div>
    </>
  );
}

export default Apartment;
