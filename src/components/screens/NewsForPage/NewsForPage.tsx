import { NewsMap } from "./NewsMap/NewsMap"
import { NewsTitle } from "./NewsTitle/NewsTitle"
import style from './NewsForPage.module.scss'

export const NewsForPage = () => {
  return (
    <div>
        <NewsTitle/>
        <NewsMap/>
        <div className={style.buttonS}>
          <button>Все новости</button>
        </div>
    </div>
  )
}
