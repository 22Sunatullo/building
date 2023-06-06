"use client";
import Image from "next/image";
import { FC } from "react";
import styles from "./AboutSlider.module.scss";


import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination} from "swiper";
import "swiper/css/navigation";





const AboutSlider: FC = () => {
  return (
    <div className="container flex items-end over overflow-hidden">
      <Swiper pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={2}
        >
        <SwiperSlide>
          <div className={styles.cheir}>
            <Image src="/assets/slider/Rectangle 11.png" width={400} height={250}   alt="cheir" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cheir}>
            <Image src="/assets/slider/Rectangle 11.png"  width={400} height={250}  alt="cheir" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cheir}>
            <Image src="/assets/slider/Rectangle 11.png"  width={400} height={250}  alt="cheir" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutSlider;
