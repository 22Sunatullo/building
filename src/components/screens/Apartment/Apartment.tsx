'use client'
import { useState } from "react";
import { ApartmentList } from "./ApartmentList/ApartmentList";
import { ApartmentCategories } from "./ApartmentsData";
import style from './Apartment.module.scss'


function Apartment() {
 const [apartCategoriesId, setApartCategoriesId ] = useState(ApartmentCategories[0]?.id)

 const activeApartment = ApartmentCategories.find(el => apartCategoriesId == el.id)
 

  return (
    <>
      <div className="container py-[60px] border-b-2 border-[#A58038]">
        <h1 className="text-[36px] font-bold text-white mb-12">
          Выберите квартиру
        </h1>
        <div className={style.btnCont}>
          {ApartmentCategories.map(el => <button onClick={()=>{setApartCategoriesId(el.id)}} className="btnApr" key={el.id}>{el.name}</button>)}
          
          </div>
        <div >
          {activeApartment !== undefined && <ApartmentList apartments={activeApartment?.apartments}/>}
        </div>
      </div>
    </>
  );
}

export default Apartment;
