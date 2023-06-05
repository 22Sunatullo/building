
import ApartmentCard from "./ApartmentCard/ApartmentCard";
import { ApartmentsData } from "./ApartmentsData";
import "./style.css";

function Apartment() {
  const filterRoom = ApartmentsData.map((el) => <ApartmentCard key={el.id} {...el} />);

  return (
    <>
      <div className="container py-[60px] border-b-2 border-[#A58038]">
        <h1 className="text-[36px] font-bold text-white mb-12">
          Выберите квартиру
        </h1>
        <div className="flex gap-6 mb-[60px]">
          <button  className="btnApr">
            Все квартиры
          </button>
          <button className="btnApr">
            1-комнатная
          </button>
          <button  className="btnApr">
            2-комнатная
          </button>
          <button  className="btnApr">
            3-комнатная
          </button>
          <button  className="btnApr">
            4+
          </button>
        </div>
        <div className="dataApr grid grid-cols-4 gap-10 p-7 mb-[60px]">
          {filterRoom}
        </div>
      </div>
    </>
  );
}

export default Apartment;
