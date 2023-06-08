import style from "./Gelery.module.scss";
import { ButtonsSlider } from "./buttons/ButtonsSlider";
import { Cardg } from "./cardg/Cardg";

const Gelery = () => {
  return (
    <div className={style.gelery}>
      <h1>Галерея фотографий</h1>
      <div className={style.gelerycont}>
        <div className={style.glrcont}>
          <Cardg />
          <ButtonsSlider />
        </div>
      </div>
    </div>
  );
};

export default Gelery;
