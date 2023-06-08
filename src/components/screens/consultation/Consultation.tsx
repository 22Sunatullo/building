import style from "./Consultation.module.scss";
import { FormConsultation } from "./FormConsultation/FormConsultation";
import { TitleConsultation } from "./TitleConsultation/TitleConsultation";

function Consultation({
  title,
  title2,
  text,
  btns,
}: {
  title?: string;
  title2?: string;
  text?: string;
  btns: string;
}) {
  return (
    <div className={style.container}>
      <TitleConsultation title={title} text={text}  title2 = {title2}/>
      <FormConsultation btns={btns}/>
    </div>
  );
}

export default Consultation;
