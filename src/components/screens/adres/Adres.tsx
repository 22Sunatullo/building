import AdresCard from "../adrescard/AdresCard";
import React from "react";
import Data from "./AdresData";
import style from "./Adres.module.scss";

const Adres = () => {
  return (
    <div className="container">
      <div className={style.AddresArrea}>{
        Data.map((el) => {
          return <AdresCard key={el.id} {...el} />;
        })}</div>
    </div>
  );
};

export default Adres;
