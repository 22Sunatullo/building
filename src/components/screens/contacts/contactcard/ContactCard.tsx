import Image from "next/image";
import style from "./ContactCard.module.scss";

type TypeContact = {
  title: string;
  image: any;
  linkTitle: string;
  link: string;
};

export const ContactCard = ({ title, image, linkTitle, link }: TypeContact) => {
  return (
    <div className={style.conts}>
      <Image width={30} src={image} height={30} alt="contact" />
      <div className="">
        <h6>{title}</h6>
        <a href={link}>{linkTitle}</a>
      </div>
    </div>
  );
};
