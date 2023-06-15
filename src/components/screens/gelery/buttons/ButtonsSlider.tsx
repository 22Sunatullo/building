import Image from "next/image";

import logo5 from "public/assets/logo/logo5.png";
import logo6 from "public/assets/logo/logo6.png";

import style from "./ButtonsSlider.module.scss";

export const ButtonsSlider = ({btnNprev, btnNnext}: {btnNprev:any, btnNnext: any }) => {
  return (
    <div className={style.btnGelery}>
      <button id={btnNprev}>
        <Image src={logo5} width={10} alt="ssd" />
      </button>
      <button id={btnNnext}>
        <Image src={logo6} width={10} alt="ssd" />
      </button>
    </div>
  );
};
