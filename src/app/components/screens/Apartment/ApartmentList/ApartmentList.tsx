import { FC } from "react"
import { ApartmentCategories, IApartament } from "../ApartmentsData"
import ApartmentCard from "../ApartmentCard/ApartmentCard"

type ListType = {
   apartments: IApartament[] 
}

export const ApartmentList:FC<ListType> = ({apartments}) => {
  return (
    <div>
        <ul className="dataApr grid grid-cols-4 gap-10 p-7 mb-[60px]">
            {
                apartments.map(el => <ApartmentCard key={el.id} {...el}/>)
            }
        </ul>
    </div>
  )
}
