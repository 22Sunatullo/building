import { NewsMap } from "./NewsMap/NewsMap"
import { NewsTitle } from "./NewsTitle/NewsTitle"
import style from './NewsContent.module.scss'

export const NewsContent = () => {
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
