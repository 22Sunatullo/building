import Image from "next/image";
import style from './ResidentalCard.module.scss'

export const ResidentalCard = () => {
  return (
    <div className={style.residentalCard}>
      <Image
        src="/assets/logo/logo2.png"
        width={200}
        height={200}
        alt="82 logo"
      />
      <h2>Жилой комплекc 82-TOWERS</h2>
      <p>
        Приобретите квартиру своей мечты в одном из лучших районов Душанбе, по
        привлекательной цене.
      </p>
      <div className={style.btnResident}>
        <button>Квартиры</button>
        <button>Подробнее</button>
      </div>
    </div>
  );
};
