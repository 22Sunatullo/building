"use client";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import style from "./ApartmentCatalog.module.scss";
import Image from "next/image";

const styles = {
  rail: {
    backgroundColor: "#FFCB7B",
    height: 2,
  },
  track: {
    backgroundColor: "#FFCB7B",
    height: 2,
  },
  handle: {
    borderColor: "#FFCB7B",
    backgroundColor: "#FFCB7B",
  },
};

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
        <div className={style.catalog}>
          <div>
            <h6>Площадь</h6>
            <div className={style.styleB}>
              <h3>
                от <span>120 м2</span>
              </h3>
              <h3 className={style.endItem}>
                от <span>520 м2</span>
              </h3>
            </div>
          </div>
          <Slider
            range
            style={{ height: "2px" }}
            railStyle={styles.rail}
            trackStyle={styles.track}
            handleStyle={styles.handle}
          />
        </div>
        <div className={style.catalog}>
          <div>
            <h6 >Этажность</h6>
            <div className={style.styleB}>
              <h3>
                от <span>- 1 этаж</span>
              </h3>
              <h3 className={style.endItem}>
                от <span> 25 этаж</span>
              </h3>
            </div>
          </div>
          <Slider
            range
            style={{ height: "2px" }}
            railStyle={styles.rail}
            trackStyle={styles.track}
            handleStyle={styles.handle}
          />
        </div>
        <div className={style.btnGold}>
          <button>
            Все квартиры{" "}
            <Image
              src="/assets/logo/ArrowLeftXL.svg"
              width={20}
              height={20}
              alt=""
            />
          </button>
        </div>
        <div className={style.btn}>
          <button>Оставить заявку</button>
        </div>
      </form>
    </div>
  );
};
