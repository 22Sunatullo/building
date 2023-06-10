import OurAdvatagesCard from "./OurAdvatagesCard/OurAdvatagesCard";
import OurAdvatagesData from "./OurAdvatagesData"
import style from "./OurAdvantages.module.scss";

function OurAdvatages() {
  let cnt: number = 0;

  return (
    <>
      <div className={style.ourAd}>
        <h1>Наши преимущества</h1>
        <div className={style.data}>
          {
             OurAdvatagesData.map((el) => {
              cnt++;
              return cnt < 3 ? (
                <OurAdvatagesCard key={el.id} title={el.title} img={el.img} span="row-span-2" />
              ) : (
                <OurAdvatagesCard key={el.id} title={el.title} img={el.img} />
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default OurAdvatages;
