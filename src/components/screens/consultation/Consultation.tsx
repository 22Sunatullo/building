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
    <div>
      <div className={style.container}>
        <TitleConsultation title={title} text={text} title2={title2} />
        <FormConsultation btns={btns} />
      </div>

      <div className={style.mobile}>
        <h1>Получить консультацию</h1>
        <form action="">
          <div className={style.inputdiv}>
            <input
              type="name"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0  peer"
              placeholder="ФИО"
              required
            />
          </div>
          <div className={style.inputdiv}>
            <input
              type=""
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Ваш номер телефона"
              required
            />
          </div>
          <button>Отправить </button>
        </form>
      </div>
    </div>
  );
}

export default Consultation;
