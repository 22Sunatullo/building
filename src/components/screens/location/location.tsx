import style from './location.module.scss';

export const LocationD = () => {
  return (
    <div >
      <iframe className={style.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24957.512847512204!2d68.79584008051756!3d38.56397618799171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d1359be98839%3A0x179df4b62dfd1226!2sKFC!5e0!3m2!1sru!2s!4v1686054807067!5m2!1sru!2s"
        width="590"
        height="300"
        style={{borderRadius:24}}
     
        loading="lazy"
      ></iframe>
    </div>
  );
};
