import AdresCard from "../adrescard/AdresCard";
import Data from "./SoctialMediuData";
import style from './SoctialMedium.module.scss'

export const SoctialMedium = () => {
  return (
    <div className="container">        
      <div className={style.conteiner}>
        {Data.map((el) => {
          return <AdresCard key={el.id} {...el} />;
        })}
      </div>
    </div>
  )
}
