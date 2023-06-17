import { AutoTraid } from "./AutoTraid/AutoTraid";
import style from "./InstallmentPlan.module.scss";
import { InstallmentPlanCard } from "./InstallmentPlanCard/InstallmentPlanCard";
import SliderTraid from "./SliderTraid/SliderTraid";

export const InstallmentPlan = () => {
  return (
    <div className={style.title}>
      <h1>Рассрочка и Trade-in</h1>
      <div className={style.instalPosition}>
        <InstallmentPlanCard />
        <AutoTraid />
      </div>
      <div className={style.slider}>
      <SliderTraid/>
      </div>
    </div>
  );
};
