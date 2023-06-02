import { FC } from "react";
import Image from "next/image";

import Aboutcoment from "./aboutcoment/Aboutcoment";
import AboutSlider from "./aboutslider/AboutSlider";

import styles from "./About.module.scss";
import logoS from "public/assets/logo/logo5.png";

const Aboutcomplex: FC = () => {
  return (
    <div>
      <div className={styles.complex}>
        <Aboutcoment />
        <AboutSlider />
        <div className="">
          <a href="#">
            <Image src={logoS} alt="logo5"/>
          </a>
          <a href="#"></a>
        </div>
      </div>
    </div>
  );
};

export default Aboutcomplex;
