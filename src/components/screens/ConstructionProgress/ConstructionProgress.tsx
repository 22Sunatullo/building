"use client"
import Image from 'next/image';
import style from './ConstructionProgress.module.scss';
import constructionData from './ConstructionInfor';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation } from "swiper";


export const ConstructionProgress = () => {

    let prevId = "day-nav-prev";
    let nextId = "nextDay-nav-next";

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
                                return <SwiperSlide  key={el.id}> <button>{el.title}</button></SwiperSlide>
                            })
                        }

                    </Swiper>
                </div>
                <div className={style.sliderConstruction}>
                    <button id={nextId} className={style.next}><Image src='/assets/logo/logo7.png' width={50} height={50} alt="logo8" /></button>
                    <button  id={prevId} className={style.prev}><Image src='/assets/logo/logo8.png' width={50} height={50} alt="logo8" /></button>
                    <Swiper
                        spaceBetween={15}
                        navigation={{
                            prevEl: `#${prevId}`,
                            nextEl: `#${nextId}`,
                            enabled: true,
                          }}
                          modules={[
                            Navigation
                          ]}
                    >
                        <SwiperSlide>
                            <Image width={200} height={400} alt='image' src='/assets/ConstructionProgress/Rectangle 8.png' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image width={200} height={400} alt='image' src='/assets/ConstructionProgress/Rectangle 8.png' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image width={200} height={400} alt='image' src='/assets/ConstructionProgress/Rectangle 8.png' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image width={200} height={400} alt='image' src='/assets/ConstructionProgress/Rectangle 8.png' />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div >
    )
}
