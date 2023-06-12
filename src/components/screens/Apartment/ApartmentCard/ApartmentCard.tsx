import Image from "next/image"
import style from './ApartamentCard.module.scss'


function ApartmentCard({ title, img, square, floor, block }: { title: string, img: any, square: string, floor: string, block: string }) {
  return (
    <div>
         <div className={style.cardContainer}>
        <div className={style.title}>
          <h4>{title}</h4>
        </div>
        <Image width={150} height={150} src={img} alt="" />
        <div className={style.contentT}>
          <div>
            <p>
              <span>Площадь</span>{" "}
              <span className="text-[#073535] font-bold">{square}</span>
            </p>
            <p>   
              <span>Этаж</span>{" "}
              <span className="text-[#073535] font-bold">{floor}</span>
            </p>
            <p>
              <span>Блок</span>{" "}
              <span className="text-[#073535] font-bold">{block}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApartmentCard