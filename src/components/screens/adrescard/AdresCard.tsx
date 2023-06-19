import Image from "next/image";
import style from './AdresCard.module.scss';


type TypeCard = {
  title:string, 
  adrestext:string, 
  image: string
}

const AdresCard = ({title,adrestext, image }:TypeCard ) => {
  return (
    <div className={style.addcont}>
      <div className={style.imgCont}>
        <Image src={image} alt="dd" width={40} height={40} />
      </div>
      <div className="titleadres">
        <h3>{title}</h3>
        <h6>{adrestext}</h6>
      </div>
    </div>
  );
};

export default AdresCard;
