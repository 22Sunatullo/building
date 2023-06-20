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
        <h2>Auto trade-In</h2>
        <p>
          Возможность благодаря которой Вы сможете обменять свою машину на новую
          квартиру!
        </p>
        <form action="">
          <div className={style.inpt}>
            <input
              type="email"
              className="peer m-0 block h-[58px] w-full rounded border  border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              htmlFor="floatingInput"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Введите марку автомобиля</label
            >
          </div>

          <div className={style.inpt}>
            <input
              type="email"
              className="peer m-0 block h-[58px] w-full rounded border  border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              htmlFor="floatingInput"
              className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                Введите модель
              </label>
          </div>
          <div className={style.inptS}>
            <h6>Год выпуска автомобиля</h6>
            <span>2000 год</span>
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
