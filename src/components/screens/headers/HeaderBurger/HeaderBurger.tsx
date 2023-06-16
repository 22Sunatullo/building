"use client";
import { useState } from "react";
import Link from "next/link";
import Buttons from "../../buttons/Buttons";

export const HeaderBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <div className="">
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
          <nav>
            <a href="#">+992 901 09 00 00</a>
            <Buttons />
          </nav>
        </div>
      )}
    </div>
  );
};
