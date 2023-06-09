"use client"
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
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
            <Slider range />
          </div>
          <div className={style.inpt}>
            <h6>Первоначальный взнос</h6>
            <label>50%</label>
            <br />
            <input type="range" id="vol" name="vol" min="0" max="50" />
          </div>
          <div className={style.inpt}>
            <h6>Срок</h6>
            <label><span>36</span> мес</label>
            <br />
            <input type="range" id="vol" name="vol" min="0" max="50" />
          </div>
          <button>Расчитать</button>
        </form>
      </div>
    </div>
  );
};
