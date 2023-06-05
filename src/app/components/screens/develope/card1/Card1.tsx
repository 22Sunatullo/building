import Image from "next/image";

import style from "./Card1.module.scss";
import tower from "public/assets/card/82 tower 3.png";

export const Card1 = () => {
  return (
    <div className={style.card1}>
      <Image src={tower} alt="tower" />
    </div>
  );
};
