import { AllApartment } from "./AllApartment/AllApartment";
import { ResidentalCard } from "./ResidentalCard/ResidentalCard";
import { ResidentialBack } from "./ResidentialBack/ResidentialBack";

import style from './ResidentialComplex.module.scss'

export const ResidentialComplex = () => {
  return (
    <div className={style.container}>
      <ResidentialBack />
      <div className={style.card}>
        <ResidentalCard />
        <AllApartment/>
      </div>
    </div>
  );
};
