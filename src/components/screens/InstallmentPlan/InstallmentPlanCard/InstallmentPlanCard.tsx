"use client";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import style from "./InstallmentPlanCard.module.scss";

export const InstallmentPlanCard = () => {
  return (
    <div className={style.cardInstall}>
      <div className={style.conteinerBack}>
        <h2>Рассрочка</h2>
        <p>
          Отправьте заявку прямо сейчас и мы свяжемся с вами в ближайшее время.
        </p>
        <form action="">
          <div className={style.inpt}>
            <h6>Стоимость квартиры</h6>
            <label>12000 сомони</label>
            <br />
            <input type="range" />
          </div>
          <div className={style.inpt}>
            <h6>Стоимость квартиры</h6>
            <label>50%</label>
            <br />
            <input type="range" />
          </div>
          <div className={style.inpt}>
            <h6>Стоимость квартиры</h6>
            <label>36 мес</label>
            <br />
            <input type="range" />
          </div>
          <button>Расчитать</button>
        </form>
      </div>
    </div>
  );
};
