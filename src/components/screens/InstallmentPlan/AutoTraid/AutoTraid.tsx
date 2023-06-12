"use client";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import style from "./AutoTraid.module.scss";

export const AutoTraid = () => {
  return (
    <div className={style.cardInstall}>
      <div className={style.conteinerBack}>
        <h2>Auto trade-In</h2>
        <p>
        Возможность благодаря которой Вы сможете обменять свою машину на новую квартиру!
        </p>
        <form action="">
          <div className={style.inpt}>
            <h6>Стоимость квартиры</h6>
            <label>12000 сомони</label>
            <br />
            <Slider className={style.Range} />
          </div>
          <div className={style.inpt}>
            <h6>Стоимость квартиры</h6>
            <label>50%</label>
            <br />
            <Slider />
          </div>
          <div className={style.inpt}>
            <h6>Стоимость квартиры</h6>
            <label>36 мес</label>
            <br />
            <Slider />
          </div>
          <button>Расчитать</button>
        </form>
      </div>
    </div>
  );
};
