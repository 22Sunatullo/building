"use client"
import Image from 'next/image';
import style from './ConstructionProgress.module.scss';
import constructionData from './ConstructionInfor';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
export const ConstructionProgress = () => {
    return (
        <div>
            <div className={style.titleConstruction}>
                <h1>Ход строительства</h1>
                <div className={style.construction}>
                    {
                        constructionData.map(el => {
                            return <button key={el.id}>{el.title}</button>
                        })
                    }
                </div>
                <div className={style.imsge}>
                    <div>
                        <Image width={200} height={400} alt='image' src='/assets/ConstructionProgress/Rectangle 8.png' />
                    </div>
                    <div>
                        <Image width={200} height={400} alt='image' src='/assets/ConstructionProgress/Rectangle 8.png' />
                    </div>
                    <div>
                        <Image width={200} height={400} alt='image' src='/assets/ConstructionProgress/Rectangle 8.png' />
                    </div>
                </div>
            </div>
            <div className={style.mobileConstruction}>
                <div className={style.constructionMobile}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={5}
                    >
                        {
                            constructionData.map(el => {
                                return <SwiperSlide> <button key={el.id}>{el.title}</button></SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
