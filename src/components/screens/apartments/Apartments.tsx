import { FC } from "react";

import styles from "./Apartments.module.scss";
import ApartmentButton from "../apartmentbutton/ApartmentButton";
import { Wrapper } from "../wraper/Wraper";

const Apartments: FC = () => {
  return (
    <div className={styles.apart}>
      <Wrapper>
        <div className={styles.apartaments}>
          <ApartmentButton />
        </div>
        <div className={styles.mobileS}>
          <h3>
            О жилом комплексе
          </h3>
          <h1>
            82-TOWERS
          </h1>
          <p>
            Уникальный инженерно-архитектурный проект, комбинирующий комфорт жилого комплекса, зеленое пространство парковых зон и современность торгово развлекательного центра.
          </p>
          <p>
          Комплекс строится с использованием новейших  технологий и будет построен из высококачественных энергосберегающих строительных материалов
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Apartments;
