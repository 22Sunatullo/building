import { ResidentalCard } from "../ResidentalCard/ResidentalCard";
import style from "./ResidentialBack.module.scss";

export const ResidentialBack = () => {
  return (
    <div className={style.background}>
      <div className={style.containerBa}>
        <ResidentalCard />
      </div>
    </div>
  );
};
