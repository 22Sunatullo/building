import Image from "next/image";
import { FC } from "react";
import styles from "./AboutSlider.module.scss";

import slider1 from "public/assets/slider/Rectangle 8.png";
import slider2 from "public/assets/slider/Rectangle 11.png";

import logoS from "public/assets/logo/logo5.png";
import logo6 from "public/assets/logo/logo6.png";

const AboutSlider: FC = () => {
  return (
    <div className="container flex items-end ">
      <div className={styles.cheir}>
        <Image src={slider1} alt="cheir" />
          
      </div>
      <div className="flex">
        <button>
          <Image src={logoS} alt="logo5" />
        </button>
        <button>
          <Image src={logo6} alt="logo5" />
        </button>
      </div>
    </div>
  );
};

export default AboutSlider;
