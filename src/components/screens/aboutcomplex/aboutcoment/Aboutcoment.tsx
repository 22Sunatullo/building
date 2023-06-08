import { FC } from "react";
import Buttons from "../../buttons/Buttons";

import style from "./Aboutcoment.module.scss";

const Aboutcoment: FC = () => {
  return (
    <div className={style.coments}>
      <h1>О жилом комплексе</h1>
      <p>
        Уникальный инженерно-архитектурный проект, комбинирующий комфорт жилого
        комплекса, зеленое пространство парковых зон и современность
        торгово-развлекательного центра.
      </p>
      <p>
        Комплекс строится с использованием новейших технологий и будет построен
        из высококачественных энергосберегающих строительных материалов
      </p>

      <Buttons />
    </div>
  );
};

export default Aboutcoment;
