import Image from "next/image";
import style from "./NewsTitle.module.scss";

export const NewsTitle = () => {
  return (
    <>
      <div className={style.newsStyle}>
        <h1>Новости и наш инстаграм</h1>
        <div className={style.buttonsNews}>
          <button>
            <Image
              src={"/assets/logo/note2.svg"}
              width={10}
              height={10}
              alt="sdnd"
            />
            Новости
          </button>
          <button>
            <Image
              src={"/assets/logo/instagram.svg"}
              width={10}
              height={10}
              alt="sdnd"
            />
            Инстаграм
          </button>
        </div>
      </div>
      <div className={style.whiteLine}></div>
    </>
  );
};
