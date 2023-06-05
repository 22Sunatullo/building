import Image from "next/image";
import { FC } from "react";
import styles from "./AboutSlider.module.scss";

import slider1 from "public/assets/slider/Rectangle 8.png";
import slider2 from "public/assets/slider/Rectangle 11.png";
import logoS from "public/assets/logo/logo5.png";

const AboutSlider: FC = () => {
  return (
    <div>
      <div className={styles.cheir}>
        <Image src={slider1} alt="cheir" />
        <Image src={slider2} alt="cheir" />
      </div>
      <a href="#">
        <Image src={logoS} alt="logo5" />
      </a>
      <a href="#">
        <Image src={logoS} alt="logo5" />
      </a>
    </div>
  );
};

export default AboutSlider;
