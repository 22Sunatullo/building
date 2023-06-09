import { ApartmentCatalog } from "./ApartmentCatalog/ApartmentCatalog";
import style from "./SelectApartments.module.scss";
import { SelectCatalog } from "./SelectCatalog/SelectCatalog";

export const SelectApartments = () => {
  return (
    <div>
      <div className={style.selectStyle}>
        <h1>Выберите квартиру</h1>
        <div className={style.btnCatalog}>
          <button>Все проекты</button>
          <button>ЖК 82 Towers</button>
          <button>ЖК проект №1</button>
        </div>
      </div>
      <div className={style.line}></div>
      <div className="flex justify-around">
        <ApartmentCatalog />
        <SelectCatalog />
      </div>
    </div>
  );
};
