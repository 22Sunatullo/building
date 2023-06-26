import style from './location.module.scss';

export const LocationD = () => {
  return (
    <div  className={style.map} >
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1311.360141189233!2d68.7928219704458!3d38.580823733266364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1687766002500!5m2!1sru!2s" style={{borderRadius:"16px"}}></iframe>
    </div>
  );
};
