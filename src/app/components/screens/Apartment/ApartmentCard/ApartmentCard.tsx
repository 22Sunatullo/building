import Image from "next/image"

function ApartmentCard({ title, img, square, floor, block }: { title: string, img: any, square: string, floor: string, block: string }) {
  return (
    <div className="aprDiv bg-[#FFFFFF] relative p-5 w-[265px] h-[264px] rounded-[16px]">
      <h4 className="text-start text-[13px] inline-block text-white px-3 py-1 bg-[#073535] font-[300] rounded-[7px]">{title}</h4>
      <Image className="mx-auto mt-[52px]" width={150} height={150} src={img} alt="" />
      <div className="absolute aparHover p-5 overflow-hidden flex flex-col  justify-between bottom-0 left-0 w-full text-[0px] h-2">
        <p className="flex justify-between"><span>Площадь</span> <span className="text-[#073535] font-bold">{square}</span></p>
        <p className="flex justify-between"><span>Этаж</span> <span className="text-[#073535] font-bold">{floor}</span></p>
        <p className="flex justify-between"><span>Блок</span> <span className="text-[#073535] font-bold">1{block}</span></p>
      </div>
    </div>
  )
}

export default ApartmentCard