import Image from "next/image";
import style from "./PagesActive.module.scss";

const PagesActive = () => {
  return (
    <div>
      <div className={style.acivestyle}>
        <Image
          src={"/assets/logo/home.png"}
          width={20}
          height={20}
          alt="sdnd"
        />
        <a href="">
          <h5>Главная</h5>
        </a>
        <div className="">
          <Image
            src={"/assets/logo/left.png"}
            width={10}
            height={10}
            alt="sdnd"
          />
        </div>
        <a href="">
          <span>Квартиры</span>
        </a>
      </div>
      <div className=""></div>
    </div>
  );
};

export default PagesActive;
