"use client";
import Image from "next/image";
import Buttons from "../buttons/Buttons";
import { useState } from "react";
import style from "./Headers.module.scss";
import Link from "next/link";

export const Headers = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={style.wraperFix}>
      <nav className={style.fixhead}>
        <nav className={style.container}>
            <Image
              src={"/assets/logo/logo2.png"}
              width={150}
              height={150}
              alt="dd"
            />
          <div className={
              nav ? [style.btnOver, style.active].join() : [style.btnOver]
            }
          >
            <nav className={style.between}>
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
          </div>
          <nav onClick={() => setNav(!nav)} className={style.burger}>
            {nav ? (
              <button>
                <Image src="/assets/logo/menu.png" width={0} height={0} alt="menu"/>
              </button>
            ) : (
              <button>
                <Image src="/assets/logo/menu.png" width={0} height={0} alt="22"/>
              </button>
            )}
          </nav>
        </nav>
      </nav>
    </header>
  );
};
