"use client"
import { FC } from "react";
import Image from "next/image";
import Buttons from "../buttons/Buttons";

import style from "./Headers.module.scss";
import Link from "next/link";

export const Headers: FC = () => {
  return (
    <div className={style.wraperFix}>
      <header className={style.fixhead}>
        <nav className={style.container}>
          <nav className={style.start}>
            <Image src={"/assets/logo/logo2.png"} width={150} height={150} alt="dd" />
          </nav>
          <nav className="between">
            <ul>
              <li>
                <a href="#">Проекты</a>
              </li>
              <li>
                <Link href="/apartments">Квартиры</Link>
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
    </div>
  );
};
