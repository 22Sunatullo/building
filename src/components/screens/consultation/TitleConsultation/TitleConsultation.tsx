import style from './TitleConsultation.module.scss'

export const TitleConsultation = ({
    title,
    text,
    title2
  }: {
    title?: string;
    title2?: string;
    text?: string;
  }) => {
  return (
    <div className={style.titleConsultation}>
        <h1>{title2}</h1>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
  )
}
