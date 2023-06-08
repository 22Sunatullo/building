import AdresCard from "../adrescard/AdresCard";
import React from "react";
import Data from "./AdresData";

const Adres = () => {
  const adresData = Data.map((el) => {
    return <AdresCard title={el.title} Adrestext={el.text} id={el.id} />;
  });
  return (
    <div className="container">
      <div className="flex justify-between py-[100px] border-b-2 border-[#A58038] ">
        {adresData}
      </div>
    </div>
  );
};

export default Adres;
