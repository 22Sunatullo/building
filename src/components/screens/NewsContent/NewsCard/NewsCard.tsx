import Image from "next/image";
import style from './NewsCard.module.scss'

interface cardType {
  day: string;
  image: any;
  title: string;
}


export const NewsCard = ({image, title, day}:cardType) => {
  return (
    <div className={style.bgrT}>
      <Image src={image} width={400} height={280} alt="news" />
      <div className={style.newsSt}>
        <h5>{day}</h5>
        <h4>{title}</h4>
      </div>
    </div>
  );
};
