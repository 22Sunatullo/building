import style from "./FooterModal.module.scss";

const FooterModal = () => {
  return (
    <div className={style.cotentFoot}>
      <h3>Есть вопросы или предложения?</h3>
      <h6>Напишите нам или позвоните нам</h6>
      <div className= {style.btns}>
        <button>Написать</button>
        <button>Позвонить</button>
      </div>
    </div>
  );
};

export default FooterModal;
