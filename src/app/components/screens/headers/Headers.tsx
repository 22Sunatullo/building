import { FC } from "react";
import Image from "next/image";
import Buttons from "../buttons/Buttons";

import logoImage from "public/assets/logo/logo2.png";
import style from "./Headers.module.scss";
import { Wrapper } from "../wraper/Wraper";

export const Headers: FC = () => {
  return (
    <Wrapper>
      <header className={style.fixhead}>
        <nav className={style.container}>
          <nav className={style.start}>
            <Image src={logoImage} alt="dd" />
          </nav>
          <nav className="between">
            <ul>
              <li>
                <a href="#">Проекты</a>
              </li>
              <li>
                <a href="#">Квартиры</a>
              </li>
              <li>
                <a href="#">Галерея</a>
              </li>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Для бизнеса</a>
              </li>
            </ul>
          </nav>
          <nav className={style.end}>
            <a href="#">+992 901 09 00 00</a>
            <Buttons />
          </nav>
        </nav>
      </header>
    </Wrapper>
  );
};
