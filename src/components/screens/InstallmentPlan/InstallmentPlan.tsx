import style from "./InstallmentPlan.module.scss";
import { InstallmentPlanCard } from "./InstallmentPlanCard/InstallmentPlanCard";

export const InstallmentPlan = () => {
  return (
    <div>
      <h1>Рассрочка и Trade-in</h1>
      <div className={style.instalPosition}>
        <InstallmentPlanCard />
        <InstallmentPlanCard />
      </div>
    </div>
  );
};
