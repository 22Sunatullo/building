import style from "./Card2.module.scss";

interface DevelopeCont{
  title: string,
  coment: string
}

export const Card2 = ({title, coment}:DevelopeCont) => {
  return (
    <div className={style.card2}>
      <h1>{title}</h1>
      <p>
       {coment}
      </p>
    </div>
  );
};
