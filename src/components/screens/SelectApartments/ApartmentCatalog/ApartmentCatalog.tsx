"use client";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import style from "./ApartmentCatalog.module.scss";
import Image from "next/image";

export const ApartmentCatalog = () => {
  return (
    <div className={style.formWidth}>
      <form action="" className={style.formStyle}>
        <div className={style.catalog}>
          <h6>Количество комнат</h6>
          <select name="" id="">
            <option value="">Все</option>
            <option value="">Все</option>
            <option value="">Все</option>
          </select>
        </div>
        <div  className={style.catalog}>
          <div >
            <h6>Площадь</h6>
          </div>
          <Slider range  className={style.containers}/>
        </div>
        <div  className={style.catalog}>
          <div >
            <h6>Этажность</h6>
          </div>
          <Slider range  className={style.containers}/>
        </div>
        <div className={style.btnGold}>
            <button>
            Все квартиры <Image src='/assets/logo/ArrowLeftXL.svg' width={20} height={20} alt=""/>
            </button>
        </div>
        <div className={style.btn}>
          <button>Оставить заявку</button>
        </div>
      </form>
    </div>
  );
};
