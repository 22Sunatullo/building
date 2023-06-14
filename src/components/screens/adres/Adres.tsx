import AdresCard from "../adrescard/AdresCard";
import React from "react";
import Data from "./AdresData";
import style from "./Adres.module.scss";

const Adres = () => {
  const adresData = Data.map((el) => {
    return <AdresCard title={el.title} Adrestext={el.text} id={el.id} />;
  });
  return (
    <div className="container">
      <div className={style.AddresArrea}>{adresData}</div>
    </div>
  );
};

export default Adres;
