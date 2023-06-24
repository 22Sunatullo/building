import AdresCard from "../adrescard/AdresCard";
import Data from "./SoctialMediuData";
import style from './SoctialMedium.module.scss'

export const SoctialMedium = () => {
  return (
    <>        
      <div className={style.conteiner}>
        {Data.map((el) => {
          return <a key={el.id} href={el.link}><AdresCard {...el} /></a>;
        })}
      </div>
    </>
  )
}
