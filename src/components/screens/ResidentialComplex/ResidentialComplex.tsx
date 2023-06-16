import { AllApartment } from "./AllApartment/AllApartment";
import { MobileSlider } from "./MobileSlider/MobileSlider";
import { ResidentalCard } from "./ResidentalCard/ResidentalCard";
import { ResidentialBack } from "./ResidentialBack/ResidentialBack";

import style from "./ResidentialComplex.module.scss";

export const ResidentialComplex = () => {
  return (
    <div>
      <div className={style.container}>
        <ResidentialBack />
        <div className={style.card}>
          <ResidentalCard />
          <AllApartment />
        </div>
      </div>
      <div className={style.mobileSlider}>
          <MobileSlider />
        </div>
    </div>
  );
};
