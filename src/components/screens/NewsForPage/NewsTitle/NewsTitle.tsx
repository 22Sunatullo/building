import Image from "next/image";
import style from "./NewsTitle.module.scss";

export const NewsTitle = () => {
  return (
    <>
      <div className={style.newsStyle}>
        <h1>Новости и наш инстаграм</h1>
      </div>
    </>
  );
};
