import Image from "next/image";
import { FC } from "react";
import style from './Adres.module.scss';

import logo3 from "public/assets/logo/logo 3.png";

const Adres: FC = () => {
  return (
    <div className={style.addcont}>
      <div className={style.imgCont}>
        <Image src={logo3} alt="dd" />
      </div>
      <div className="titleadres">
        <h3>Адрес застройки</h3>
        <p>Нусратулло Махсум дом 75</p>
      </div>
    </div>
  );
};

export default Adres;
