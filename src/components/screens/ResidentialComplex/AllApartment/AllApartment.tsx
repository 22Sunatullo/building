import Image from "next/image"
import style from './AllApartment.module.scss';

export const AllApartment = () => {
  return (
    <div className={style.cardAll}>
        <div className={style.colorText}>
            <h2>Посмотреть все квартиры</h2>
            <p>Здесь собраны все квартиры застройщика, удобный показ планировок и поиск</p>
        </div>
        <div className={style.butnStyle}>
        <button>
          <Image src="/assets/logo/vector.svg" alt="ffdd" width={10} height = {15}/>
        </button>
        </div>
    </div>
  )
}
