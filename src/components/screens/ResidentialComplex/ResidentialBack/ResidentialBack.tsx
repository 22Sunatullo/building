import { ResidentalCard } from '../ResidentalCard/ResidentalCard'
import style from './ResidentialBack.module.scss'


export const ResidentialBack = () => {
  return (
    <div className={style.background}>
        <ResidentalCard/>
    </div>
  )
}
