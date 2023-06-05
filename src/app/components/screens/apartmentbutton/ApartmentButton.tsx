import { FC } from "react";
import Image from "next/image";
import logoImage from "public/assets/logo/logo2.png";
import styles from "./ApartmentButton.module.scss";

const ApartmentButton: FC = () => {
  return (
    <div className={styles.appartb}>
      <div className="titleName">
        <h1>Жилой комплекс комфорт класса</h1>
        <p>
          Приобретите квартиру своей мечты в одном из лучших районов Душанбе, по
          привлекательной цене.
        </p>
      </div>
      <div className={styles.btnClass}>
        <button>Квартиры</button>
        <Image src={logoImage} width={150} height={50} alt="sss"/>
      </div>
    </div>
  );
};

export default ApartmentButton;
