import { FC } from "react";
import Aboutcoment from "./aboutcoment/Aboutcoment";
import AboutSlider from "./aboutslider/AboutSlider";
import styles from "./About.module.scss";


const Aboutcomplex: FC = () => {
  return (
      <div className={styles.complex}>
        <Aboutcoment />
        <AboutSlider />
      </div>
  );
};

export default Aboutcomplex;
