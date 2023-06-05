import Image from "next/image";

import logo5 from "public/assets/logo/logo5.png";
import logo6 from "public/assets/logo/logo6.png";

import style from "./ButtonsSlider.module.scss";

export const ButtonsSlider = () => {
  return (
    <div className={style.btnGelery}>
      <button>
        <Image src={logo5} width={10} alt="ssd" />
      </button>
      <button>
        <Image src={logo6} width={10} alt="ssd" />
      </button>
    </div>
  );
};
