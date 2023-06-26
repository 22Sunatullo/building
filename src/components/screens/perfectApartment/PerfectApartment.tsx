import Buttons from "../buttons/Buttons";
import style from "./PerfectApartment.module.scss";

export const PerfectApartment = () => {
  return (
    <div>
      <div className={style.perfect}>
        <h1>ЖК «82-TOWERS» идеальные помещения под бизнес: </h1>
        <p>
          На первых этажах ЖК «82-TOWERS» предусмотрены коммерческие помещения для
          бизнеса. Благодаря высокой проходимости в этом районе, вы сможете быстро
          окупить свои вложения. Воспользуйтесь шансом начать успешный бизнес в
          центре города.
        </p>
        <div className={style.btn}>
          <Buttons />
        </div>
      </div>

      {/* ----------mobile-------- */}
      <div className={style.allSlider}> 
            <div className={style.sliderMob}>
            </div>
            <div className={style.titleMob}>
                <h2>ЖК «82-TOWERS» идеальные помещения под бизнес</h2>
                <p>На первых этажах ЖК «82-TOWERS»  предусмотрены коммерческие помещения для бизнеса. Благодаря высокой проходимости в этом районе, вы сможете быстро окупить свои вложения. Воспользуйтесь шансом начать успешный бизнес в центре города. </p>
            </div>
        </div>
    </div>
  );
};
