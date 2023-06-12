import { FC } from "react"
import { ApartmentCategories, IApartament } from "../ApartmentsData"
import ApartmentCard from "../ApartmentCard/ApartmentCard"
import style from './ApartmentList.module.scss';

type ListType = {
   apartments: IApartament[] 
}

export const ApartmentList:FC<ListType> = ({apartments}) => {
  return (
    <div className={style.btnCatalog}>
        <ul>
            {
                apartments.map(el => <ApartmentCard key={el.id} {...el}/>)
            }
        </ul>
    </div>
  )
}
