import Image from "next/image";
import style from "./SelectCard.module.scss";

export const SelectCard = () => {
  return (
    <div className={style.cardStyle}>
      <div className={style.cardContainer}>
        <div className={style.title}>
          <h4  className="text-start text-[13px] inline-block text-white px-3 py-1 bg-[#073535] font-[300] rounded-[7px] mt-1">1-комнатная квартира</h4>
        </div>
        <Image
          width={150}
          height={150}
          src="assets/apartment/image.svg"
          alt=""
        />
        <div className={style.contentT}>
          <p>
            <span>Площадь</span> <span>14884</span>
          </p>
          <p>
            <span>Этаж</span> <span>4</span>
          </p>
          <p>
            <span>Блок</span> <span>1</span>
          </p>
        </div>
      </div>
    </div>
  );
};
