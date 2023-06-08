import Image from "next/image";
import imgLogo from "public/assets/logo/logo 4.png"
import style from './OurAdvatagesCard.module.scss'

type IFunc = {
  img: any;
  title: string;
  span?: string;
}

function OurAdvatagesCard({title, img, span }: IFunc) {
  return (
    <div
      className={`relative ${span} flex flex-col justify-between items-start gap-[38px] rounded-[24px] overflow-hidden`}
    >
      <div className="flex relative z-30 flex-col p-7 h-[100%] justify-between items-start gap-[38px]">
        <Image src={imgLogo} className={style.imgLogo}   alt="sss" />
        <p className="text-[19px] text-white font-bold leading-[32px] relative z-10">
          {title}
        </p>
      </div>
      <Image
        src={img}
        width={1222} 
        className="absolute w-full h-[100%] top-0 left-0 object-cover"
        height={1222} 
        alt="ddd"
      />
      <div className="tyom absolute w-full h-[100%] z-20"></div>
    </div>
  );
}

export default OurAdvatagesCard;
