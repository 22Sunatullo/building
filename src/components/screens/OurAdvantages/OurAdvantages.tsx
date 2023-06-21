import OurAdvatagesCard from "./OurAdvatagesCard/OurAdvatagesCard";
import OurAdvatagesData from "./OurAdvatagesData"
import style from "./OurAdvantages.module.scss";

function OurAdvatages() {

  return (
    <>
      <div className={style.ourAd}>
        <h1>Наши преимущества</h1>
        <div className={style.data}>
          {
             OurAdvatagesData.map(el =>{
              return <OurAdvatagesCard key={el.id} {...el}/>
             } )
          }
        </div>
      </div>
    </>
  );
}

export default OurAdvatages;
