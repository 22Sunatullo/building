import Image from "next/image";
import style from './AdresCard.module.scss';

import logo3 from "public/assets/logo/logo 3.png";


type TypeCard = {
  title:string, 
  Adrestext:string, 
  id:number
}

const AdresCard = ({title,Adrestext, id }:TypeCard ) => {
  return (
    <div className={style.addcont} key={id}>
      <div className={style.imgCont}>
        <Image src={logo3} alt="dd" />
      </div>
      <div className="titleadres">
        <h3>{title}</h3>
        <h6>{Adrestext}</h6>
      </div>
    </div>
  );
};

export default AdresCard;
