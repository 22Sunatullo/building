import Image from "next/image";
import style from './OurAdvatagesCard.module.scss'
import { url } from "inspector";

type IFunc = {
  img: any;
  title: string;
  imgLogo: string
}

function OurAdvatagesCard({ title, img, imgLogo }: IFunc) {
  return (
    <div className={style.backgroundS} style={{ backgroundImage: `url(${img})`,  }}>
        <Image src={imgLogo} width={70} height={70}alt="sss" />
        <p className="">
          {title}
        </p>
    </div>
  );
}

export default OurAdvatagesCard;
