import { NewsCard } from "../NewsCard/NewsCard";
import NewsInfo from "../NewsInfo";
import style from './NewsMap.module.scss';

export const NewsMap = () => {
  return (
    <div className={style.cardG}>
        {
          NewsInfo.map(el =>{
            return <NewsCard key={el.id} {...el}/>
          })
        }
    </div>
  )
}
