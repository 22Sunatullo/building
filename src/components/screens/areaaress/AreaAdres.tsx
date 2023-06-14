import AdresCard from "../adrescard/AdresCard";
import Data from "./AdresData";
import style from './AreaAdres.module.scss'
export const AreaAdres = () => {
  return (
    <div className="container">
      <div className={style.AddresArrea}>
        {Data.map((el) => {
          return <AdresCard title={el.title} Adrestext={el.text} id={el.id} />;
        })}
      </div>
    </div>
  );
};
