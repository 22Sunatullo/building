import AdresCard from "../adrescard/AdresCard";
import Data from "./AdresData";

export const AreaAdres = () => {
    const adresData = Data.map((el) => {
        return <AdresCard title={el.title} Adrestext={el.text} id={el.id} />;
      });


      return (
        <div className="container">
          <div className="flex justify-between py-[100px] border-b-2 border-[#A58038] ">
            {adresData}
          </div>
        </div>
      );
}
