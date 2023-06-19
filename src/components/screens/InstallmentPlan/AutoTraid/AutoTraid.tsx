"use client";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import style from "./AutoTraid.module.scss";

const styles = {
  rail: {
    backgroundColor: "#988064",
    height: 2,
  },
  track: {
    backgroundColor: "#988064",
    height: 2,
  },
  handle: {
    borderColor: "#988064", // Цвет обводки бегунка слайдера
    backgroundColor: "#988064", // Цвет бегунка слайдера
  },
};

export const AutoTraid = () => {
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
            <span>12000 сомони</span>
            <br />
            <Slider
              style={{ height: "2px" }}
              railStyle={styles.rail}
              trackStyle={styles.track}
              handleStyle={styles.handle}
              defaultValue={30}
              min={0}
              max={100}
            />
          </div>
          <div className={style.inpt}>
            <h6>Стоимость квартиры</h6>
            <span>50%</span>
            <br />
            <Slider
              style={{ height: "2px" }}
              railStyle={styles.rail}
              trackStyle={styles.track}
              handleStyle={styles.handle}
              defaultValue={30}
              min={0}
              max={100}
            />
          </div>
          <div className={style.inpt}>
            <h6>Стоимость квартиры</h6>
            <span>36 мес</span>
            <br />
            <Slider
              style={{ height: "2px" }}
              railStyle={styles.rail}
              trackStyle={styles.track}
              handleStyle={styles.handle}
              defaultValue={30}
              min={0}
              max={100}
            />
          </div>
          <button>Расчитать</button>
        </form>
      </div>
    </div>
  );
};
