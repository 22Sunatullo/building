import style from './location.module.scss';

export const LocationD = () => {
  return (
    <div  className={style.map} >
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6237.903015061387!2d68.77500187770994!3d38.5809645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d38cce267a3d%3A0x56dfb7aa7b3d8219!2sK-Bunsik%20Korean%20Fast%20Food!5e0!3m2!1sru!2s!4v1687345288634!5m2!1sru!2s" style={{borderRadius:16}}></iframe>
    </div>
  );
};
