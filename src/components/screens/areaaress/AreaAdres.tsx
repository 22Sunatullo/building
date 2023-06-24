import AdresCard from "../adrescard/AdresCard";
import Data from "./AdresData";
import style from './AreaAdres.module.scss'
export const AreaAdres = () => {
  return (
    <>
      <div className={style.AddresArrea}>
        {Data.map((el) => {
          return <AdresCard key={el.id} {...el} />;
        })}
      </div>
    </>
  );
};
